import React, { useContext } from "react";
import "./BasketballTableRow.css";
import { HomeContext } from "../../HomePage/HomePage";

function BasketballTableRow({
  teamName,
  city,
  abbreviation,
  conference,
  division,
  toggleModal,
  teamId,
}) {
  const { modalTeam, setModalTeam } = useContext(HomeContext);
  return (
    <>
      <tr
        className={`clickable-row bold ${
          modalTeam === teamId ? "row-active" : null
        }`}
        onClick={() => {
          toggleModal(true);
          setModalTeam(teamId);
        }}
      >
        <td>{teamName}</td>
        <td>{city}</td>
        <td>{abbreviation}</td>
        <td>{conference}</td>
        <td>{division}</td>
      </tr>
    </>
  );
}

export default BasketballTableRow;
