import React from "react";
function Card(props) {
    return (
        <>
            <div className=" w-full h-60 flex flex-col text-white relative rounded-lg overflow-hidden shadow-[#18181a4d] shadow-lg">
                <div className="group h-[68%] w-full cursor-pointer ">
                    <img className="w-full h-full object-cover group-hover:scale-105 duration-300" src={props.img} alt=""/>
                    <div className="p-6 bg-opacity-[85%] group-hover:h-full bottom-0 h-0 duration-300 w-full cursor-pointer bg-black z-40 absolute flex flex-col gap-2">
                        <h1 className="text-white font-semibold text-left">{props.heading}</h1>
                        <p className=" text-[.7rem] text-left">{props.details} </p>
                    </div>
                </div>

                <div className="absolute bottom-0 z-50 left-0 right-0  h-20 flex justify-between">
                    <a target="_blank" rel="noreferrer" href={props.link} className=" flex flex-col justify-center items-center active:bg-zinc-900 bg-zinc-800 w-[51%] text-zinc-400 rounded-tl-md duration-300 md:hover:bg-[#2d2d30]">Visit</a>
                    <button onClick={props.openDemo} className=" active:bg-zinc-900 bg-zinc-800 w-1/2 text-zinc-400 rounded-tr-md duration-300 md:hover:bg-[#2d2d30]">Demo</button>
                </div>

            </div>
        </>

    )
}
export default Card;