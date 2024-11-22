import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import myPicture from "../assets/Taha.jpg"; 
import myPicture2 from "../assets/TahaAR.png"; 



const About = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start lg:items-center" id="about">
    {/* Left side: text content */}
    <>
    <div className="col-span-2 lg:col-span-1">
    
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>The Mind Behind the Matrix.</h2>
      </motion.div>
      
     
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
   
        Hi, I am Taha, and this is how it all started ..<br />
        <br />
 
When I was 9, my dad brought home a computer—and for me, it was pure magic. I was thrilled! I could play video games, watch endless videos, and even connect with friends in ways I’d never imagined. <br />But as I explored, something curious started happening. <br />I began to wonder, <i>how does all this actually work</i> ?<br /><br />



By the time I was 13, curiosity had turned into a mission. Inspired by a game I loved called "Dofus," I decided to recreate it on my own.<br />

The game had a pay to win system, so I spent weeks researching and watching tutorials, determined to build my very own private server. Eventually, I succeeded. <a href="https://youtu.be/QYo1EgPEQbc" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">link</a><br />

My friends and I had an entire world to ourselves, enriched with custom features and new challenges. <br />

Then I created a website for players to download the game and create their own accounts to join the adventure. <a href="https://youtu.be/qGpkanMG-F8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">link</a><br />

One unforgettable night, I looked at the player count—<i>146 players online </i>, all enjoying the game I had brought to life. It was exhilarating.<br /><br />



But soon, the excitement of playing my game began to fade. <br />
I wasn’t just looking for fun; I was looking for something deeper. <br />
And so, I turned my focus toward learning and growth, driven by my passion for computer science.<br /><br />



In school, I was hooked on my computer science class.<br />

We used to study Pascal lol.<br />

But even tho it wasn’t the latest tech, it was a gateway to understanding the "magic" behind the screen.<br /><br />



Eventually, I graduated with top marks and pursued a degree in Computer Science and Artificial Intelligence in college. <br />



While many aimed for grades, my goal was knowledge. <br />
I didn’t want to learn just to pass exams. <br />
I wanted to learn so I could build and create.<br />

I was that guy who’d start studying the night before an exam and still manage a high grades, because I was genuinely excited about the the subject matter.<br /><br />



This passion for learning became my compass.<br />



And then, in my fourth year, I discovered <b>VR</b> and <b>AR</b>. <br /><br />



<i>This</i>, I realized, <i>is what I enjoy the most</i>. <br /><br /> 



Creating digital realities that feel as engaging and immersive as the real world became my mission.<br /> 

And this is where I’m glad to share that journey with you.

      </motion.p></div>
      <div className="flex flex-col items-center lg:items-end space-y-4">
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }}  // Animate to on-screen
        transition={{ duration: 0.8, ease: "easeOut" }} // Customize duration and easing
        className="flex justify-center lg:justify-end col-span-2 lg:col-span-1"
      >
        <img
          src={myPicture}
          alt="Taha"
          className="w-full h-auto max-w-[500px] object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center lg:justify-end col-span-2 lg:col-span-1 mt-4" // Added margin-top to space images
      >
        <img
          src={myPicture2}
          alt="Second Image"
          className="w-full h-auto max-w-[500px] object-cover rounded-lg shadow-lg"
        />
      </motion.div>  </div>


      
    </></div>
  );
};

export default SectionWrapper(About, "about");
