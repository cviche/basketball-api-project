import axios from "axios";

// Fetch data from the api
export async function fetchBasketballTeams() {
  try {
    const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
    if (response.status !== 200)
      throw new Error("There was an error when fetching the data");

    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetch basketball games from an api
export async function getGames(teamId) {
  try {
    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/games?seasons[]=2021&per_page=100&team_ids[]=${teamId}`
    );

    if (response.status !== 200)
      throw new Error("The request made was invalid.");

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function findTeamDetails(teams, id) {
  const { home_team } = teams.data.find(
    (team) => team.home_team.id === id || team.visitor_team.id === id
  );
  return home_team;
}

// Slices the basketball team into rows of seven
export function sliceBasketballTeams(teams, page) {
  const maxRows = teams.length;
  const pageSize = 7;
  const firstPage = 1;
  const lastPage = Math.floor(maxRows / pageSize);

  // Wraps around the table
  if (page < firstPage) {
    page = lastPage;
  } else if (page > lastPage) {
    page = firstPage;
  }

  // Slice the array that contains all the teams from startingIndex to endingIndex
  const startingIndex = (page - 1) * pageSize;
  let endingIndex = page * pageSize;
  if (page === Math.floor(maxRows / pageSize)) {
    endingIndex = maxRows;
  }
  return { newTeams: teams.slice(startingIndex, endingIndex), newPage: page };
}

export function initializeBasketballTeams(
  teams,
  setCurrentPage,
  setCurrentBasketballTeams
) {
  // Finds the right table page to display and set the value
  const { newTeams, newPage } = sliceBasketballTeams(teams, 1);
  setCurrentPage(newPage);
  setCurrentBasketballTeams(newTeams);
}

// Filters the basketball teams with the string 'teamName'
export function filterBasketballTeams(teams, teamName) {
  return teams.filter((team) => {
    return team.props.teamName.toLowerCase().includes(teamName.toLowerCase());
  });
}

export function sortBasketballCities(teams) {
  const teamsCopy = [...teams];
  return teamsCopy.reverse();
}
