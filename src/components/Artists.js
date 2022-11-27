import React from "react";
import photo1 from "../photos/1.jpg";
import photo2 from "../photos/2.jpg";
import photo3 from "../photos/3.jpg";
import photo4 from "../photos/4.jpg";
import photo5 from "../photos/5.jpg";

const Artists = () => {
  const artists = [
    { picture: photo1, css: "" },
    { picture: photo2, css: "relative z-20" },
    { picture: photo3, css: "relative z-30    !w-28  !h-28 md:!w-48 md:!h-48" },
    { picture: photo4, css: "relative z-20 " },
    { picture: photo5, css: "" },
  ];
  return (
    <div className="flex flex-col  items-center   text-white mx-auto justify-center pt-10 mb-12">
      <div className="flex items-center -space-x-4 md:-space-x-12">
        {artists.map((artist) => (
          <div className={`flex w-20 h-20 md:h-40 md:w-40 ${artist.css}`}>
            <img
              src={artist.picture}
              alt=""
              className="object-cover rounded-full"
            />
          </div>
        ))}
      </div>

      <div className="pt-12 ">
        <p className="text-[30px]">Subscribe to The Playlist</p>
        <div className="flex justify-center mt-2">
          <div className="flex justify-center bg-white text-black w-[6rem] p-2 px-4 rounded-full">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
