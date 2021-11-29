import React from "react";
import './Biography.css'

class Biography extends React.Component{
    render(){
        return(
            <div className='BiographyItems' id='biography'>
                <div className='bio-parts'>
                    <div className='bio-profile'>
                        <img src='/images/me.jpeg' className='bio-pic' alt='me'/>
                        <div className='bio-profile-links'>
                            <a href='https://github.com/jeffreypride921' className='bio-link-1'>
                                <span className='bio-github'><i class="fab fa-github-square"></i></span>
                            </a>
                            <a href='https://www.linkedin.com/in/jeffrey-pride-982379213/' className='bio-link-2'>
                                <span className='bio-linkedin'><i class="fab fa-linkedin"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className='biography'>
                        <h1 className="bio-header">Biography</h1>
                        <p className="bio-content">
                        Hey, I'm Jeffrey Pride, a new graduate currently seeking my first job in the tech industry. In 2021, I graduated with a
                        BS in Computer Science from George Mason University.
                        <br/><br/>                                             
                        By the end of my four years of study I gained a great interest for web development and continued with my own personal 
                        study after graduation. As I search for my first web developer position, I look forward to applying my newly learned 
                        skills as well as learning new skills as I further my career.
                        </p>
                        <h2 className="bio-header-2">Education</h2>
                        <p className='bio-content-2'><i class="fas fa-graduation-cap"/>BS in Computer Science - 2021</p>
                        <p className='bio-content-2-sub'>George Mason University</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Biography