import React from "react";
import cover5 from "../photos/cover5.jpg";
import cover6 from "../photos/cover6.jpg";
import cover7 from "../photos/cover7.jpg";
import Card from "./Card";

const Jazz = () => {
  const trendingSongs = [
    { title: "Ultimate Jazz Hits", cover: cover5, singer: "Joshua D." },
    { title: "Ultimate Jazz Hits", cover: cover6, singer: "Joshua D." },
    { title: "Ultimate Jazz Hits", cover: cover7, singer: "Joshua D." },
    { title: "Ultimate Jazz Hits", cover: cover5, singer: "Joshua D." },
    { title: "Ultimate Jazz Hits", cover: cover6, singer: "Joshua D." },
    { title: "Ultimate Jazz Hits", cover: cover7, singer: "Joshua D." },
  ];
  return (
    <div className="text-white px-4 lg:max-w-[75vw] mx-auto mt-10">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-[18px] -mb-1">Best of Jazz</p>
          <p className="text-[42px] font-bold">Jazz</p>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6  gap-4 pt-4">
        {trendingSongs.map((song) => (
          <Card title={song.title} cover={song.cover} singer={song.singer} />
        ))}
      </div>
    </div>
  );
};

export default Jazz;
