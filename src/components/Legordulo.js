import React, { useContext, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ApiContext } from "../context/ApiCOntext";
import LegorduloMezo from "./LegorduloMezo";

function Legordulo() {
  const { kategoriak, getAdat } = useContext(ApiContext);

  useEffect(() => {
    getAdat("/categories"); 
  }, []);

  useEffect(() => {
    console.log("Frissített lista:", kategoriak);
  }, [kategoriak]);

  return (
    <DropdownButton id="dropdown-basic-button" title="Kategóriák">
      {kategoriak.map((kategoria) => {
        return <LegorduloMezo kategoria={kategoria} key={kategoria.id} />;
      })}
    </DropdownButton>
  );
}

export default Legordulo;
