import React from "react";
import './Home.css'

class Home extends React.Component{
    render(){
        return(
            <div className='HomeItems' id='/'>
                <img src='/images/keyboard2.jpg' className='bg' alt='bg'/>
                <h1 className="home-header">
                    <span className='first'>Jeffrey</span>
                    <span className='second'> M.</span>
                    <span className='third'> Pride</span>
                    {/* <span className='fourth'> Jr.</span> */}
                </h1>
                <p className="home-content">Web Development Portfolio</p>
            </div>
        )
    }
}

export default Home