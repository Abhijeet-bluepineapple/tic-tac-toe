import React from "react";
import Board from "../components/board";

const Home = () => (
  <div className="text-sans bg-black min-h-screen flex flex-row justify-center items-center">
    <div className="mx-auto">
      <Board />
    </div>
  </div>
);

export default Home;
