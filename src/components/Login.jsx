import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../style/signin_style.css';
import { RiEyeLine, RiEyeOffFill,RiKey2Line, RiPhoneLine } from 'react-icons/ri'
import { toast } from 'react-toastify';

export default function LoginComponent() {

    const [isPasswordHidden, setIsPassWordHidden] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    const notify_error = (notify, id) =>{
        toast.error(notify, {toastId: id})
    }

  return (
    <main className='componentContainer lg:border-solid lg:border lg:rounded-md shadow-sm'>
        
        <h2 className='component_title'>Sign In</h2>
        

        <section className='component_form_section'>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>

                <div className='form__input-container'>
                    <label className='form__label'>Email/Mobile</label>
                    <div className='input_container'>
                        <div className='input-items'>
                            <i className='icon'><RiPhoneLine/></i>
                            <input 
                                id='mobile'
                                type='text'
                                placeholder='+2348000000000'
                                {...register("mobileNumber", {required: true})} className='form__input-field' 
                            />
                        </div>
                    </div>
                    {
                        errors.mobileNumber && 
                        notify_error('Email/Mobile cannot be empty', 1)
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
                    {   
                        errors.Password && 
                        notify_error('Password cannot be empty', 2)
                    }
                </div>
                <div className='sub-text'>
                    <a href='!#' className=''>
                        <small>Forgot password?</small>
                    </a>
                </div>

                <button 
                    type="submit" 
                    className='btn btn--full btn--solid btn--solid--inverted'
                >
                    Sign In
                </button>
            </form>
        </section>

    </main>
  )
}
