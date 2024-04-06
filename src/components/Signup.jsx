import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import AuthService from "../../Appwrite/Auth"
import {  useDispatch } from 'react-redux'
import {login} from "../store/AuthSlice"

const Signup = () =>{

const {register ,handleSubmit}= useForm()
const [error , setError]= useState()
const dispatch = useDispatch()

//create function
const create = async  (data)=>{
 const UserData = await  AuthService.CreateUser(data)

 if(UserData){
    dispatch(login(UserData))
 }
}

  return (
    <div className='w-3/12 mt-4 bg-gray-50 border-gray-300 border-2 flex justify-center flex-wrap'>
<h1 className='font-mono text-5xl font-semibold mt-9 flex justify-center w-full h-12'>DEMOSOCIAL</h1>
<h3 className='text-xl font-serif   font-medium text-gray-400 flex flex-wrap  text-center w-9/12 mt-12'>Sign up to see photos and videos from your friends.</h3>

<button className='w-9/12 bg-indigo-500 h-12 rounded-xl text-xl text-gray-100 mt-4 hover:bg-indigo-600 cursor-pointer'>LOGIN ACCOUNT </button>

<div className="flex items-center w-9/12 mt-4">
  <div className="flex-1 border-t-2 border-gray-300"></div>
  <span className="px-3 text-gray-500 bg-white">or</span>
  <div className="flex-grow border-t-2 border-gray-300"></div>
</div>

<form action="" className='w-9/12 flex justify-center flex-wrap mb-10' onSubmit={handleSubmit(create)}>
    <input 
    {...register("phone",{required:true, minLength:10})}
    className='w-full h-10 bg-gray-200 border-2 border-gray-400 mt-6 p-2 rounded-lg' type="text" placeholder='Enter Mobile Number' />
    <input
    {...register("name",{required:true, minLength:6})}
    className='w-full h-10 bg-gray-200 border-2 border-gray-400 mt-6 p-2 rounded-lg' type="text" placeholder='Enter FullName'/>
    <input 
    {...register("email", {required:true})}
    className='w-full h-10 bg-gray-200 border-2 border-gray-400 mt-6 p-2 rounded-lg' type="text" placeholder='Enter EmailId' />
    <input 
    {...register("password", {required:true, minLength:8})}
    className='w-full h-10 bg-gray-200 border-2 border-gray-400 mt-6 p-2 rounded-lg' type="text" placeholder='Enter Password' />

<span className='text-sm text-gray-600 font-normal mt-4 text-center'>People who use our service may have uploaded your contact information to DemoSocial.</span>
<span className='text-sm text-gray-600 font-normal mt-5 text-center'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
</span>

    <button type='submit' className='w-full h-12 rounded-xl text-gray-100 text-xl font-medium bg-indigo-500 hover:bg-indigo-600 px-3 py-2 mt-4'>SignUp</button>

    
</form>

    </div>
  )
}

export default Signup