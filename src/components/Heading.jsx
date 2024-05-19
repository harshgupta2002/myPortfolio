import React from "react";
import { Typewriter} from "react-simple-typewriter";

function Heading() {

    // const { text } = useTypewriter({
    //     words: ['Frontend Developer', 'Freelancer', 'UI/UX Designer'],
    //     loop: {},
    //     typeSpeed: 120,
    //     deleteSpeed: 80,
    //     delaySpeed: 1000,
    // });

    return (
        <h1 className="font-semibold text-4xl text-center md:text-left md:text-4xl lg:text-6xl">
            I am a <div><Typewriter
                words={['Frontend Developer', 'Freelancer', 'UI/UX Designer']}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}

                />
            </div>
        </h1>
    )
}
export default Heading;