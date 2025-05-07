"use client";

import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "@/components/Button";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const totalVideos = 4;

  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const miniVideoRef = useRef<HTMLVideoElement>(null);

  const getVidSrc = (index: number) => `/videos/hero-${index}.mp4`;

  const getNextIndex = (index: number) => (index % totalVideos) + 1;

  const upcomingVideoIndex = getNextIndex(currentIndex);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const handleMainVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-500"
      >
        {/* Mini Upcoming Preview */}
        <div className="mask-clip-path absolute-center absolute z-60 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVdClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={miniVideoRef}
              className="origin-center size-65 scale-150 object-cover object-center"
              id="mini-video"
              autoPlay
              muted
              loop
              src={getVidSrc(upcomingVideoIndex)}
            />
          </div>
        </div>

        {/* Main Background Video */}
        <video
          ref={mainVideoRef}
          loop
          muted
          autoPlay
          onLoadedData={handleMainVideoLoad}
          src={getVidSrc(currentIndex)}
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        {/* Overlay Text + Button */}
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

        {/* Bottom Text */}
        <h1 className="special-font hero-heading absolute right-5 bottom-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>
      </div>

      <h1 className="special-font hero-heading absolute right-5 bottom-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Home;
