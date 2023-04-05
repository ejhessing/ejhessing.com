import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const SpinningHex = dynamic(() => import("../src/components/SpinningHex"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="text-3xl font-bold flex justify-center items-center h-screen bg-gray-800 text-white">
      <div className="flex flex-col w-full h-full justify-center items-center flex-1">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="w-full h-1/2 md:w-1/2 md:h-full flex justify-center items-center md:order-2">
            <SpinningHex />
          </div>
          <div className="flex flex-col w-full px-5 md:w-1/2 h-full justify-center items-center md:items-start md:pl-20 bg-gray-800">
            <h1 className="w-full text-4xl font-bold ">
              {`Hi, I'm Erwin Hessing (EJ)!`}
            </h1>
            <p className="text-xl md:mr-20 mt-10 ">
              {`I'm a proud father, loving husband, avid gamer, and passionate
              basketball fan. When I'm not spending time with my family or
              enjoying my hobbies, I work as a software engineer.`}
            </p>
            <Link href="/projects">
              <a className="text-2xl text-left mt-20 text-gray-300 rounded-2xl w-full flex justify-start">
                Projects
              </a>
            </Link>
            <a
              href="mailto:ejhessing@gmail.com"
              className="text-2xl text-left my-5 text-gray-300  rounded-2xl w-full flex justify-start"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
