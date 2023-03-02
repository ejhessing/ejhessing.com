import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ThreeScene from "./spinning";

const Home: NextPage = () => {
  return (
    <div className="text-3xl font-bold flex justify-center items-center h-screen bg-[#1da1f2] text-white">
      {/* <div>{"Heya, I'm EJ"}</div> */}
      <div className="h-full w-full">
        <ThreeScene />
      </div>
    </div>
  );
};

export default Home;
