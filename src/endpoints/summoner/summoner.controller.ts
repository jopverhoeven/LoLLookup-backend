import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { SummonerService } from './summoner.service';
import { SummonerExternal } from 'src/models/external/summoner/summoner.external';
import { SummonerParams } from './params/summoner.params';
import { ApiError } from 'src/models/error/ApiError';

@Controller(':region/summoner')
export class SummonerController {
  constructor(
    private summonerService: SummonerService,
  ) {}

  @Get(':name')
  async getSummonerByName(@Param() params: SummonerParams): Promise<SummonerExternal> {
    let summonerExternal: SummonerExternal;
    await this.summonerService
      .getSummonerByName(params.name, params.region)
      .then(data => (summonerExternal = data))
      .catch(
        error => {
            console.log(error);
            const apiError: ApiError = new ApiError();
            apiError.errorCode = 'SUMMONER_NOT_FOUND';
            apiError.errorMessage = 'Could not find summoner with name \'' + params.name+ '\'';
            throw new HttpException(apiError, HttpStatus.BAD_REQUEST);
        }
    );
    return summonerExternal;
  }
}
