import React, { useContext } from "react";
import { FormControl, InputGroup, Row, Col } from "react-bootstrap";
import { ReactComponent as SearchbarIcon } from "./search-solid.svg";
import { HomeContext } from "../HomePage/HomePage";
import {
  filterBasketballTeams,
  initializeBasketballTeams,
} from "../../services/basketball";
function Searchbar() {
  const { setCurrentBasketballTeams, allBasketballTeams, setCurrentPage } =
    useContext(HomeContext);
  return (
    <>
      <Row className="">
        <Col md={{ span: 4, offset: 2 }}>
          <InputGroup
            onChange={(e) => {
              // If the user has typed something, then emptied the search bar,
              // We reinitialize the table to start at page 1
              if (e.target.value === "") {
                initializeBasketballTeams(
                  allBasketballTeams,
                  setCurrentPage,
                  setCurrentBasketballTeams
                );
                return;
              }

              // Otherwise, if the user has typed something,
              // we filter the table
              const filteredTeams = filterBasketballTeams(
                allBasketballTeams,
                e.target.value
              );
              setCurrentBasketballTeams(filteredTeams);
            }}
            className="mb-3"
          >
            <InputGroup.Text id="basic-addon1">
              <SearchbarIcon width="20px" />
            </InputGroup.Text>
            <FormControl />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
}

export default Searchbar;
