import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


function SocialLinksSide() {

    const links=[
        {
            id:'1',
            child: (
                <>
                    Linkedin <FaLinkedin size={25}/>
                </>
            ),
            style: "rounded-tr-md",
            link: "https://www.linkedin.com/in/spellitharsh/"
        },
        {
            id:'2',
            child: (
                <>
                    GitHub <FaGithub size={25}/>
                </>
            ),
            link: "https://github.com/harshgupta2002"
        },
        {
            id:'3',
            child: (
                <>
                    Twitter <FaXTwitter size={25}/>
                </>
            ),
            link: "https://x.com/spellit_harsh"
        },
        {
            id:'4',
            child: (
                <>
                    E-Mail <BiLogoGmail size={25}/>
                </>
            ),
            style: "rounded-br-md",
            link: "mailto:gup.harsh.2002@gmail.com",
            download: true
        }
    ]    


    return (
        <>
            <div className="hidden lg:block">
                <ul className="text-white px-8 flex flex-col fixed top-[33%] left-0 h-screen">
                    {links.map(({id, child, style, link, download})=>
                    <li key={id} className={`py-3 ml-[-138px] hover:ml-[-40px] duration-300 pl-5 w-40 px-4 bg-zinc-700 text-lg hover:rounded-none ${style} `}><a className="flex justify-between" href={link} target="_blank" rel="noreferrer" download={download}>{child}</a></li>
                    )}
                    
                </ul>
            </div>
        </>
    )
}
export default SocialLinksSide;