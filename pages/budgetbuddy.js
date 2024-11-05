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

const BudgetBuddy = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className="container mx-auto mb-10">
          <Header isBlog={true}></Header>
          <div className="mt-10 ml-4 mr-4 laptop:ml-40 laptop:mr-40">
            <img className="w-full h-full rounded-lg mb-6 laptop:mb-12 object-cover" src="/images/budgetbuddy/topBanner.svg" alt="header"></img>
            <h1 className="mx-auto mob:p-2 font-semibold text-5xl mb-6 laptop:text-6xl laptop:mt-15, mb-12" >Budget Buddy</h1>
            <img className="w-full h-auto mb-14 laptop:mb-20 rounded-lg shadow-lg object-cover" src="/images/budgetbuddy/budgetbuddy_info.svg" alt="info"></img>
            
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Understanding The Problem</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">The Issue At Hand</h1>
            <p className="mb-12 laptop:mb-20 opacity-80 leading-7 font-normal text-base laptop:text-xl">Studies show that financial literacy — which generally means understanding money topics ranging from income, budgeting, saving and investing, as well as how interest rates work and why credit scores matter — is lacking among many U.S. adults, and especially <b>college students, as Gen Z students struggle with basic financial literacy question</b>.</p>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">User Research</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">What Our Users Think</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Understanding that college students in the U.S struggle with financial literacy, we narrowed our audience to students at UTD. To see how UTD students deal with financial literacy, we conducted focus groups to directly interact with our users, note down <b>observations about shared experiences</b>, and allow for an <b>in-depth exploration</b> of financial literacy topics.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/budgetbuddy/graph1.svg" alt="graph"></img>

            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">What Are They Saying?</h2>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Each team member conducted three user interviews to directly talk to our users and understand their <b>users' inner thoughts</b> and <b>pain points</b>.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/budgetbuddy/quotes.svg" alt="quotes"></img>

            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">What This Means</h2>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Based on our primary and user research so far we found out that students have more to learn when it comes to financial literacy.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/budgetbuddy/takeaways.svg" alt="takeaways"></img>
          
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">User Insights</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Understanding Our Users</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">To better understand the <b>motivations and frustrations</b> of a potential use we created a user persona. This helped us <b>empathize with our user</b> and remove our personal biases.</p>
            <img className="w-full h-auto mb-4 laptop:mb-12 rounded-lg object-cover" src="/images/budgetbuddy/persona.svg" alt="user persona"></img>
            <p className="mb-4 laptop:mb-12 opacity-80 leading-7 font-normal text-base laptop:text-xl">Then, to understand a high level user flow we made a user journey diagram. This helped us plan out the user’s pain points and <b>how we would address them</b> in our app.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/budgetbuddy/userJourney.svg" alt="User Journey"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Ideating Solutions</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Solving Their Problems</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Once we understood the processes needed in our app, we were able to come up with a list of features  that we wanted to include in the app.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/budgetbuddy/featuresAndTakeaways.svg" alt="features and takeaways"></img>

            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">But Does It Actually Help?</h2>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">We sent out a survey to our audience for their feedback on the initial features. We wanted to know whether <b>they would actually be helpful or not</b>.</p>
            <img className="w-full h-auto mb-4 laptop:mb-12 rounded-lg object-cover" src="/images/budgetbuddy/graph2.svg" alt="graph of features"></img>
            <p className="mb-4 laptop:mb-12 opacity-80 leading-7 font-normal text-base laptop:text-xl">Based on out survey feedback we decided to keep the features that rated 4.0 or higher and not include the features that rated below that level. Additionally, included certain features that seemed to be common recommendations in our feedback surveys.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/budgetbuddy/featuresAfterGraph.svg" alt="Feature decision after feedback"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Wireframes</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Next Up - Designing</h1>
            <p className="mb-4 laptop:mb-12 opacity-80 leading-7 font-normal text-base laptop:text-xl">After going through a thorough research process to determine which features we wanted to include, we moved onto create prototypes. Because this project was mainly centered around research, we did not have a low-fidelity → high-fidelity process. </p>
            <p className="mb-4 laptop:mb-12 opacity-80 leading-7 font-normal text-base laptop:text-xl">Instead, we made basic hi-fi wireframes, and <b>conducted user testing</b> to obtain feedback on the user flow, user experience, and user interface. Using the feedback from our user testing, <b>we made changes to our prototypes</b> so they would provide a better user experience.</p>
            <a href="https://www.figma.com/proto/ocnuepk7jbXdod2gwSEF3L/Budget-Buddy?type=design&node-id=2-4&t=uk42CuglFfDXYgcZ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A4&mode=design" target="_blank"><p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl"><u>Click here to view a live prototype!</u></p></a>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/budgetbuddy/prototypeFixes.svg" alt="prototype changes after feedback"></img>
            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">Final Screens</h2>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/budgetbuddy/FinalDesign.svg" alt="final screens"></img>


            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">My Takeways</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">What I Learned</h1>
            <p className="mb-12 laptop:mb-20 opacity-80 leading-7 font-normal text-base laptop:text-xl">My key takeaway from this design project is that thorough research is essential to developing a product that effectively solves a problem. The extensive research process reinforced the importance of deeply understanding the problem domain, the users, and their needs and frustrations to create a truly user-centric solution.</p>
            </div>
          <Footer />
        </div>
    </>
  );
};

export default BudgetBuddy;
