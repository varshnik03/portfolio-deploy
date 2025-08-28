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

const Earnify = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className="container mx-auto mb-10">
          <Header isBlog={true}></Header>
          <div className="mt-10 ml-4 mr-4 laptop:ml-40 laptop:mr-40">
            <img className="w-full h-full rounded-lg mb-6 laptop:mb-12 object-cover" src="/images/earnify/topBanner.svg" alt="header"></img>
            <h1 className="mx-auto mob:p-2 font-semibold text-5xl mb-6 laptop:text-6xl laptop:mt-15, mb-12" >earnify</h1>
            <img className="w-full h-auto mb-14 laptop:mb-20 rounded-lg shadow-lg object-cover" src="/images/earnify/info.svg" alt="info"></img>
            
            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Overview</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Problem & Solution</h1>
            <p className="mb-4 laptop:mb-4 opacity-80 leading-7 font-normal text-base laptop:text-xl"><b>Problem</b> - The earnify™ app is a rewards program developed by bp to enhance customer engagement and loyalty. It allows users to earn points on fuel and convenience store purchases, which can be redeemed for discounts and special offers. We were tasked with creating a solution that drives foot traffic into the convenience store, leveraging earnify’s existing points and rewards system.</p>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl"><b>Our Solution</b> - A redesigned earnify app that gives Gen-Z a <b>personalized</b> and <b>engaging</b> experience to feel rewarded while making everyday errands and in-store shopping fit their <b>lifestyle</b>.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/solution_screen.svg" alt="solution"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Secondary Research</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Understanding The Domain</h1>
            <p className="mb-4 laptop:mb-4 opacity-80 leading-7 font-normal text-base laptop:text-xl">Our secondary research combined netnography, trend-spotting, and competitive analysis that all members contributed to. As the lead researcher, I led the organization and analysis of these findings to identify key opportunities for our design.</p>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Netnography gave us valuable insights into consumer behavior within convenience stores and how loyalty systems influence purchasing decisions. Through trend-spotting, we identified two key consumer movements including <b>hyper-personalization</b> and <b>growing health-consciousness</b>, revealing opportunities for tailored rewards and healthier in-store offerings. Our competitive analysis of similar loyalty applications helped us understand the industry landscape, identifying opportunities to differentiate our solution and establish best practices to incorporate in our redesign. 
            <a href="https://www.refrigeratedfrozenfood.com/articles/98284-trends-drawing-young-consumers-to-convenience-retail-operations" target="_blank">[1]</a><a href="https://www.meteorspace.com/2025/01/28/e-commerce-consumer-buying-behaviour-trends-and-statistics/" target="_blank">[2]</a><a href="https://www.cstoredive.com/news/top-convenience-store-loyalty-trends-paytronix/695017/" target="_blank">[3]</a></p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/secondary_research.svg" alt="stats"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Primary Research</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Understanding Our Users</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Our primary research included a class-wide survey followed by qualitative one-on-one interviews that each team member conducted with UTD students. As lead researcher, I conducted <b>pattern analysis</b> on the survey data to identify recurring themes and behavioral trends among responses. This initial analysis allowed us to come up with <b>targeted interview questions</b> for richer qualitative insights. </p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/quotes.svg" alt="quotes"></img>

            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">User Insights</h2>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Our interview responses validated our survey findings, confirming <b>consistent patterns</b> across user behaviors. Because the interview responses emerged into similar patterns we already had, we gained confidence in our research direction and could determine user insights. We were able to understand <b>why</b> users avoid the store, <b>what</b> incentives matter most, and <b>how</b> they interact with rewards.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/user_insights.svg" alt="user insights"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Problem Statement</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Defining Our Problem</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">After determining our insights, we shaped our problem statement emphasizing the user’s value, personalization and convinience.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/problem_statement.svg" alt="problem statement"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Ideating Solutions</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Solving Our Problem</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Based from our research, we identified seven strategic app features that directly address our problem statement and align with our user insights. Each feature was selected to <b>overcome specific barriers</b> and <b>enhance the in-store experience</b>.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/features.svg" alt="features"></img>

            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">User Flow</h2>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Our lead developer then created a detailed user flow to visualize how customers would navigate through our redesigned earnify app and interact with our new features. This critical step helped us visualize a <b>coherent navigation framework</b> within the existing app structure.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/user_flow.svg" alt="user flow"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Prototype Development</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Designing Our Solution</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">After understanding how our features would fit within our app, we worked on creating our brand identity that we built on top of earnify’s existing brand. After designing our low-fi wireframes, we established our design system by blending earnify's core brand elements with visual components that would resonate with our Gen-Z audience.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/branding.svg" alt="branding"></img>

            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">Feature Showcase</h2>
            <img className="w-full h-auto mb-4 laptop:mb-4 rounded-lg object-cover" src="/images/earnify/feature_screens_1.svg" alt="feature 1"></img>
            <img className="w-full h-auto mb-4 laptop:mb-4 rounded-lg object-cover" src="/images/earnify/feature_screens_2.svg" alt="feature 2"></img>
            <img className="w-full h-auto mb-4 laptop:mb-14 rounded-lg object-cover" src="/images/earnify/feature_screens_3.svg" alt="feature 3"></img>
            
            {/* <a href="https://www.figma.com/proto/KQFISRjndlJkY62cpzYmCQ/Earnify?page-id=0%3A1&node-id=587-2734&p=f&viewport=269%2C-692%2C0.06&t=5yehfcIfEWGTDosY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=472%3A2572" target="_blank"><h2 className="mb-2 laptop:mb-14 text-2xl laptop:text-3xl"><u>Click here for the final prototype!</u></h2></a> */}
           
            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">Final Prototype</h2>
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '2rem'
            }}>
              <iframe 
                src="https://embed.figma.com/proto/KQFISRjndlJkY62cpzYmCQ/Earnify?page-id=0%3A1&node-id=587-2734&starting-point-node-id=472%3A2572&show-proto-sidebar=1&embed-host=share"
                width="100%" 
                height="600" // adjust as needed
                allowFullScreen
                className="figma-prototype"
              />
            </div>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Future Testing & Validation</h3>
            <h1 className="mb-2 laptop:mb-6 text-2xl laptop:text-4xl font-bold">Looking Forward</h1>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">While timeline constraints limited our ability to conduct user testing, I developed a testing strategy focusing on 3 factors to validate our key design decisions and measure success metrics.</p>
            <img className="w-full h-auto mb-12 laptop:mb-20 rounded-lg object-cover" src="/images/earnify/testing_plan.svg" alt="testing"></img>

            <h3 className="mt-8 mb-4 opacity-50 text-sm laptop:text-lg">Impact & Learnings</h3>
            <h1 className="mb-4 laptop:mb-10 text-2xl laptop:text-4xl font-bold">Wrapping Up</h1>
            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">Stakeholder Presentation</h2>
            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Our team presented this solution to <b>bp employees</b>, receiving validation that many of our proposed features aligned with items already in their development backlog - confirming our user research accurately identified real pain points and opportunities. The positive reception demonstrated that our user-centered approach produced feasible, business-aligned solutions that addressed both customer needs and company objectives.</p>
            <h2 className="mb-2 laptop:mb-6 text-2xl laptop:text-3xl font-bold">My Takeaways</h2>
            <p className="mb-12 laptop:mb-20 opacity-80 leading-7 font-normal text-base laptop:text-xl">This project gave me the chance to go through the full UX process, from early research all the way to final designs, while working with a real brand like bp. I learned what it means to <b>balance user needs with business goals</b> and saw firsthand how research-backed design can make a real impact. Collaborating in a team helped me grow in how I communicate ideas and work across different perspectives. Most importantly, it showed me how thoughtful design decisions, rooted in real user insights, can lead to meaningful experiences and tangible outcomes.</p>
            
            </div>
          <Footer />
        </div>
    </>
  );
};

export default Earnify;
