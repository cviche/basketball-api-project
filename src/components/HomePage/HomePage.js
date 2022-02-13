import React, { useEffect, useState, createContext } from "react";
import { Container, Row } from "react-bootstrap";
import {
  fetchBasketballTeams,
  initializeBasketballTeams,
} from "../../services/basketball";
import { convertBasketballTeamArrayToJSX } from "../../services/jsx";
import BasketballTable from "../BasketballTable/BasketballTable";
import BasketballTableNavigation from "../BasketballTableNavigation/BasketballTableNavigation";
import Searchbar from "../Searchbar/Searchbar";
import SidebarModal from "../SidebarModal/SidebarModal";
export const HomeContext = createContext({});

function HomePage() {
  const [modalState, toggleModalState] = useState(false);
  const [modalTeam, setModalTeam] = useState(-1);
  const [allBasketballTeams, setAllBasketballTeams] = useState([]);
  const [currentBasketballTeams, setCurrentBasketballTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch the data from the API
    fetchBasketballTeams().then((teams) => {
      // Convert the data into jsx
      const convertedTeams = convertBasketballTeamArrayToJSX(
        teams,
        toggleModalState
      );
      // Initialize our states
      setAllBasketballTeams(convertedTeams);
      initializeBasketballTeams(
        convertedTeams,
        setCurrentPage,
        setCurrentBasketballTeams
      );
    });
  }, []);

  return (
    <div className="my-4">
      <HomeContext.Provider
        value={{
          allBasketballTeams,
          setAllBasketballTeams,
          currentBasketballTeams,
          setCurrentBasketballTeams,
          modalTeam,
          setModalTeam,
          currentPage,
          setCurrentPage,
          toggleModalState,
        }}
      >
        {modalState ? <SidebarModal /> : null}
        <Container>
          <Searchbar />
          <Row className="d-flex justify-content-center">
            <BasketballTable />
            <BasketballTableNavigation />
          </Row>
        </Container>
      </HomeContext.Provider>
    </div>
  );
}

export default HomePage;
