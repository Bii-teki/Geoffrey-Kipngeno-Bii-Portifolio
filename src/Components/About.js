import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

export default function About() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Geoffrey Bii.
            {/* <br className="hidden lg:inline-block" />I love to build amazing
            apps. */}
          </h1>
          <p className="mb-8 leading-relaxed">
          An accomplished full-stack web developer with a strong computer science foundation.<br/>
    My passion is crafting innovative and scalable solutions for the digital landscape.<br/>
    I aim to help enterprises achieve their goals by leveraging technology and delivering tangible results.     </p>

<div
        className="text-4xl text-yellow-500 pb-16"
        data-aos-delay="700"
        data-aos="zoom-in"
      >
        {" "}
        <Typewriter
          options={{
            strings: [
              "✋I'm Geoffrey Bii",
              "I'm an enthusiast Full-Stack 🌐developer",
              // "I'm a 4th yr CSE 👨‍🎓 in VIT Vellore",
              // "You can 📲 me through discord or ✉️",
            ],
            delay: 150,
            pauseFor: 1500,
            autoStart: true,
            loop: true,
            stringSplitter: stringSplitter,
          }}
        />
      </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Work With Me
            </a>
            <a
  className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
  href="https://1drv.ms/w/s!AoMFmGpKexIlkyqbBiv4MQ-x41_N?e=2VQ515" 
  target="_blank" rel="noopener noreferrer"
 
>
Explore My Profile
</a>



            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
            
          </div>
         
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1636041293723-abceb81bffbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhciUyMGZvciUyMHBvcnRpZm9saW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            
          />
        </div>
      </div>
    </section>
  );
}
