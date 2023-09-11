import React from 'react';
import '../style/welcome_style.css'
import { RiGoogleFill, RiAppleFill, RiFacebookFill } from "react-icons/ri";

export default function WelcomeComponent() {
  return (
    <main className='componentContainer lg:border-solid lg:border lg:rounded-md shadow-sm'>
        
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
            
            <div className='flex items-center mb-8 lg:mb-0'>
                <span className='inline-block bg-gray-300 w-28 h-px'></span>
                <p className='component_text--social'>
                    Or continue with
                </p>
                <span className='inline-block bg-gray-300 w-28 h-px'></span>
            </div>
            
            <div className='component_icon_section'>
                <a href='!#'>
                    <RiGoogleFill className='google'/>
                </a>
                <a href='!#'>
                    <RiAppleFill className='apple'/>
                </a>
                <a href='!#'>
                    <RiFacebookFill className='facebook'/>
                </a>
            </div>
        </section>

    </main>
  )
}
