import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { DesktopNavigation } from "../src/components/Nav";
import SpinningHex from "../src/components/SpinningHex";
import styles from "../styles/Home.module.css";
import SpinningBall from "./spinning";

const Home: NextPage = () => {
  return (
    <div className="text-3xl font-bold flex justify-center items-center h-screen bg-[#1da1f2] text-white">
      {/* <DesktopNavigation /> */}
      <div className="flex flex-col w-full h-full justify-center items-center flex-1">
        <div className="w-full h-full flex">
          <div className="flex flex-col w-1/3 h-full justify-center items-center flex-1 bg-gray-800 pl-20">
            <h1 className="w-full text-4xl font-bold ">
              Hi, I'm Erwin Hessing (EJ)!
            </h1>
            <p className="text-xl mr-20 mt-10 ">
              I'm a proud father, loving husband, avid gamer, and passionate
              basketball fan. When I'm not spending time with my family or
              enjoying my hobbies, I work as a software engineer.
            </p>
            <a
              href="mailto:ejhessing@gmail.com"
              className="text-2xl text-left my-20 text-gray-300  rounded-2xl w-full flex justify-start"
            >
              Contact me
            </a>
          </div>

          <div className="w-1/2 h-full">
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
