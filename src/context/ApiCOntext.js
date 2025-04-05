import React, { createContext, useEffect, useState } from "react";
import { MyAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [list, setList] = useState([]);

  function getAdat(vegpont) {
    MyAxios.get(vegpont)
      .then(function (response) {
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  useEffect(() => {
    getAdat("/tests");
  }, []);

  return (
    <ApiContext.Provider value={{ list, setList, getAdat}}>{children}</ApiContext.Provider>
  );
};
