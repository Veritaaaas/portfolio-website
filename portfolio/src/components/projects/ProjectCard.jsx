import { Icon } from 'react-icons-kit'
import {embed} from 'react-icons-kit/icomoon/embed'
import {externalLink} from 'react-icons-kit/fa/externalLink'

function ProjectCard({ project }) {

    return (
        <div className='max-w-[500px] flex flex-col items-center gap-4 mt-8'>
                <img src={project.img} alt={project.alt} className='h-[500px] shadow-2xl rounded-2xl '/>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <h3 className='text-xl font-semibold'>{project.name}</h3>
                    </div>
                    <div>
                        <a href={project.github}>
                            <Icon icon={embed} size={20} className='ml-4'/>
                        </a>
                        <a href={project.link}>
                            <Icon icon={externalLink} size={20} className='ml-4'/>
                        </a>
                    </div>
                </div>
                <div className='flex gap-4'>
                    {project.tags.map(tag => (
                        <div className='light-gray p-1 px-2 rounded-3xl'>{tag}</div>
                    ))}
                </div>
                <div>
                    <p className='text-center text-[20px]'>{project.description}</p>
                </div>
            </div>
    )
}

export default ProjectCard