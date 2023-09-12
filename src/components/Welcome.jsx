import React from 'react';
import '../style/welcome_style.css'
import { RiGoogleFill, RiAppleFill, RiFacebookFill } from "react-icons/ri";

export default function WelcomeComponent() {
  return (
    <main className='componentContainer'>
        
        <h2 className='component_title'>Welcome</h2>
        <p className='component_text component_text--paragraph'>
            Join task management community, 
            unlock the power of productivity.
        </p>

        <section className='component_button_section'>
            <button className='btn btn--outline'>Sign In</button>
            <button className='btn btn--solid'>Sign Up</button>
        </section>

        <section className='component_social_section'>
            
            <div className='divider-container'>
                <span className='divider-container__divider'></span>
                <p className='component_text--social'>
                    Or continue with
                </p>
                <span className='divider-container__divider'></span>
            </div>
            
            <div className='component_icon_section'>
                <a href='!#' className='icon_links'>
                    <RiGoogleFill className='google'/>
                </a>
                <a href='!#' className='icon_links'>
                    <RiAppleFill className='apple'/>
                </a>
                <a href='!#' className='icon_links'>
                    <RiFacebookFill className='facebook'/>
                </a>
            </div>
        </section>

    </main>
  )
}
