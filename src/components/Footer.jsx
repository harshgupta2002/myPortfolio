import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";


function Footer() {
    return (
        <>
            <section className=" bg-gradient-to-b from-zinc-800 to-zinc-950">
                <footer className="flex flex-col justify-center items-center h-[6rem]">
                    <Link to="home" smooth duration={800}>
                        <div className="text-white flex justify-center items-center gap-[.5rem] cursor-pointer">
                            <div>
                                <FaArrowUp />
                            </div>
                            <p>Scroll to Top </p>
                            <div>
                                <FaArrowUp />
                            </div>
                        </div>
                    </Link>
                </footer>
            </section>
        </>
    )
}

export default Footer;