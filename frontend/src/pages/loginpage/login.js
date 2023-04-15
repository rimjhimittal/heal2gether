
import React from 'react'
import { useForm } from 'react-hook-form';
import white_logo from '../../assets/white_logo.png';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    
  return (
    <section>
        <div className="register">
            <div className='register2'>
            <div className="col-1">
                 <img src={white_logo} alt="" /> 

            </div>
            <div className="col-2">
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign In</button>
                </form>
            </div>
            </div>
        </div>
    </section>
  )
}