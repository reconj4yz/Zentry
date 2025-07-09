import React from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
        
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay on your
          world.
        </p>
        </div>
      

      <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard 
        src='videos/feature-1.mp4'
        title=<>radia<b>n</b>t</> 
        description='The game of games app transforming moments across Web2 & Web3 titles into rewards'
        isComingSoon
        />
      </div>
      <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
        <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard 
            src='videos/feature-2.mp4'
            title=<>zig<b>m</b>a</> 
            description='The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation.'
            isComingSoon
            />
        </div>
        <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-2">
            <BentoCard 
            src='videos/feature-3.mp4'
            title=<>ne<b>x</b>us</> 
            description='The metagame portal uniting humans & AI to play, compete and earn, '
            isComingSoon
            />
        </div>
           <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard 
            src='videos/feature-4.mp4'
            title=<>az<b>u</b>l</> 
            description='The agent of agents elevating agentic AI experience to be more fun and productive.  '
            isComingSoon
            />
        </div>
        <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="bento-title special-font max-w-64 text-black">
                    M<b>O</b>RE C<b>O</b>MING S<b>O</b>ON!
                    <TiLocationArrow className=" m-5 scale-[5] self-end"/>
                </h1>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
