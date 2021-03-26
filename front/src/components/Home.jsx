import React from "react";
import Carousel from "./Carousel";

const Home = () => {
  
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  token
    ? console.log("El usuario esta logueado")
    : console.log("no estas logueado");

  return (
    <div>
      {!user ? (
        <>
          <h1>NO estas logueado</h1>
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
