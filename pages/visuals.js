import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
//import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Visuals = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  return (
    <>
        <div className={`container mx-auto mb-10`}>
            <Header isBlog={true}></Header>
            <div className="mt-10">
                <h1 className="mx-auto mob:p-2 text-bold text-5xl laptop:text-6xl w-full" >My Art</h1>

                

<div class="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5 laptop:gap-20">
<div>
    <img class="h-auto max-w-full rounded" src="/images/skulls.JPG" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="/images/kerala.JPG" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="/images/headwriting.JPG" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="/images/digital.JPG" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="/images/blueportrait.JPG" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="/images/watercolorGirl.JPG" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
</div>
<div>
    <img class="h-auto max-w-full rounded" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
</div>
</div>






            </div>
        </div>
    </>
  );
};

export default Visuals;
