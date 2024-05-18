import React, { useState } from "react";
import { FaBars, FaTimes, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {

    const links = [
        {
            id: '1',
            link: 'home'
        },

        {
            id: '2',
            link: 'about'
        },

        {
            id: '3',
            link: 'projects'
        },

        {
            id: '4',
            link: 'techStack'
        },

        {
            id: '5',
            link: 'contacts'
        }
    ]

    const [nav, setNav] = useState("false");

    return (
        <div className=" z-[999] flex top-0 justify-between items-center w-full h-20 text-white fixed px-8 bg-zinc-950">

            <Link to="home" smooth duration="500">
                <div className="flex justify-between items-center cursor-pointer">
                    <FaLaptopCode className="text-4xl pr-2 pt-0.5 align-middle text-yellow-500" />
                    <h1 className="text-3xl font-logo font-semibold uppercase">Harsh</h1>

                </div>
            </Link>



            <ul className="hidden md:flex">

                {links.map(({ id, link }) => {
                    return [
                        <li
                            className="cursor-pointer mx-4 capitalize font-medium text-zinc-500 hover:scale-105 duration-200"
                            key={id}
                        >
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ]

                })}

            </ul>

            <div onClick={() => setNav(!nav)} className="md:hidden text-2xl cursor-pointer z-10 text-grey-500">
                {!nav ? <FaTimes /> : <FaBars />}
            </div>

            {!nav && <ul className="flex flex-col absolute items-center justify-center top-0 left-0 bg-gradient-to-b from-zinc-950 to-zinc-800 h-screen w-full">

                {links.map(({ id, link }) => {
                    return [
                        <li
                            className="cursor-pointer mx-4 capitalize font-medium text-zinc-500 hover:scale-105 duration-200 text-3xl mb-2 w-full text-center py-3 hover:bg-zinc-800"
                            key={id}
                        >
                            <Link onClick={() => { setNav("false") }} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ]

                })}

            </ul>}

        </div>
    )
}

export default NavBar;