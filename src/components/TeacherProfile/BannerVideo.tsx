import React from 'react';
import awesomeVideo from '/Videos/12.mp4';
import Video from 'next-video';

const BannerVideo = () => {
  return (
    <div className="relative w-full h-2/3 max-w-[1920px] mx-auto overflow-hidden">
      <Video 
        src={awesomeVideo} 
        poster="/images/slide3.png"  
        blurDataURL="data:image/webp;base64,UklGRlA..." 
      />
    </div>
  );
};

export default BannerVideo;
