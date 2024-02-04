import BookMarkCard from "@/components/BookMarkCard";
import React from "react";
import { FaCropSimple } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { RiFindReplaceLine } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa6";
import PdfSlider from "@/components/CardSlider";

const page = () => {
  return (
    <div className="px-6">
      <h1 className="text-2xl font-extrabold">Your Bookmarks</h1>
      <div className="flex items-start  mt-3 flex-wrap">
        <BookMarkCard
          text="Use the best online tool to edit PDFs in your browser"
          heading="Edit PDFs"
          jsx={<FaCreditCard className="text-red-500 text-5xl" />}
        />
        <BookMarkCard
          text="Crop PDFs online to a selected area, adjust margin size...."
          heading="Crop PDFs"
          jsx={<FaCropSimple className="text-red-500 text-5xl" />}
        />
        <BookMarkCard
          text="The easiest way to replace text online"
          heading="Replace Text"
          jsx={<RiFindReplaceLine className="text-red-500 text-5xl" />}
        />
        <BookMarkCard
          text="Rotate and Save your PDFs online"
          heading="Rotate PDFs"
          jsx={<FaFilePdf className="text-red-500 text-5xl" />}
        />
      </div>
      <h1 className="text-2xl font-extrabold my-6">Convert from PDFs</h1>
      <PdfSlider />
      <h1 className="text-2xl font-extrabold my-6">Convert from PDFs</h1>
      <PdfSlider />
      <h1 className="text-2xl font-extrabold my-6">Convert from PDFs</h1>
      <PdfSlider />
    </div>
  );
};

export default page;
