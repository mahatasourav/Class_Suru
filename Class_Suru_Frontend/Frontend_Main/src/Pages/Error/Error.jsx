import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Someting Wents Wrong</h1>
      <p>{error || "An unexpected error occurred"}</p>
    </>
  );
};

export default Error;
