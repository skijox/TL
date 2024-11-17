import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { eyes } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificatesCard = ({
  index,
  name,
  description,
  tags,
  image,
  openModal, 
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => openModal(image)} // Open modal on image click
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center border-black cursor-pointer'
            >
              <img
                src={eyes}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}></p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Crafting Realities, One Line of Code at a Time
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certificates.map((project, index) => (
          <CertificatesCard key={`project-${index}`} index={index} {...project} openModal={openModal} />
        ))}
      </div>

 {/* Modal for Enlarged Image */}
 {isModalOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <div className="relative">
      <img
        src={selectedImage}
        alt="Enlarged certificate"
        className="max-w-[75vw] max-h-[75vh] object-contain"
      />
      <button
        onClick={closeModal}
        className="absolute top-9 right-10 bg-black py-1 px-3 rounded-full cursor-pointer hover:bg-gray-500/50"
        >
        ✕
      </button>
    </div>
  </div>
)}


    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
