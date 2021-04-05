import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { useSelector, useDispatch } from "react-redux";
import { setUser , fetchMe} from "../state/user";
import { Redirect, useHistory } from "react-router-dom";

const Home = () => {

  const user = useSelector((state) => state.cadete);

  const dispatch = useDispatch();

  console.log('User en home===>', user)

  return (
    <div>
      {user ? (
        <>
          <h1>No estas logueado</h1>
        </>
      ) : (
        <>
          <h1>{`Bienvenido ${user.firstName} ${user.lastName}`}</h1>
          <Carousel />
        </>
      )}
    </div>
  );
};

export default Home;
