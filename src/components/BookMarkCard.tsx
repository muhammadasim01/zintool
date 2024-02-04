import React from "react";

const BookMarkCard = ({ heading, text, jsx }: IProp) => {
  return (
    <div className="p-5 border-[1px] border-gray-300 flex flex-col mr-3 mb-3 shadow-md rounded-sm h-[200px]">
      {jsx}
      <h1 className="text-xl font-bold my-2">{heading}</h1>
      <p className="w-[280px]">{text} </p>
    </div>
  );
};

export default BookMarkCard;
interface IProp {
  heading: string;
  text: string;
  jsx: JSX.Element;
}
