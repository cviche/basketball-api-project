import React from "react";
import { Table, Col } from "react-bootstrap";
import BasketballTableBody from "./BasketballTableBody/BasketballTableBody";
import BasketballTableHeader from "./BasketballTableHeader/BasketballTableHeader";

function BasketballTable() {
  return (
    <>
      <Col md={{ span: 8 }}>
        <Table hover size="sm">
          <BasketballTableHeader />
          <BasketballTableBody />
        </Table>
      </Col>
    </>
  );
}

export default BasketballTable;
