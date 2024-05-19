import React from "react";
import c1 from "../img/contact.png"

function Contact() {
    return (
        <>
            <section id="contacts" className="h-screen bg-gradient-to-b from-zinc-950 to-zinc-800 flex justify-center items-center py-[22rem] md:py-[25rem]">
                <div className=" w-[100%] gap-14 flex flex-col justify-center items-center">
                    <div className="text-white flex flex-col justify-center text-center gap-6">
                        <h1 className="text-3xl font-semibold">Contacts</h1>
                    </div>
                    <div className=" mt-[2rem] w-[80%] gap-[4rem] md:gap-[12rem] flex flex-col md:flex md:flex-row justify-center items-center">
                        <div className=" md:w-[50%] lg:w-[40%] bg-gradient-to-r from-zinc-950 via-yellow-500 to-zinc-950 py-[2px] rounded-2xl overflow-hidden">
                            <div className="py-8 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl px-6 md:px-10 h-[28rem]">
                                <p className="text-white pb-8 text-center">Submit the form below to get in touch with me</p>
                                <form action="https://getform.io/f/nbdoxvoa" method="POST" className="flex text-white text-sm flex-col gap-4 justify-center items-center w-full">
                                    <input name="Name" className=" w-full p-2 pl-4 bg-transparent border border-zinc-600 rounded-[2rem]" placeholder="Enter your Name" />
                                    <input name="Email" className=" w-full p-2 bg-transparent border border-zinc-600 rounded-[2rem] pl-4" placeholder="Enter your Email-Id" />
                                    <textarea name="Messege" className=" h-28 resize-none w-full p-4 bg-transparent border border-zinc-600 rounded-[1rem]" placeholder="Enter your messege"></textarea>
                                    <input className=" text-zinc-900 font-bold cursor-pointer hover:bg-zinc-300 active:bg-zinc-400 mt-5 bg-zinc-200 p-2 w-32 rounded-[2rem]" type="submit" value="Let's Connect" />
                                </form>
                            </div>
                        </div>

                        <div className="w-[30%] hidden md:block">
                            <div className=" w-[6rem] md:w-[22rem] md:h-[22rem]">
                                <img className=" object-contain h-full w-full" src={c1} alt=" " />
                            </div>
                        </div>

                    </div>



                </div>
            </section>
        </>
    )
}

export default Contact;