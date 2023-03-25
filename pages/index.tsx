import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SpinningHex from "../src/components/SpinningHex";
import styles from "../styles/Home.module.css";
import SpinningBall from "./spinning";

const Home: NextPage = () => {
  return (
    <div className="text-3xl font-bold flex justify-center items-center h-screen bg-[#1da1f2] text-white">
      <div className="flex flex-col w-full h-full justify-center items-center flex-1">
        <div className="w-full h-full flex">
          <div className="flex flex-col w-1/3 h-full justify-center items-center flex-1 bg-gray-800">
            {"Heya, I'm EJ"}
          </div>
          <div className="w-1/2 h-1/2">
            {/* <SpinningBall id={Date.now()} />
             */}
            <SpinningHex />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
