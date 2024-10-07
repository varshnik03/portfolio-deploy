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

const DietAI = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className="container mx-auto mb-10">
          <Header isBlog={true}></Header>
          <div className="mt-10 ml-4 mr-4 laptop:ml-28 laptop:mr-28">
            <img className="w-full h-full rounded-lg mb-6 laptop:mb-12 object-cover" src="/images/dietai/topBanner.svg" alt="header"></img>
            <h1 className="mx-auto mob:p-2 font-semibold text-5xl mb-6 laptop:text-6xl laptop:mt-15, mb-12" >DietAI</h1>
            <img className="w-full h-auto mb-14 rounded-lg shadow-lg object-cover" src="/images/dietai/dietai_info.svg" alt="info"></img>
            
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">High-Fidelity Wireframes</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Designing The App</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">DietAI needed to be a simple yet effective way for users to track their calories using AI. So, I decided to use a minimal/modern ui while keeping the app in dark mode to appeal to the majority of its audience. After many iterations and back-and-forth sessions with the developers/creators, we decided on these seven screens.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/dietai/highFiScreens.svg" alt="high-fi screens"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Development</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Bringing It To Life</h1>
            <p className="mb-1 laptop:mb-4 opacity-80 leading-7 font-normal text-base laptop:text-xl">After designing the screens, they were handed off to the developers to code them. I also designed four app preview screens to be displayed in the App Store.</p>
            <a href="https://apps.apple.com/us/app/dietai-calorie-counter/id6451091585" target="_blank"><p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl"><u>Click here to view a DietAI in the AppStore!</u></p></a>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/dietai/appPreviews.svg" alt="App Store previews"></img>
          
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">My Takeways</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">What I Learned</h1>
            <p className="mb-12 laptop:mb-20 opacity-80 leading-7 font-normal text-base laptop:text-xl">As this was my first freelance project, I gained significant experience in working independently. Moreover, collaborating directly with developers taught me the value of communicating design decisions clearly and effectively, ensuring that they are easily understood by others.</p>
            </div>
          <Footer />
        </div>
    </>
  );
};

export default DietAI;
