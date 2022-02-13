import BasketballTableRow from "../components/BasketballTable/BasketballTableRow/BasketballTableRow";
import BasketballGameDetails from "../components/SidebarModal/BasketballGameDetails/BasketballGameDetails";

export function convertBasketballTeamArrayToJSX(teams, toggleModal) {
  const convertedTeams = teams.map(
    ({ id, name, city, abbreviation, conference, division }) => {
      return (
        <BasketballTableRow
          key={id}
          teamName={name}
          city={city}
          abbreviation={abbreviation}
          conference={conference}
          division={division}
          toggleModal={toggleModal}
          teamId={id}
        />
      );
    }
  );

  return convertedTeams;
}

export function convertBasketballGamesArrayToJSX(games) {
  const convertedGames = games.map(
    ({
      id,
      date,
      home_team,
      home_team_score,
      visitor_team,
      visitor_team_score,
    }) => {
      return (
        <BasketballGameDetails
          key={id}
          date={new Date(date).toLocaleDateString("en-US")}
          homeTeam={home_team.name}
          homeTeamScore={home_team_score}
          visitorTeam={visitor_team.name}
          visitorTeamScore={visitor_team_score}
        />
      );
    }
  );

  return convertedGames;
}
