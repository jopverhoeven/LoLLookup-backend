"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keys_1 = require("./Keys");
const Region_1 = require("./Region");
class Api {
    constructor() {
        this.API_URL = 'https://{region}.api.riotgames.com/lol/';
        this.API_KEY_PARAMETER = '?api_key=';
        this.API_SUMMONER_BY_NAME_URL = 'summoner/v4/summoners/by-name/';
        this.API_MASTERY_BY_ID_URL = 'champion-mastery/v4/champion-masteries/by-summoner/';
        this.API_RANKED_BY_ID_URL = 'league/v4/entries/by-summoner/';
        this.API_MATCH_HISTORY_URL = 'match/v4/matchlists/by-account/';
        this.API_MATCH_DATA_URL = 'match/v4/matches/';
        this.DATA_DRAGON = 'http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/';
        this.DATA_DRAGON_CHAMPION_URL = this.DATA_DRAGON + 'champion.json';
    }
    setRegion(region) {
        let riotRegionName;
        for (let index = 0; index < Region_1.REGIONS.length; index++) {
            const element = Region_1.REGIONS[index];
            if (element.internalname.toLowerCase() === region.toLowerCase()) {
                riotRegionName = element.riotname;
                break;
            }
        }
        this.API_URL = this.API_URL.replace('{region}', riotRegionName);
    }
    getMatchDataURL(matchId) {
        return (this.API_URL +
            this.API_MATCH_DATA_URL +
            matchId +
            this.API_KEY_PARAMETER +
            Keys_1.API_KEY);
    }
    getSummonerURL(name) {
        return (this.API_URL +
            this.API_SUMMONER_BY_NAME_URL +
            name +
            this.API_KEY_PARAMETER +
            Keys_1.API_KEY);
    }
    getMasteryURL(id) {
        return (this.API_URL +
            this.API_MASTERY_BY_ID_URL +
            id +
            this.API_KEY_PARAMETER +
            Keys_1.API_KEY);
    }
    getChampionDataURL() {
        return this.DATA_DRAGON_CHAMPION_URL;
    }
    getRankedURL(id) {
        return (this.API_URL +
            this.API_RANKED_BY_ID_URL +
            id +
            this.API_KEY_PARAMETER +
            Keys_1.API_KEY);
    }
    getMatchHistoryURL(accountId, start, end) {
        const url = this.API_URL +
            this.API_MATCH_HISTORY_URL +
            accountId +
            this.API_KEY_PARAMETER +
            Keys_1.API_KEY +
            '&beginIndex=' +
            start +
            '&endIndex=' +
            end;
        return url;
    }
}
exports.Api = Api;
//# sourceMappingURL=Api.js.map