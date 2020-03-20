"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keys_1 = require("./Keys");
exports.API_URL = 'https://euw1.api.riotgames.com/lol/';
exports.API_KEY_PARAMETER = '?api_key=';
exports.DATA_DRAGON = 'http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/';
exports.API_SUMMONER_BY_NAME_URL = 'summoner/v4/summoners/by-name/';
exports.API_MASTERY_BY_ID_URL = 'champion-mastery/v4/champion-masteries/by-summoner/';
exports.API_RANKED_BY_ID_URL = 'league/v4/entries/by-summoner/';
exports.API_MATCH_HISTORY_URL = 'match/v4/matchlists/by-account/';
exports.API_MATCH_DATA_URL = 'match/v4/matches/';
exports.DATA_DRAGON_CHAMPION_URL = exports.DATA_DRAGON + 'champion.json';
class Api {
    getMatchDataURL(matchId) {
        return exports.API_URL + exports.API_MATCH_DATA_URL + matchId + exports.API_KEY_PARAMETER + Keys_1.API_KEY;
    }
    getSummonerURL(name) {
        return exports.API_URL + exports.API_SUMMONER_BY_NAME_URL + name + exports.API_KEY_PARAMETER + Keys_1.API_KEY;
    }
    getMasteryURL(id) {
        return exports.API_URL + exports.API_MASTERY_BY_ID_URL + id + exports.API_KEY_PARAMETER + Keys_1.API_KEY;
    }
    getChampionDataURL() {
        return exports.DATA_DRAGON_CHAMPION_URL;
    }
    getRankedURL(id) {
        return exports.API_URL + exports.API_RANKED_BY_ID_URL + id + exports.API_KEY_PARAMETER + Keys_1.API_KEY;
    }
    getMatchHistoryURL(accountId, start, end) {
        const url = exports.API_URL + exports.API_MATCH_HISTORY_URL + accountId + exports.API_KEY_PARAMETER + Keys_1.API_KEY + '&beginIndex=' + start + '&endIndex=' + end;
        return url;
    }
}
exports.Api = Api;
//# sourceMappingURL=Api.js.map