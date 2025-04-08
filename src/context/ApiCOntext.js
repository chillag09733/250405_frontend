import React, { createContext, useEffect, useState } from "react";
import { MyAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {

  const [tesztek, setTesztek] = useState([]);
  const [kategoriak, setKategoriak] = useState([]);

  function getAdat(vegpont) {
    console.log("Lekérés:", vegpont);
    MyAxios.get(vegpont)
      .then(function (response) {
        if (vegpont === "/tests") {
          setTesztek(response.data);
        } else if (vegpont === "/categories") {
          setKategoriak(response.data);
        }})
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  return (
    <ApiContext.Provider value={{ getAdat, tesztek, kategoriak }}>{children}</ApiContext.Provider>
  );
};
