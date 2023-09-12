import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiAppleFill, RiEyeLine, RiEyeOffFill, RiFacebookFill, RiGoogleFill, RiKey2Line, RiPhoneLine, RiUser3Line } from 'react-icons/ri';
import notify_error from '../utils/toast_util';

export default function SignupComponent() {
    const [isPasswordHidden, setIsPassWordHidden] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    const toastId = React.useRef(null);
    

  return (
    <main className='componentContainer'>
        
        <h2 className='component_title'>Sign Up</h2>
        

        <section className='component_form_section'>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>

                <div className='form__input-container'>
                    <label className='form__label'>Mobile number</label>
                    <div className='input_container'>
                        <div className='input-items'>
                            <i className='icon'><RiPhoneLine/></i>
                            <input 
                                id='mobile'
                                type='tel'
                                placeholder='+2348000000000'
                                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                                {...register("mobileNumber", 
                                {required: true})}
                                className='form__input-field' 
                            />
                        </div>
                    </div>
                    {
                        errors.mobileNumber && 
                        notify_error('Mobile number cannot be empty', 3)
                    }
                </div>

                <div className='form__input-container'>
                    <label className='form__label'>Email</label>
                    <div className='input_container'>
                        <div className='input-items'> 
                            <i className='icon'><RiUser3Line/></i>
                            <input 
                                id='email'
                                type='email'
                                placeholder='international.over@email.com' 
                                {...register("email", {required: true, pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.]+$/i}})} 
                                className='form__input-field'
                            />
                        </div>
                    </div>
                    {
                        errors.email && 
                        notify_error('Email cannot be empty', 4)
                    }
                </div>

                <div className='form__input-container'>
                    <label className='form__label'>Password</label>
                    <div className='input_container'>
                        <div className='input-items'>
                            <i className='icon'><RiKey2Line/></i>
                            <input 
                                id='password' 
                                type={(isPasswordHidden === false) ? 
                                    'password' : 
                                    'text'
                                } 
                                {...register("Password", {required: true})} 
                                className='form__input-field' 
                            />
                            
                            <button 
                                type='button' 
                                onClick={()=>setIsPassWordHidden(!isPasswordHidden)}
                            >
                                {
                                    (isPasswordHidden === true) ? 
                                    <RiEyeOffFill className='icon-svg icon-svg--left'/> :
                                    <RiEyeLine className='icon-svg icon-svg--left'/>
                                }
                        </button>
                        </div>
                    </div>
                    {   errors.Password && 
                        notify_error('Password cannot be empty', 5)
                    }
                </div>

                <button type="submit" className='btn btn--full btn--solid btn--solid--inverted'>Sign Up</button>
            </form>
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
