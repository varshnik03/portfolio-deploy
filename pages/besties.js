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

const Besties = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className="container mx-auto mb-10">
          <Header isBlog={true}></Header>
          <div className="mt-10 ml-4 mr-4 laptop:ml-40 laptop:mr-40">
            <img className="w-full h-full rounded-lg mb-6 laptop:mb-12 object-cover" src="/images/besties/topBanner.svg" alt="header"></img>
            <h1 className="mx-auto mob:p-2 font-semibold text-5xl mb-6 laptop:text-6xl laptop:mt-15, mb-12" >Besties</h1>
            <img className="w-full h-auto mb-14 laptop:mb-20 rounded-lg shadow-lg object-cover" src="/images/besties/besties_info.svg" alt="info"></img>
            
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">User Flow Wireframes</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Understanding The Game</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">As a team, we planned out what mobile screens would be needed and how the user flow would work between the screens.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/besties/userFlowPic.svg" alt="pic of user flow planning"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">High-Fidelity Wireframes</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Designing The Screens</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Using our initial brainstorming, I designed wireframes for what the mobile screens would look like. I also worked on designing the web screens along with one of the full stack developers. We decided to keep the web screen interactions simple as we were more focused on developing the mobile screens.</p>
            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">Mobile Screens</h2>
            <img className="w-full h-auto mb-4 laptop:mb-12 rounded-lg object-cover" src="/images/besties/FinalDesignMobile.svg" alt="mobile screens"></img>
            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">Desktop Screens</h2>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/besties/FinalDesignWeb.svg" alt="desktop screens"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Frontend Development & Integration</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Bringing It To Life</h1>
            <p className="mb-1 laptop:mb-4 opacity-80 leading-7 font-normal text-base laptop:text-xl">After completing the wireframes, I worked on coding them using Svelte along with one of the full stack developers. Then, as a team we worked on integrating the project end-to-end.</p>
            <a href="https://github.com/acm-projects/Besties" target="_blank"><p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl"><u>Click here to view our code on Github!</u></p></a>
            
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">My Takeways</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">What I Learned</h1>
            <p className="mb-12 laptop:mb-20 opacity-80 leading-7 font-normal text-base laptop:text-xl">As this was my first time working on a full-stack project, I learned a lot about project planning and development collaboration with a team of developers. As a frontend developer, I gained experience in designing game screens and translating those designs into functional code.</p>
            </div>
          <Footer />
        </div>
    </>
  );
};

export default Besties;
