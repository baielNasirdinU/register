import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserFail, loginUserStart, loginUserSuccess } from '../slices/auth'

const Login = () => {

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPossword]=useState('')


  const dispatch=useDispatch()
  const {isLoading}=useSelector(state=>state.auth)

  const loginHandler=e=>{
    e.preventDefault()
    dispatch(loginUserStart())

    try {
      dispatch(loginUserSuccess())
    } catch (error) {
      dispatch(loginUserFail())
      
    }
  }
  return (
    <>
            

<div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">

    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" >
      <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
onChange={(e)=>setEmail(e.target.value)}        
            type="email"
          
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
          onChange={(e)=>setPossword(e.target.value)}     
  
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button 
          type="submit"
          onClick={loginHandler}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
          {isLoading?'loading..':'Sign in'
          }
     
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      sign in with{' '}
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        google
      </a>
    </p>
  </div>
</div>

    </>
  )
}

export default Login