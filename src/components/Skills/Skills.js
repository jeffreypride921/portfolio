import React from "react";
import { MenuItems } from "./MenuItems";
import './Skills.css'

class Skills extends React.Component{
    render(){
        return(
            <div className='SkillsItems' id='skills'>
                <h1 className='skills-header'>Skills</h1>
                <ul className="skills-menu">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <div className={item.cName}>
                                    <span className='skill-icon'><i class={item.icon}/></span>
                                    <span className='skill-name'>{item.title}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills