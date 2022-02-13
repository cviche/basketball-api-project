import React from "react";
import { Row, Col } from "react-bootstrap";

function BasketballGameDetails({
  date,
  homeTeam,
  homeTeamScore,
  visitorTeam,
  visitorTeamScore,
}) {
  return (
    <>
      <Row className="bold my-3 mx-1">
        <Col span={6}>Date</Col>
        <Col span={6}>{date}</Col>
      </Row>
      <Row className="bold my-3 mx-1">
        <Col span={6}>Home Team</Col>
        <Col span={6}>{homeTeam}</Col>
      </Row>
      <Row className="bold my-3 mx-1">
        <Col span={6}>Home Team Score</Col>
        <Col span={6}>{homeTeamScore}</Col>
      </Row>
      <Row className="bold my-3 mx-1">
        <Col span={6}>Visitor Team</Col>
        <Col span={6}>{visitorTeam}</Col>
      </Row>
      <Row className="bold my-3 mx-1 border-bottom pb-4">
        <Col span={6}>Visitor Team Score</Col>
        <Col span={6}>{visitorTeamScore}</Col>
      </Row>
    </>
  );
}

export default BasketballGameDetails;
