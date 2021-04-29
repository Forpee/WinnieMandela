import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Second({ sel }) {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: -80,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={sel} className=" h-screen-8 w-screen">
      <h1 className="text-blue-450 text-center mx-auto pt-16 text-4xl">
        Malesuada fames ac turpis egestas maecenas.
      </h1>
      <hr className="w-64 border-blue-450 border-2 mx-auto mt-10" />
      <p className="text-blue-450 text-center mx-auto text-xl md:w-64 mt-8">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>

      <div className="h-full w-full overflow-x-hidden flex overflow-hidden pb-32 ">
        <div ref={imageRef} className="h-1/2 my-auto mx-auto">
          <img
            alt="wm vase"
            className="mx-auto vaseImage h-full z-10 "
            src="https://res.cloudinary.com/bobu/image/upload/v1618732573/wmp/vase-removebg-preview_1_xdxq8q.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
