"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SecondaryNavbar from "@/components/NavLinks";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div>
      <Navbar setOpen={setOpenMenu} />
      <SecondaryNavbar open={openMenu} />
      {children}
      <Footer />
    </div>
  );
}
