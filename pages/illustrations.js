import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";

const Illustrations = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className={`container mx-auto mb-10`}>
            <Header isBlog={true}></Header>
            <div className="mt-12 laptop:mt-20 ml-4 mr-4 laptop:ml-28 laptop:mr-28">
                <h1 className="mx-auto mob:p-2 text-bold text-3xl laptop:text-4xl w-full" >Check out some of my illustrations!</h1>
                <div class="grid grid-cols-1 mt-8 laptop:mt-10 md:grid-cols-3 gap-5 laptop:gap-20" align="center">
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/splash_screens.svg" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Click <a href="/earnify"><u>here</u></a> to view the entire project!</p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/Isometric.svg" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Isometric designs</p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/Navi.svg" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Navi app branding</p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/chennai.svg" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg"> Designs from my Olympics branding project. Click <a href="/olympics"><u>here</u></a> to view the entire project!</p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/Stickers.svg" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Stickers designed for the UX Club</p>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    </>
  );
};

export default Illustrations;
