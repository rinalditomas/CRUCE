import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Chip,
  Grid,
} from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Link } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";
import { useDispatch, useSelector } from "react-redux";
import { allCadeterias, editStateCadeteria } from "../../state/cadeterias";
import Request from "../../utils/Request";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    maxWidth: 752,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function ListCadeterias() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const cadeterias = useSelector((state) => state.cadeterias.cadeterias);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCadeterias());
  }, []);

  const handleActive = (id) => {
    dispatch(editStateCadeteria(id)).then((res) => {
      res.payload
        ? alert("Estado cambiado correctamente")
        : alert("Hubo un problema");
    });
  };

  return (
    <>
      <Grid
        container
        xs={12}
        xl={12}
        direction="column"
        justify="center"
        alignItems="stretch"
        style={{ margin: 3, padding: 10 }}
      >
        <div>
          <h1 className="titulo">Lista de cadeterias</h1>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconButton edge="end" aria-label="delete" className="icono">
              <GroupAddIcon fontSize="large" />
            </IconButton>
          </Link>
        </div>
        <Grid Item>
          {cadeterias &&
            cadeterias.map((cadeteria) => {
              return cadeteria.authorized ? (
                <Request cadeteria={cadeteria} handleActive={handleActive} />
              ) : null;
            })}
        </Grid>
      </Grid>
    </>
  );
}
