import flask from './icons/icons8-flask.svg';
import python from './icons/icons8-python.svg';
import react from './icons/icons8-react-native.svg';
import javascript from './icons/icons8-javascript.svg';
import html from './icons/icons8-html.svg';
import tailwind from './icons/icons8-tailwind-css.svg';
import node from './icons/icons8-node-js.svg';
import git from './icons/icons8-git.svg';

import Slider from "react-slick";

function About() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false
      };
    
    return (
        <div className="flex flex-col justify-between h-screen bg-[#FDFDFD] landing-page px-8">
            <div className="bg-blue mt-[10rem] relative landing-page min-h-fit">
                <div className="bg-white shadow-2xl z-0 h-[150px] w-[450px] absolute
                left-[25%]"/>
            
                <div className="bg-[#2E2F3D] h-[30px] w-[250px] top-56 left-32 shadow-2xl z-0 absolute"/>
                <div className="absolute right-40">
                    <div className="w-[35rem]">
                        <h1 className="text-[50px] ">Putting the web to the benefit of the user</h1>
                    </div>
                    <div className="w-[40rem]">
                        <p className="text-[25px] text-[#AAAAAA]">My passion in life is to create websites that is user-oriented. I want to put my skills and knowledge into developing solutions that aims to make user’s life easier and more convenient.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <Slider {...settings}>
                    <div className="flex justify-center items-center">
                        <img src={flask} alt="flask" className="w-[100px] h-[100px]"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={python} alt="python" className="w-[100px] h-[100px]"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={react} alt="react" className="w-[100px] h-[100px]"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={javascript} alt="javascript" className="w-[100px] h-[100px]"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={html} alt="html" className="w-[100px] h-[100px]"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={tailwind} alt="tailwind" className="w-[100px] h-[100px]"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={node} alt="node" className="w-[100px] h-[100px]"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={git} alt="git" className="w-[100px] h-[100px]"/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default About;