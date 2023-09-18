import React from 'react';
import '../style/welcome_style.css'
import { useDispatch } from 'react-redux';
import { renderStep } from '../slices/stepSlice';
import Socials from './Socials';

export default function WelcomeComponent() {

    const DISPATCH = useDispatch()
    const handleStepChange = (newStep) => {
        DISPATCH(renderStep(newStep))
    }
  return (
    <main className='componentContainer'>
        
        <h2 className='component_title'>Welcome</h2>
        <p className='component_text component_text--paragraph'>
            Join task management community, 
            unlock the power of productivity.
        </p>

        <section className='component_button_section'>
            <button className='btn btn--outline' onClick={() => handleStepChange(2)}>Sign In</button>
            <button className='btn btn--solid' onClick={()=>handleStepChange(1)}>Sign Up</button>
        </section>

        <section className='component_social_section'>
            
            <div className='divider-container'>
                <span className='divider-container__divider'></span>
                <p className='component_text--social'>
                    Or continue with
                </p>
                <span className='divider-container__divider'></span>
            </div>
            
           <Socials/>
        </section>

    </main>
  )
}
