import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { HomeContext } from "../../HomePage/HomePage";

function SidebarHeader({ name }) {
  const { toggleModalState, setModalTeam } = useContext(HomeContext);

  return (
    <>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>{name}</h3>
        <Card.Text
          onClick={() => {
            toggleModalState(false);
            setModalTeam(-1);
          }}
          className="exit-modal "
        >
          &#x2715;
        </Card.Text>
      </Card.Header>
    </>
  );
}

export default SidebarHeader;
