import React, { useRef, useState } from 'react'

const Hero = () => {
const [currentIndex, setCurrentIndex] = useState(1);
const [hasClicked, setHasClicked] = useState(false);
const [isLoading, setIsLoading] = useState(true);
const [loadedVideos, setLoadedVideos] = useState(0);

const totalVideos=4;
const nextVidRef = useRef(null)

const upcomingVidIndex = (currentIndex % totalVideos ) + 1 

const handleMiniVidClick = () => {
  setHasClicked(true)
  setCurrentIndex( upcomingVidIndex)
}

const handleVidLoad = () =>{
  setLoadedVideos( (prev)=> prev+1)
}


const getVidSrc = (index) => `videos/hero-${index}.mp4`
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
          <div onClick={handleMiniVidClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
            <video ref={nextVidRef}
                   src={getVidSrc(upcomingVidIndex)}
                   loop
                   muted
                   id='current-video'
                   className='size-64 origin-center scale-150 object-cover object-center'
                   onLoadedData={handleVidLoad}
            />
          </div>
        </div>
        <video ref={nextVidRef}
               src={getVidSrc(currentIndex)}     
               loop
               muted
               id='next-video'
               className='absolute-center invisible absolute z-20 object-64 object-cover object-center'
               onLoadedData={handleVidLoad}
        
        />
        <video 
          src={getVidSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)} 
          autoPlay
          loop
          muted
          className='absolute left-0 top-0 size-full object-cover object-center '
          onLoadedData={handleVidLoad}
        />
      </div>
      <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
        G<b>a</b>ming
         </h1>

    </div>
  )
}

export default Hero