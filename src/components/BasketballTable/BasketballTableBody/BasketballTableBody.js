import React, { useContext } from "react";
import { HomeContext } from "../../HomePage/HomePage";

function BasketballTableBody() {
  const { currentBasketballTeams } = useContext(HomeContext);
  return (
    <>
      <tbody>{currentBasketballTeams}</tbody>
    </>
  );
}

export default BasketballTableBody;
