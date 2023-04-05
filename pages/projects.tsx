import dynamic from "next/dynamic";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";

const ElementalChess = dynamic(() => import("../src/games/ElementalChess"), {
  ssr: false,
});

export const Projects = () => {
  return (
    <div className="text-lg font-bold flex justify-center items-center h-screen bg-gray-800 text-white p-20">
      <ElementalChess width={350} height={350} />
    </div>
  );
};

export default Projects;
