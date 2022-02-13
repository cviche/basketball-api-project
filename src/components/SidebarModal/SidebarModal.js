import React, { useContext, useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { getGames, findTeamDetails } from "../../services/basketball";
import { convertBasketballGamesArrayToJSX } from "../../services/jsx";
import "./SidebarModal.css";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import { HomeContext } from "../HomePage/HomePage";

function SidebarModal() {
  const { modalTeam } = useContext(HomeContext);
  const [basketballGameDetails, setBasketballGameDetails] = useState([]);
  const [teamDetails, setTeamDetails] = useState("");

  // Fetch the basketball games data played in 2021
  useEffect(() => {
    getGames(modalTeam).then((response) => {
      const convertedGames = convertBasketballGamesArrayToJSX(response.data);
      setBasketballGameDetails(convertedGames);
      setTeamDetails(findTeamDetails(response, modalTeam));
    });
  }, [modalTeam]);
  return (
    <div className="modal-container">
      <Card style={{ width: "30rem", height: "100vh" }}>
        <SidebarHeader name={teamDetails.name} />
        <Card.Body className="overflow-scroll">
          <Container>
            <Row>
              <Col span={6}>Team Full Name</Col>
              <Col span={6}>{teamDetails.full_name}</Col>
            </Row>
            <Row className="my-2">
              <Col span={6}>Team Total Games</Col>
              <Col span={6}>{basketballGameDetails.length}</Col>
            </Row>
            <Row className="bold my-2">
              <Col span={6}>Random Game Details</Col>
            </Row>
          </Container>
          {basketballGameDetails}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SidebarModal;
