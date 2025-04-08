import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function Kerdes(props) {
  const kerdesId = props.kerdes.id;
  const helyesValasz = props.kerdes.helyes;

  const [valasz, setValasz] = useState(null); 
  const [lezart, setLezart] = useState(false);

  const valaszok = [
    { value: 1, text: props.kerdes.v1 },
    { value: 2, text: props.kerdes.v2 },
    { value: 3, text: props.kerdes.v3 },
    { value: 4, text: props.kerdes.v4 },
  ];

  const handleValasz = (selectedValue) => {
    if (!lezart) {
      setValasz(selectedValue);
      setLezart(true);

      const selectedSzoveg = valaszok.find(
        (v) => v.value === selectedValue
      )?.text;
      const helyes = selectedSzoveg === helyesValasz;
      props.onValasz(helyes ? 1 : 0);
    }
  };

  const getGombSzin = (value) => {
    if (!lezart) return "outline-secondary";
    const selectedSzoveg = valaszok.find((v) => v.value === value)?.text;
    if (valasz === value && selectedSzoveg === helyesValasz) return "success";
    if (valasz === value && selectedSzoveg !== helyesValasz) return "danger";
    return "secondary";
  };

  return (
    <>
      <p>{props.kerdes.kerdes}</p>
      <ToggleButtonGroup
        type="radio"
        name={`options-${kerdesId}`}
        value={valasz}
        onChange={handleValasz}
      >
        {valaszok.map((val) => (
          <ToggleButton
            key={val.value}
            id={`radio-${kerdesId}-${val.value}`}
            value={val.value}
            variant={getGombSzin(val.value)}
            disabled={lezart}
          >
            {val.text}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
}

export default Kerdes;
