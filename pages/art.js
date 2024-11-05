import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";

const Art = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className={`container mx-auto mb-10`}>
            <Header isBlog={true}></Header>
            <div className="mt-12 laptop:mt-20 ml-4 mr-4 laptop:ml-28 laptop:mr-28">
                <h1 className="mx-auto mob:p-2 text-bold text-3xl laptop:text-5xl w-full" >Check out some of my artwork!</h1>
                <div class="grid grid-cols-2 mt-8 laptop:mt-10 md:grid-cols-3 gap-5 laptop:gap-20">
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/art/kerala.JPG" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">The Backwaters, 2020 · <i>Acrylic</i></p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/art/landscape.jpg" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">A Calm Morning, 2024 · <i>Acrylic</i></p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/art/headwriting.JPG" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">My Written Fate, 2020 · <i>Charcoal</i></p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/art/watercolorGirl.JPG" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Colors of Bliss, 2021 · <i>Watercolor</i></p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/art/vasePiece.jpg" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Solitude, 2021 · <i>Oil</i></p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/art/skulls.JPG" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Fruit of the Dead, 2019 · <i>Charcoal</i></p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/art/blueportrait.JPG" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Caught In The Lights, 2021 · <i>Acrylic</i></p>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/art/digital.JPG" alt=""/>
                        <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">A Gentle Chuckle, 2020 · <i>Digital</i></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
  );
};

export default Art;
