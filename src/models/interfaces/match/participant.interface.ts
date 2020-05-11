export interface IParticipant{
    participantId: number;
    championId: number;
    teamId: number;
    spell1Id: number;
    spell2Id: number;
    stats: IParticipantStats;
}

export interface IParticipantStats {
    kills: number;
    deaths: number;
    assists: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
}