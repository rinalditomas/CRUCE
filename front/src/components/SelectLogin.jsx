import React from "react";
import useStyles from "../utils/stylesRegister";
import { useHistory } from "react-router";
import Box from "@material-ui/core/Box";
import { CustomButton } from "../utils/Buttons";

const Main = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div>
        <h1>Ingresar como</h1>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          style={{ marginTop: "4rem" }}
          bgcolor='green'
          width={300}
          ali
        >
          <Box
            display="flex"
            alignSelf="center"
            justifyContent="center"
            m={1}
            p={1}
            bgcolor="#f6f6f6"
            width={230}
          >
            <Box p={1} bgcolor="#f6f6f6">
              <Box display="flex" justifyContent="center">
                <img
                  className={classes.large2}
                  src={process.env.PUBLIC_URL + "deli.png"}
                  alt=""
                />
              </Box>
              <CustomButton
                /*  color="primary" */
                variant="contained"
                size="large"
                className={classes.button_cadete}
                onClick={() => history.push("/login-as/cadete")}
              >
                Cadete
              </CustomButton>
            </Box>
          </Box>

          <Box
            display="flex"
            alignSelf="center"
            justifyContent="center"
            width={230}
            m={1}
            p={1}
            bgcolor="#f6f6f6"
          >
            <Box p={1} bgcolor="#f6f6f6">
              <Box display="flex" justifyContent="center">
                <img
                  className={classes.large}
                  src={process.env.PUBLIC_URL + "asd.png"}
                  alt=""
                />
              </Box>
              <CustomButton
                variant="contained"
                color="red"
                onClick={() => history.push("/login-as/cadeteria")}
                size="large"
                className={classes.button_cadeteria}
              >
                Cadeteria
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Main;
