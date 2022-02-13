import React, { useContext } from "react";
import SortIcon from "./sortIcon.png";
import { HomeContext } from "../../HomePage/HomePage";
import {
  initializeBasketballTeams,
  sortBasketballCities,
} from "../../../services/basketball";

function BasketballTableHeader() {
  const {
    allBasketballTeams,
    setAllBasketballTeams,
    setCurrentPage,
    setCurrentBasketballTeams,
  } = useContext(HomeContext);
  return (
    <>
      <thead className="bg-info">
        <tr className="text-light">
          <th>Team Name</th>
          <th className="">
            <span className="mx-2">City</span>
            <img
              style={{ width: "15px", cursor: "pointer" }}
              src={SortIcon}
              alt="triangle"
              onClick={() => {
                const sorted = sortBasketballCities(allBasketballTeams);
                setAllBasketballTeams(sortBasketballCities(allBasketballTeams));
                initializeBasketballTeams(
                  sorted,
                  setCurrentPage,
                  setCurrentBasketballTeams
                );
              }}
            />
          </th>
          <th>Abbreviation</th>
          <th>Conference</th>
          <th>Division</th>
        </tr>
      </thead>
    </>
  );
}

export default BasketballTableHeader;
