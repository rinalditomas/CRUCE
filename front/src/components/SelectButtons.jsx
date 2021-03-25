import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import { Cadete } from "./RegisterUser";
import { Cadeteria } from "./RegisterCadeteria";

import useStyles from "../utils/stylesRegister";

const Main = () => {

   const classes = useStyles();

  const [button, setButton] = useState(true);
  const cadete = () => setButton(true)
  const cadeteria = () => setButton(false);
  
  return (
    <div>
      <div style={{ paddingTop: "3rem", paddingLeft: "5rem" }}>
        <Button
          variant="contained"
          size="large"
         
          className={classes.margin}
          onClick={cadete}
        >
          Cadete
        </Button>
        <Button
          variant="contained"
          size="large"
         
          className={classes.margin}
          onClick={cadeteria}
        >
          Cadeteria
        </Button>
        {!button ? (
          <>
            <Cadeteria />
          </>
        ) : (
          <>
            <Cadete />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
