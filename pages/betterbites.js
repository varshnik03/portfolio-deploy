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
          <div className="mt-10 ml-4 mr-4 laptop:ml-28 laptop:mr-28">
            <img className="w-full h-full rounded-lg mb-6 laptop:mb-12 object-cover" src="/images/betterbites/topBanner.svg" alt="header"></img>
            <h1 className="mx-auto mob:p-2 font-semibold text-5xl mb-6 laptop:text-6xl laptop:mt-15, mb-12" >Better Bites</h1>
            <img className="w-full h-auto mb-14 rounded-lg shadow-lg object-cover" src="/images/betterbites/betterbites_info.svg" alt="header"></img>
            
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Understanding The Problem</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">The Issue At Hand</h1>
            <p className="mb-12 laptop:mb-20 opacity-80 leading-7 font-normal text-base laptop:text-xl">College students have a lot on their plate and often don’t have time to prioritize their meals. They have limitations and restrictions what they can afford, available cooking supplies and time. Because of this, they end up eating <b>quick-meals that are usually unhealthy</b>.</p>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">User Insights</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">What The Users Are Saying</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">We reviewed three given user personas that represented our target audience.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/betterbites/personas.svg" alt="personas"></img>

            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">What Do They Really Mean?</h2>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">We created empathy maps to understand our <b>users' inner thoughts</b> and <b>pain points</b>.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/betterbites/takeawaysAndEmpathy.svg" alt="empathy maps and takeaways"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Ideating Solutions</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">How We Addressed Their Pain Points</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">We went through a “How Might We” exercise to brainstorm how to address their pain points.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/betterbites/howMightWe.svg" alt="how might we exercise"></img>

            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">And Turned Them Into Solutions</h2>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Based on our research so far we were able to come up with 6 features to include in the app to address the users’ main pain points. </p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/betterbites/featuresAndTakeaways.svg" alt="features and takeaways"></img>
          
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Low-Fidelity Wireframes</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Next Up - Designing</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">We went through a Crazy 8’s exercise to iterate through various designs for our 5 main screens. Then, we took pieces from the iterations to create the low-fidelity wireframe for each screen.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/betterbites/crazy8.svg" alt="crazy 8's exercise"></img>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/betterbites/lowFiScreens.svg" alt="low-fi wireframes"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">High-Fidelity Prototypes</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Making It Pretty</h1>
            <p className="mb-1 laptop:mb-4 opacity-80 leading-7 font-normal text-base laptop:text-xl">Afterwards we refined our UI and implemented a color scheme that we felt best showcased Better Bites. We went with a green color palette to express freshness and health.</p>
            <a href="https://www.figma.com/proto/dsX79ZXQ3An6lb7deeoP0a/Design-Challenge?type=design&node-id=17-26&t=EfJi8BHIs8CJFQeN-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=89%3A14&mode=design" target="_blank"><p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl"><u>Click here to view a live prototype!</u></p></a>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/betterbites/FinalDesign.svg" alt="Final Prototypes"></img>
          
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">My Takeways</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">What I Learned</h1>
            <p className="mb-12 laptop:mb-20 opacity-80 leading-7 font-normal text-base laptop:text-xl">My main takeaways from my first UX design project are that user research is key to creating a successful design and creating low-fidelity wire-frames is an important step in the design process. Additionally I learned to use tools such as Figma and Miro to manage and design ideas in collaboration with my teammate.</p>
            </div>
          <Footer />
        </div>
    </>
  );
};

export default BetterBites;
