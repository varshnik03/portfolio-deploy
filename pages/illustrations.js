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
                <div class="grid grid-cols-2 mt-8 laptop:mt-10 md:grid-cols-3 gap-5 laptop:gap-20">
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/wireframe_sticker.svg" alt=""/>
                        {/* <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">The Backwaters, 2020 · <i>Acrylic</i></p> */}
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/varsh_conf_sticker_two.svg" alt=""/>
                        {/* <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">A Calm Morning, 2024 · <i>Acrylic</i></p> */}
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/varsh_stamp_sticker.svg" alt=""/>
                        {/* <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">A Calm Morning, 2024 · <i>Acrylic</i></p> */}
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/varsh_conf_sticker.svg" alt=""/>
                        {/* <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">My Written Fate, 2020 · <i>Charcoal</i></p> */}
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/merch_one.svg" alt=""/>
                        {/* <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Colors of Bliss, 2021 · <i>Watercolor</i></p> */}
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/merch_two.svg" alt=""/>
                        {/* <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Colors of Bliss, 2021 · <i>Watercolor</i></p> */}
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded" src="/images/illustrations/merch_three.svg" alt=""/>
                        {/* <p class="mt-2 text-xs laptop:mt-4 laptop:text-lg">Colors of Bliss, 2021 · <i>Watercolor</i></p> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
  );
};

export default Illustrations;
