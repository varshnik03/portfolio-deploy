import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";

const About = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
        <div className={`container mx-auto mb-10`}>
            <Header isBlog={true}></Header>
                <div className="mt-12 laptop:mt-20 ml-4 mr-4 laptop:ml-28 laptop:mr-28">
                    <h1 className="mx-auto mob:p-2 text-bold text-3xl laptop:text-4xl w-full" >A little about me!</h1>
                    
                    <div className="mt-2 laptop:mt-10 p-2 laptop:p-0 flex flex-col laptop:flex-row items-center laptop:items-start">
          
                        {/* Text Section */}
                        <div className="mt-10 mb-8 flex-1 tablet:m-10 text-m laptop:text-xl laptop:m-0 laptop:mr-24 w-full laptop:w-3/5">
                        
                            {/*<p>{data.aboutpara}</p>*/}
                            <p className="mb-4 laptop:mb-6 opacity-80 leading-7 font-normal text-base laptop:text-xl">👋🏽 My name is Varshni Karthikeyan and I am a recent grad from the University of Texas at Dallas with a Bachelors in Software Engineering and a certificate in Applied Experience Design and Research. Growing up, I had a passion for art and wanted to find a way to merge my creative side with a technical field. That's when I discovered user experience design, which offers a combination of both plus so much more!</p>
                            <p className="mb-4 laptop:mb-14 opacity-80 leading-7 font-normal text-base laptop:text-xl">Reach out to me via <i><a href="https://www.linkedin.com/in/varshnik/" target="_blank">LinkedIn</a></i> or <i><a href="mailto:varshnik@gmail.com" target="_blank">email!</a></i></p>

                        </div>

                        {/* Image Section */}
                        <div className=" laptop:mt-0 laptop:ml-4 laptop:mr-4 w-full laptop:w-auto">
                            <img
                                src="/images/headshotNew.jpg"
                                alt="Varshni Karthikeyan"
                                className="w-48 h-48 laptop:w-72 laptop:h-96 rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    
                    </div>
                </div>
                
            <Footer />
        </div>
    </>
  );
};

export default About;
