import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { blogPosts } from "../constants"; 
import T from "../assets/T.png";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Footer from "./Footer";


{/*  id: 1,
    title: "Exploring Augmented Reality in Real Estate",
    author: "Taha",
    date: "November 15, 2024",
    content:*/}


const BlogsCard = ({
  index,
  title,
  author,
  date,
  readingtime,
  image,
  content,
}) => ( 
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[430px] w-full'
  >        
      <img
      src={image}
      alt={`Blogs_by-${author}`}
      className='w-100 h-100 object-cover rounded-2xl'
      />
    <div className='mt-5'>
      <p className='text-white tracking-wider text-[18px]'>{title}</p>

      <div className='mt-3 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>

          {/* text of the blog (first lines) */} 

        <p className='mt-0 text-secondary text-[12px]'>
            <i>{content}</i> 
        </p>
        <button
              className="mt-4 text-blue-500 hover:underline"
              onClick={() => alert("This feature will be added soon!")}
            >
              Read more ➔
            </button>

          <p className='mt-3 text-white font-medium text-[14px] flex gap-2'>
            <img
                  src={image}
                  alt={`Blogs_by-${author}`}
                  className='w-10 h-10 rounded-full object-cover ml-2 '
                  /><span className='blue-text-gradient mt-2 pl-2'>@</span> <i className="mt-2 pr-4">{author}</i>
          </p>
                 
          <p className="pt-5 text-secondary text-[12px] flex justify-between w-full">
            {date}   
            <span className="text-secondary text-[12px]">
              <b>{readingtime}</b>
            </span>
          </p>

         
        </div>


      </div>
    </div>

    
  </motion.div>
);

const Blog = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    ;}

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <div>
      
      {/* Navbar */}
      <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
      >

        
        
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Left Side: "Blogs" Text */}
          <div className="flex-1">
            <h1 className="text-white text-[24px] font-bold">Blogs</h1>
          </div>

          {/* Center: Logo and Name */}
          <div className="flex-1 flex justify-center">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img src={T} alt="Taha logo" className="w-9 h-9 object-contain" />
              <p className="text-white text-[18px] font-bold cursor-pointer">
                Taha | XR boy
              </p>
            </Link>
          </div>

          {/* Right Side: "Back" Button */}
          <div className="flex-1 flex justify-end">

          <Link to="/" className="mx-2 mb-2 md:mb-0">
            <button
              className="bg-gray-700 text-white text-[15px] font-light py-2 px-6 rounded-full hover:bg-purple-500 transition duration-300 ease-in-out"
            >
              BACK
            </button>
          </Link>

              
            
          </div>
        </div>
      </nav>

      {/* Huge Hero Image */}
      <div className="relative w-full h-[600px] bg-cover bg-center mt-[80px]">
        <img
          src="src\assets\blogs\pexel.jpg" // Replace with your image URL
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold">Did you know... 7yd tswira w dir margin top</h1>
        </div>
      </div>

      
      <div className={`mt-0 bg-black-100 rounded-[20px]  `}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>I write..</p>
          <h2 className={styles.sectionHeadText}>Blogs.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {blogPosts.map((title, index) => (
          <BlogsCard key={title.name} index={index} {...title} />
        ))}
      </div>
    </div>



       
       <Footer />
    </div>
    
  );
};

export default Blog;
