import React from 'react'
import Maddy from "../../assets/Maddy.jpeg";
import { TypeAnimation } from 'react-type-animation';
import { useFileDownload } from "../../hooks/useFileDownload";
import ResumePDF from "../../assets/Downloadables/Madhanraj-Resume.pdf";

const Hero = () => {
    const { status, handleDownload } = useFileDownload();

    return (
        <section className="py-48 sm:py-16 w-full h-auto md:min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-evenly bg-linear-[25deg,#1E344B_5%,#1D283A_60%,#1C2739_90%,#2F2D49] text-white px-6 md:px-12">

            {/* Image Section */}
            <div className="flex items-center justify-center md:justify-start relative mt-10 md:mt-0 order-2 md:order-1">
                <div className="relative p-1 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[290px] md:h-[290px] rounded-full bg-gradient-to-r from-green-500 via-pink-500 to-purple-500 blur-lg" />
                <img
                    src={Maddy}
                    alt="Madhan"
                    className="absolute w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] rounded-full"
                />
            </div>

            {/* Text Section */}
            <div className='flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left order-1 md:order-2'>
                <TypeAnimation
                    className='text-3xl sm:text-4xl font-poppins font-semibold'
                    sequence={[
                        'Hi, I am Madhanraj 👋',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={0}
                    cursor={false}
                />
                <TypeAnimation
                    className='text-lg sm:text-xl md:text-2xl'
                    sequence={[
                        'Frontend Developer ',
                        2000,
                        'React JS Developer ',
                        2000,
                        'Problem Solver',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />

                {/* Buttons */}
                <div className='mt-5'>
                    <div className='flex flex-wrap items-center justify-center md:justify-start gap-4'>

                        {/* View My Work */}
                        <button className='bg-gradient-to-r font-poppins from-[#AC54F1] hover:scale-[1.1] hover:drop-shadow-xl/50 hover:drop-shadow-[#CE4EC3] via-[#CE4EC3] to-[#E649A1] py-2 px-4 text-sm rounded-full'>
                            View My Work
                        </button>

                        {/* Download Resume (using global handler) */}
                        <button
                            onClick={() => handleDownload(ResumePDF, "Madhanraj-Resume.pdf")}
                            disabled={status === "downloading"}
                            className={`py-2 px-5 text-sm rounded-full font-poppins border border-[#C084FC] transition-all duration-300 ease-in-out 
                            flex items-center gap-2
                            ${status === "idle"
                                    ? "text-[#C084FC] hover:scale-[1.1] hover:bg-[#C084FC] hover:text-white"
                                    : status === "downloading"
                                        ? "bg-[#C084FC] text-white animate-pulse cursor-wait"
                                        : "bg-green-500 text-white scale-105"
                                }`}
                        >
                            {status === "idle" && "Download Resume"}
                            {status === "downloading" && (
                                <>
                                    <span className="loader border-2 border-t-2 border-white w-4 h-4 rounded-full animate-spin"></span>
                                    Downloading...
                                </>
                            )}
                            {status === "success" && (
                                <>✅ Downloaded</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
