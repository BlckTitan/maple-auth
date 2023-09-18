import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiEyeLine, RiEyeOffFill, RiKey2Line, RiPhoneLine, RiUser3Line } from 'react-icons/ri';
import notify_error from '../utils/toast_util';
import Socials from './Socials';

export default function SignupComponent() {

    const [isPasswordHidden, setIsPassWordHidden] = useState(false)
    // const [pwrd, setPwrd] = useState('');
    // const [confirmPwrd, setConfirmPwrd] = useState('');
    const [pwrdMatch, setPwrdMatch] = useState('');


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) =>{ 
        console.log(data)
        if(data.password === data.confirmPassword) {
            setPwrdMatch(data.confirmPassword)
        }else{
            notify_error('Passwords do not match', 7)
        }
    }

  return (
    <main className='componentContainer'>
        
        <h2 className='component_title'>Sign Up</h2>
        

        <section className='component_form_section'>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>

                <div className='form__input-container'>
                    <label className='form__label' htmlFor='mobile'>Mobile number</label>
                    <div className='input_container'>
                        <div className='input-items'>
                            <i className='icon'><RiPhoneLine/></i>
                            <input 
                                id='mobile'
                                autoComplete='off'
                                type='tel'
                                placeholder='234 800 000 0000'
                                pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{4}"
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
                    <label className='form__label' htmlFor='email'>Email</label>
                    <div className='input_container'>
                        <div className='input-items'> 
                            <i className='icon'><RiUser3Line/></i>
                            <input 
                                id='email'
                                autoComplete='off'
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
                    <label className='form__label' htmlFor='password'>Password</label>
                    <div className='input_container'>
                        <div className='input-items'>
                            <i className='icon'><RiKey2Line/></i>
                            <input 
                                id='password' 
                                autoComplete='off'
                                type={(isPasswordHidden === false) ? 
                                    'password' : 
                                    'text'
                                } 
                                {...register("password", {required: true})} 
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

                <div className='form__input-container'>
                    <label className='form__label' htmlFor='confirm-password'>Confirm Password</label>
                    <div className='input_container'>
                        <div className='input-items'>
                            <i className='icon'><RiKey2Line/></i>
                            <input 
                                id='confirm-password' 
                                autoComplete=''
                                type={(isPasswordHidden === false) ? 
                                    'password' : 
                                    'text'
                                } 
                                {...register("confirmPassword", {required: true})} 
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
                    {   errors.confirmPassword && 
                        notify_error('Passwords do not match', 6)
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
            
            <Socials/>
        </section>

    </main>
  )
}
