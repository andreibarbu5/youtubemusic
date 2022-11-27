import React from "react";
import { MdLibraryMusic } from "react-icons/md";
import cover from "../photos/cover.jpg";
import cover2 from "../photos/cover2.webp";
import Song from "./Song";

const Trending = () => {
  const songs = [
    { title: "Summer Vibes", singer: "Michael P.", cover: cover },
    { title: "Cash", singer: "Rob Tony", cover: cover2 },
    { title: "Summer Vibes", singer: "Michael P.", cover: cover },
    { title: "Cash", singer: "Rob Tony", cover: cover2 },
    { title: "Summer Vibes", singer: "Michael P.", cover: cover },
    { title: "Cash", singer: "Rob Tony", cover: cover2 },
    { title: "Summer Vibes", singer: "Michael P.", cover: cover },
    { title: "Cash", singer: "Rob Tony", cover: cover2 },
    { title: "Summer Vibes", singer: "Michael P.", cover: cover },
  ];
  return (
    <div className="text-white px-4 lg:max-w-[75vw]   mx-auto mt-20">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-[18px] -mb-1">MOST POPULAR SONGS NOW</p>
          <p className="text-[42px] font-bold">Trending</p>
        </div>
        <MdLibraryMusic className="text-[40px]" />
      </div>
      {/* Songs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
        {songs.map((song) => (
          <Song title={song.title} singer={song.singer} cover={song.cover} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
