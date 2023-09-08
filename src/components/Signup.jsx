import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiAppleFill, RiEyeLine, RiEyeOffFill, RiFacebookFill, RiGoogleFill, RiKey2Line, RiPhoneLine, RiUser3Line } from 'react-icons/ri'

export default function SignupComponent() {
    const [isPasswordHidden, setIsPassWordHidden] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)

  return (
    <main className='componentContainer lg:border-solid lg:border lg:rounded-md shadow-sm'>
        
        <h2 className='component_title'>Sign Up</h2>
        

        <section className='component_form_section'>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>

                <div className='form__input-container'>
                    <label className='form__label'>Mobile number</label>
                    <div className='input_container'>
                        <i className='icon'><RiPhoneLine/></i>
                        <input 
                            id='mobile'
                            placeholder='+2348000000000'
                            {...register("mobileNumber", {required: true})} className='form__input-field' 
                        />
                    </div>
                    {errors.mobileNumber && <span>This field is required</span>}
                </div>

                <div className='form__input-container'>
                    <label className='form__label'>Email</label>
                    <div className='input_container'>
                        <i className='icon'><RiUser3Line/></i>
                        <input 
                            id='email' 
                            placeholder='international.over@email.com' 
                            {...register("email", {required: true})} 
                            className='form__input-field'
                        />
                    </div>
                    {errors.email && <span>This field is required</span>}
                </div>

                <div className='form__input-container'>
                    <label className='form__label'>Password</label>
                    <div className='input_container'>
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
                               <RiEyeOffFill/> :
                            <RiEyeLine/>
                            }
                        </button>
                    </div>
                    {errors.Password && <span>This field is required</span>}
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
