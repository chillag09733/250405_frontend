import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { ApiContext } from "../context/ApiCOntext";

function LegorduloMezo(props) {
  const { getAdat } = useContext(ApiContext);

  const handleValtas = () => {
    getAdat(`/tests/${props.kategoria.id}`);
  };

  return <Dropdown.Item onClick={handleValtas}>{props.kategoria.kategorianev}</Dropdown.Item>;
}

export default LegorduloMezo;
