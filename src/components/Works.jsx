import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  video_link,
  image,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const handleVideoClick = () => {
    setIsVideoPlaying(true); // Show overlay video
  };

  const handleOverlayClick = (e) => {
    e.stopPropagation(); // Prevents overlay from triggering Tilt's click
    setIsVideoPlaying(false); // Hide overlay video on click outside controls
  };

  const handleBackButtonClick = (e) => {
    e.stopPropagation(); // Prevents stopping video on back button click
    setIsVideoPlaying(false); // Hide video overlay
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={handleVideoClick}
        >
           <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
   {/* Video Overlay */}
   {isVideoPlaying && (
          <div
            className="fixed inset-0 bg-black/100 flex justify-center items-center z-50"
            onClick={handleOverlayClick}
          >
             
             <video
              ref={videoRef}
              src={video_link}
              controls
              autoPlay
              className="w-[90%] h-[90%] rounded-2xl"
              onClick={(e) => e.stopPropagation()} // Allow video controls to work
            />
               <div
                className="absolute top-9 left-7 bg-black py-1 px-3 rounded-full border-2 border-black cursor-pointer hover:bg-gray-500/50"
                onClick={handleBackButtonClick}
              >
                  🔙
                  </div>

          </div>
        )}

        {/* Project Details */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Crafting Realities, One Line of Code at a Time
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
