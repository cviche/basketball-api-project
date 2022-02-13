import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { HomeContext } from "../HomePage/HomePage";
import { sliceBasketballTeams } from "../../services/basketball";

function BasketballTableNavigation() {
  const {
    currentPage,
    setCurrentPage,
    setCurrentBasketballTeams,
    allBasketballTeams,
  } = useContext(HomeContext);
  return (
    <Row>
      <Col md={{ span: 10 }}>
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => {
              const { newPage, newTeams } = sliceBasketballTeams(
                allBasketballTeams,
                currentPage - 1
              );
              setCurrentPage(newPage);
              setCurrentBasketballTeams(newTeams);
            }}
            className="mx-2"
            variant="info"
          >
            &lt;
          </Button>
          <Button className="mx-2" variant="info">
            {currentPage}
          </Button>
          <Button className="mx-2" variant="info">
            {4}
          </Button>
          <Button
            onClick={() => {
              const { newPage, newTeams } = sliceBasketballTeams(
                allBasketballTeams,
                currentPage + 1
              );
              setCurrentPage(newPage);
              setCurrentBasketballTeams(newTeams);
            }}
            className="mx-2"
            variant="info"
          >
            &gt;
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default BasketballTableNavigation;
