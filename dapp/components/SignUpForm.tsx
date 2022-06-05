import React, { useState } from 'react'
import Button from '../components/Button'
import useThoughts from '../hooks/useThoughts'
import Image from 'next/image'

const SignUpForm = () => {
    const { createUser} = useThoughts();
    const [usrname,setUname] = useState('');
    const [name,setName] = useState('');
    const [bio,setBio] = useState('');
    const [avatar,setAvatar] = useState('');
    //console.log(name);
    return(
        <div className='min-h-full flex items-center justify-to-center my-32 '>
            <div className='max-w-md w-full space-y-8'>
                <div>
                    <h2 className='mt-6 text-center text-4xl font-bold text-gray-900'>Fields</h2>
                    <form className='mt-4 space-y-2' >
                        <div className='rounded-md shadow-sm -space-y-px '>
                            <div>
                                <div className="mb-3 xl:w-96">
                                    <label>@username:</label>
                                    <input value={usrname} onChange={(e)=>setUname(e.target.value)} type="text" autoComplete='none' required className='appearance-none py2 rounded relative block w-full px-3 
                                        border border-gray-300 placeholder-gray-300 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Username' />
                                </div>
                                    
                                <div className="mb-3 xl:w-96">
                                    <label>Full Name:</label>
                                    <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" autoComplete='none' required className='appearance-none py2 rounded relative block w-full px-3 
                                        border border-gray-300 placeholder-gray-300 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Name'/>
                                </div>
                                <div>
                                    <label>Avatar:</label>
                                    <input value={avatar} onChange={(e)=>setAvatar(e.target.value)}  type="text" autoComplete='none' required className='appearance-none py2 rounded relative block w-full px-3 
                                        border border-gray-300 placeholder-gray-300 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Avatar'/>
                                    
                                </div>
                                <div>
                                    <label>Bio:</label>
                                    <input value={bio} onChange={(e)=>setBio(e.target.value)}  type="text" autoComplete='none' required className='appearance-none py2 rounded relative block w-full px-3 
                                        border border-gray-300 placeholder-gray-300 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Bio'/>
                                </div>
                                <div>
                                    <label>IGNORE:</label>
                                    <input type="text" autoComplete='none' required className='appearance-none py2 rounded relative block w-full px-3 
                                        border border-gray-300 placeholder-gray-300 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='IGNORE'/>
                                </div>
                                <Button label='SignUp' onClick={() => 
                                    createUser(
                                        usrname, name, bio, avatar
                                )}/>
                            </div>
                            
                        </div> 
                    </form>

                </div>
            </div>
        </div>
        
    )
    
}

export default SignUpForm