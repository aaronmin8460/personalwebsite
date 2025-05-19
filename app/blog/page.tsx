"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AnimatedList from './AnimatedList';

const items = [
    "algorithms",
    "data-structures",
];

const Leet = () => {
  const router = useRouter();

  const handleSelect = (item: string, _index: number) => {
    console.log("Selected item:", item);
    router.push(`/blogpost/${item}`); 
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      <h1 className="text-4xl text-center font-bold pt-15">Blog Post</h1>
      <div className="flex flex-col items-start justify-top pt-15 h-full px-4 overflow-y-auto">
        <AnimatedList
          items={items}
          onItemSelect={handleSelect}
          showGradients={false}
          enableArrowNavigation={true}
          displayScrollbar={true}
        />
      </div>
    </div>
  );
};

export default Leet;
