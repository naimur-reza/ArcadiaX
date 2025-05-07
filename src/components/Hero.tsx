"use client";

import Button from "@/components/Button";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const currentVidRef = useRef(null);
  const nextVidRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleVideoLoad = () => {
    setLoadedVideos(upcomingVideoIndex);
  };

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  const getVidSrc = (index: number) => `/videos/hero-${index}.mp4`;

  useGSAP(() => {
    if (hasClicked && nextVidRef.current) {
      gsap.set("#next-video", { visibility: "visible" });
      gsap.to("#next-video", {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
        onStart: () => nextVidRef.current.play(),
      });
      gsap.from("#current-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-500"
      >
        <div className="mask-clip-path absolute-center absolute z-60 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVdClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={currentVidRef}
              className="origin-center size-65 scale-150 object-cover object-center"
              id="current-video"
              autoPlay
              muted
              loop
              src={getVidSrc((currentIndex % totalVideos) + 1)}
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>

        <video
        style={{ visibility: "hidden" }}
          id="next-video"
          loop
          muted
          className="absolute-center   absolute z-20 size-64 object-cover object-center "
          ref={nextVidRef}
          src={getVidSrc(currentIndex)}
        />

        {/* <video
          loop
          muted
          autoPlay
               src={getVidSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        /> */}

        <h1 className="special-font hero-heading absolute right-5 bottom-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full border">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert text-blue-100">
              Enter the Metagame Layer <br />
              Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute right-5 bottom-5   text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;
