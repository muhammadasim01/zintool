"use client";
import React from "react";
import { AiFillFileWord } from "react-icons/ai";
import { RiFilePpt2Fill } from "react-icons/ri";
import { RiFileExcel2Fill } from "react-icons/ri";
import { BiSolidFileJpg } from "react-icons/bi";
import { TbFileTypeTxt } from "react-icons/tb";
import Slider from "react-slick";
import FeatureCard from "./FeatureCard";
import { useRouter } from "next/navigation";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        width: 20,
        height: 20,
        borderRadius: 20,
        cursor: "pointer",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

function Responsive() {
  const router = useRouter();
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="slider-container w-[93vw] px-6 "
      onClick={() => router.push("https://www.hipdf.com/all-tools")}
    >
      <Slider {...settings}>
        <FeatureCard
          text="Easily convert pdf to word documents"
          heading="PDFs to Word"
          jsx={<AiFillFileWord className="text-blue-500 text-5xl" />}
        />
        <FeatureCard
          text="Convert Pdf to power point onlines online"
          heading="PDFs to PPTs"
          jsx={<RiFilePpt2Fill className="text-red-500 text-5xl" />}
        />
        <FeatureCard
          text="convert Pdf to .xls for free"
          heading="PDFs to Excel"
          jsx={<RiFileExcel2Fill className="text-green-600 text-5xl" />}
        />
        <FeatureCard
          heading="Pdf to JPG"
          text="Convert PDFs to JPG online"
          jsx={<BiSolidFileJpg className="text-green-800 text-5xl" />}
        />
        <FeatureCard
          text="Convert PDFs to text format"
          heading="PDFs to TXT"
          jsx={<TbFileTypeTxt className="text-red-500 text-5xl" />}
        />
      </Slider>
    </div>
  );
}

export default Responsive;
