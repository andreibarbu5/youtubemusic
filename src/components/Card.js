import React from "react";

const Card = ({ title, cover, singer }) => {
  return (
    <div>
      <img src={cover} alt="" className="w-52" />
      <div className="flex flex-col ">
        <p>{title}</p>
        <p className="text-gray-400">{singer}</p>
      </div>
    </div>
  );
};

export default Card;
