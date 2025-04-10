import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to={"/components"}>
      <button
        className="w-largeButton h-largeButton  mt-8 rounded-4xl bg-chai dark:bg-chai-dark text-white
    font-bold text-[26px] drop-shadow-[6px_6px_2px_#b07a42] cursor-pointer dark:text-black dark:drop-shadow-[6px_6px_2px_#b07a42]
    ">
        View Components
      </button>
    </Link>
  );
};

export default Button;
