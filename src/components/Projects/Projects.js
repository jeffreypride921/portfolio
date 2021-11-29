import React from 'react';
import './Projects.css';
import { MenuItems } from './MenuItems'; 

class Projects extends React.Component{
    render(){
        return(
            <div className='ProjectItems' id='projects'>
                <h1 className='proj-header'>Projects</h1>
                <ul className='proj-list'>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a href={item.url}>
                                    <img className='proj-img' src={item.img} alt='img'/>
                                </a>
                                <div className='proj-text'>
                                    <h2 className='proj-title'>{item.title}</h2>
                                    <p className='proj-desc'>{item.desc}</p>
                                    <a href={item.github}>
                                        <span className='proj-source'><i class="fab fa-github"></i>   Source Code</span>
                                    </a>
                                    <a href={item.url}>
                                        <span className='proj-link'><i class="fas fa-link"></i>   Page Link</span>
                                    </a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Projects