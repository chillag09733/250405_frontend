import React, { useContext, useEffect, useState } from "react";
import Kerdes from "./Kerdes";
import { ApiContext } from "../context/ApiCOntext";

function Kerdesek() {
  const { tesztek, getAdat } = useContext(ApiContext);
  const [pontok, setPontok] = useState(0)

  useEffect(() => {
    getAdat("/tests");
  }, []);

  useEffect(() => {
    //új kérdéslista esetén lenullázza a pontszámot
    setPontok(0)
  }, [tesztek]);

  const kezeldValaszt = (pont) => {
    setPontok((prev) => prev + pont);
  }

  return (
    <>
      {tesztek.map((kerdes) => {
        return <Kerdes kerdes={kerdes} key={kerdes.id} onValasz={kezeldValaszt}/>;
      })}
      {tesztek.length > 0 && (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          {`Eddig elért pontszám: ${pontok} / ${tesztek.length} pont`}
        </div>
      )}
    </>
  );
}

export default Kerdesek;
