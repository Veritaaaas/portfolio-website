import Plantify from './images/Plantify.png'
import bakerySalesForecastingModel from './images/bakerySalesForecastingModel.png'
import PokeMemoria from './images/PokeMemoria.png'
import Marketify from './images/Marketify.png'
import Routify from './images/Routify.png'

import ProjectCard from './ProjectCard'

function Projects() {
    
    const projects = [
        {
            name: "Plantify",
            img: Plantify,
            alt: "Plantify",
            tags: ["React", "Tailwind"],
            description: "Plantify is a web application that sells different types of plants. It is built using React and Tailwind CSS.",
            link: "https://plant-store-eta.vercel.app/#",
            github: "https://github.com/Veritaaaas/plant-store"
        },
        {
            name: "Bakery Sales Forecasting Model",
            img: bakerySalesForecastingModel,
            alt: "Bakery Sales Forecasting Model",
            tags: ["Python", "Flask", "HTML", "CSS", "SARIMAX"],
            description: "This is a web application that forecasts the sales of a bakery using SARIMAX model with the aim of helping the bakery to make better decisions and reduce food wastes.",
            link: "",
            github: "https://github.com/Veritaaaas/SalesForecastingModel"
        },
        {
            name: "PokeMemoria",
            img: PokeMemoria,
            alt: "PokeMemoria",
            tags: ["React", "Tailwind"],
            description: "PokeMemoria is a web application that tests the memory of a user by showing them different pokemons and asking them to remember the pokemons that they have seen.",
            link:"https://memory-game-taupe-eight.vercel.app/",
            github: "https://github.com/Veritaaaas/memory-game"
        },
        {
            name:"Marketify",
            img: Marketify,
            alt: "Marketify",
            tags: ["React", "Tailwind", "MySQL", "Flask", "YFinance"],
            description: "Marketify is a web app that allows users to simulate buying and selling stocks using real time data from Yahoo Finance.",
            link:"",
            github: "https://github.com/Veritaaaas/virtual-portfolio"
        },
        {
            name:"Routify",
            img: Routify,
            alt: "Routify",
            tags: ["React", "Tailwind", "ExpressJS", "Google Maps"],
            description: "Routify is a web app that allows motorcycle delivery riders to find the most optimized route given the weight of the item they're carrying and their given distances between the delivery points.",
            link:"",
            github: "https://github.com/Veritaaaas/nearest-neighbor"
        }
    ]

    return (
        <div className="bg-[#F6F5F4] rounded-[75px] py-8 px-4">
            <h1 className="ml-16 p-0 text-[35px]"> Featured Projects</h1>
            <div className="grid grid-cols-2 w-full justify-items-center">
                <div className='mt-32'>
                    <ProjectCard project={projects[0]}/>
                    <ProjectCard project={projects[3]}/>
                </div>
                <div>
                    <ProjectCard project={projects[1]}/>
                    <ProjectCard project={projects[2]}/>
                    <ProjectCard project={projects[4]}/>
                </div>
            </div>
        </div>
    )
}

export default Projects