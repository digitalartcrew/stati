const axios = require("axios");

const MLB_BASE_URL = "https://statsapi.mlb.com/api/v1";

// Get live game data
const getLiveGameData = async (gamePk) => {
  const url = `${MLB_BASE_URL}.1/game/${gamePk}/feed/live`;
  const response = await axios.get(url);
  return response.data;
};

// Get team roster
const getTeamRoster = async (teamId, season) => {
  const url = `${MLB_BASE_URL}/teams/${teamId}/roster?season=${season}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { getLiveGameData, getTeamRoster };
