import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { VscCircleFilled } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";




function Carousel(props) {

    function handleCLick(index){
        props.handleDotClick(index);
    }

    return (
        <>
            <div className= {(props.carouselState?"":"hidden") + " bg-opacity-[95%] bg-black md:bg-opacity-[80%] fixed h-screen w-full top-0 left-0 flex flex-col md:justify-center items-center z-[9999] py-8 px-8"} >

                <button onClick={props.handleClose} className=" active:bg-zinc-700 outline-none text-zinc-500 hover:text-zinc-100 hover:bg-zinc-500 rounded-lg cursor-pointer duration-100 self-end md:mr-10 lg:mr-4"><IoClose size={35}/></button>

                <div className=" mt-[8rem] md:mt-0 bg-center rounded-lg mx-auto my-20 h-[14rem] w-[100%] md:my-20 lg:my-12 md:h-[20rem] md:w-[80%] lg:h-[28rem] bg-no-repeat bg-cover lg:w-[55%] duration-300" style={{ backgroundImage: `url(${props.img})` }}>
                </div>


                {/* Previous button */}
                <div onClick={props.prevImg} className=" mt-[16rem] md:mt-0 absolute text-3xl lg:text-4xl left-[12%] md:left-[18%] lg:left-[26%] text-zinc-100 bg-zinc-950 opacity-[60%] hover:opacity-[100%] cursor-pointer translate-x-0 translate-y-[20%] md:translate-y-[-100%] lg:translate-y-[50%] rounded-[100%] duration-300">
                    <GrFormPrevious />

                </div>

                {/* Next button */}
                <div onClick={props.nextImg} className=" mt-[16rem] md:mt-0 absolute text-3xl lg:text-4xl right-[12%] md:right-[18%] lg:right-[26%] text-zinc-100 bg-zinc-950 opacity-[60%] hover:opacity-[100%] cursor-pointer translate-x-0 translate-y-[20%] md:translate-y-[-100%] lg:translate-y-[50%] rounded-[100%] duration-300">

                    <GrFormNext />
                </div>

                <div className="flex text-zinc-100 absolute bottom-[18rem] md:bottom-[6%]">
                    {props.imgArr.map((img, index) => {
                        return <VscCircleFilled onClick={()=>handleCLick(index)} className="cursor-pointer " />
                    })}
                </div>

            </div>
        </>
    )
}

export default Carousel;