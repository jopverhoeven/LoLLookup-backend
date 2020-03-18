import { IMiniSeries } from 'src/models/interfaces/ranked/miniseries.interface';

export class MiniSeriesExternal implements IMiniSeries {
  progress: string;
  losses: number;
  target: number;
  wins: number;
}
