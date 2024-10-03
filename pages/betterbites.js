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

const BetterBites = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className="container mx-auto mb-10">
          <Header isBlog={true}></Header>
          <div className="mt-10 ml-4 mr-4 laptop:ml-14,mr-14">
            <img className="w-full h-auto rounded-lg mb-6 laptop:mb-12 shadow-lg object-cover" src="/images/skulls.JPG" alt="header"></img>
            <h1 className="mx-auto mob:p-2 text-bold text-5xl mb-6 laptop:text-6xl laptop:mt-15, mb-12" >Better Bites</h1>
            <img className="w-full h-auto mb-14 rounded-lg shadow-lg object-cover" src="/images/betterbites_info.svg" alt="header"></img>
            
            <h1 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Understanding The Problem</h1>
            <h1 className="mb-6 text-2xl laptop:text-4xl font-bold">The Issue At Hand</h1>
            <p className="mb-14 opacity-80 leading-7 font-normal text-base">College students have a lot on their plate and often don’t have time to prioritize their meals. They have limitations and restrictions what they can afford, available cooking supplies and time. Because of this, they end up eating <b>quick-meals that are usually unhealthy</b>.</p>

            <h1 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">User Insights</h1>
            <h1 className="mb-6 text-2xl laptop:text-4xl font-bold">What The Users Are Saying</h1>
            <p className="mb-14 opacity-80 leading-7 font-normal text-base">We reviewed three given user personas that represented our target audience.</p>
            <img className="w-full h-auto mb-14 rounded-lg object-cover" src="/images/takeawaysAndEmpathy.svg" alt="header"></img>

          
          </div>
          <Footer />
        </div>
    </>
  );
};

export default BetterBites;
