import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
//import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Olympics = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className="container mx-auto mb-10">
          <Header isBlog={true}></Header>
          <div className="mt-10 ml-4 mr-4 laptop:ml-28 laptop:mr-28">
            <img className="w-full h-full rounded-lg mb-6 laptop:mb-12 object-cover" src="/images/olympics/topBanner.svg" alt="header"></img>
            <h1 className="mx-auto mob:p-2 font-semibold text-5xl mb-6 laptop:text-6xl laptop:mt-15, mb-12" >Hometown Olympics</h1>
            <img className="w-full h-auto mb-14 rounded-lg shadow-lg object-cover" src="/images/olympics/olympics_info.svg" alt="info"></img>
            
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Ideating</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Going Back Home</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Choosing my hometown of Chennai, Tamil Nadu, India I thought back on what makes Chennai Chennai. I looked into the city’s rich inclusion of culture, art, and traditions. If focused on display’s the city’s <b>diversity</b>, <b>inclusivity</b>, and <b>Tamil culture</b>. Looking into architecture and the traditional art form of kolam, I was able to come up with my brand for the Olympics.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/olympics/Colors.svg" alt="typography"></img>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/olympics/Design.svg" alt="final logo design"></img>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/olympics/Design2.svg" alt="more designs"></img>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/olympics/Motif.svg" alt="motifs"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Product Design</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Let The Games Begin</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">After creating the brand, logo, and several motifs I created a couple of mockups of various merchendise that would be seen in the Olympics.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/olympics/idCard.svg" alt="id cards"></img>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/olympics/ticket.svg" alt="ticket"></img>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/olympics/poster.svg" alt="poster"></img>
          </div>
          <Footer />
        </div>
    </>
  );
};

export default Olympics;
