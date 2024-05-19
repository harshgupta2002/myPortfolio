import React from "react";
import proPic from "../img/profile-pic.png";
import { IoIosArrowForward } from "react-icons/io";
import SocialLinksSide from "./SocialLinksSide";
import { Link } from "react-scroll";
import Heading from "./Heading";

function Home() {

    return (
        <section id="home" className="mt-12 py-[24rem] md:py-0 px-8 md:px-0 z-10 md:h-screen flex flex-col justify-center items-center bg-gradient-to-b from-zinc-950 to-zinc-800 md:mt-0 md:pt-0 h-screen w-full">
            <SocialLinksSide />
            <div className="mt-[-30px] md:mt-[2rem] flex flex-col md:flex-row md:justify-center md:items-center gap-12 text-white">
                <div className="flex flex-col md:px-0 md:w-80 lg:w-96 lg:py-8">
                    <div className="lg:justify-between items-center md:items-start flex flex-col gap-6 md:gap-8 lg:gap-10">
                        <Heading/>
                        <p className="text-center md:text-left text-zinc-400 text-sm lg:text-lg">
                            With a keen eye for design and a knack for problem-solving, I specialize in creating responsive and dynamic user interfaces.
                        </p>
                        <Link to="projects" smooth duration="500">
                            <button className="text flex items-center justify-between bg-white active:bg-zinc-300 duration-100 md:hover:bg-zinc-100 md:active:bg-zinc-200 md:bg-zinc-200 w-28 px-3 leading-none h-9 p-2 rounded-[2rem] text-zinc-950 font-semibold">
                                Projects <IoIosArrowForward />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex lg:px-2 lg:py-2 flex-col overflow-hidden justify-center items-center text-white md:h-80 md:w-[50%] lg:h-96 lg:w-96">
                    <img className="object-cover overflow-hidden rounded-[10%] md:h-full lg:h-full object-center" src={proPic} alt="my-profile-pic" />
                </div>
            </div>
        </section>
    );
}

export default Home;
