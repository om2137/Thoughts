import React, { useState } from 'react'
import Button from '../components/Button'
import useThoughts from '../hooks/useThoughts'

type Props = {
    title: string;
}

const SignUpForm = ({title}:Props) => {
    const { createUser} = useThoughts();
    const [usrname,setUname] = useState('');
    const [name,setName] = useState('');
    const [bio,setBio] = useState('');
    const [avatar,setAvatar] = useState('');
    //console.log(name);
    return(
        <div className=' flex items-center justify-center  '>
            <div className='border-2 border-gray-400 py-4 md:py-10 rounded bg-white px-10 md:px-20 '>
                <div>
                    <h2 className='my-6 text-center text-4xl font-bold text-gray-900'>{title}</h2>
                    <form className='py-6' >
                        <div className='rounded-md shadow-sm -space-y-px text-left'>
                            <div>
                                <div className='flex pb-3'>
                                    <div className='w-50'>
                                        <div className=''>
                                            <div className="mb-3 xl:w-64 px-4">
                                                <label className=''>Username:</label>
                                                <input 
                                                    value={usrname} onChange={(e)=>setUname(e.target.value)}
                                                    type="text" 
                                                    autoComplete='none' 
                                                    required 
                                                    className='py-2 rounded relative block w-full px-3 
                                                    border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                                    placeholder='Username' />
                                            </div>

                                            <div className="mb-3 xl:w-64 px-4">
                                                <label className=''>Name:</label>
                                                <input 
                                                    value={name} onChange={(e)=>setName(e.target.value)} 
                                                    type="text" 
                                                    autoComplete='none' 
                                                    required 
                                                    className='py-2 rounded relative block w-full px-3 
                                                    border border-gray-600 placeholder-gray-500 text-gray-900 mb-2
                                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                                    placeholder='Name' />
                                            </div>
                                        </div>
                                        
                                        <div className=''>
                                            <div className="mb-3 xl:w-64 px-4">
                                                <label className=''>Bio:</label>
                                                <input 
                                                    value={bio} onChange={(e)=>setBio(e.target.value)} 
                                                    type="text" 
                                                    autoComplete='none'
                                                    required 
                                                    className='py-2 rounded relative block w-full px-3 
                                                    border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Bio'/>
                                            </div>
                                            <div className="mb-3 xl:w-64 px-4">
                                                <label className=''>Avatar:</label>
                                                <input 
                                                    value={avatar} onChange={(e)=>setAvatar(e.target.value)}
                                                    type="text" 
                                                    autoComplete='none'
                                                    required 
                                                    className='py-2 rounded relative block w-full px-3 
                                                    border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Avatar'/>
                                            </div>
                                            
                                        </div>   
                                        {/* juggad start*/}
                                            <div className="mb-3 xl:w-48 px-4">
                                                <label className='hidden'>Ignore:</label>
                                                <input 

                                                    type="text" 
                                                    autoComplete='none'
                                                    required 
                                                    className=' hidden py-2 rounded relative block w-full px-3 
                                                    border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='Ignore'/>
                                            </div>
                                        {/* Juggad End */}
                                        
                                    </div>

                                    

                                </div>
                                     
                                {/* <div>
                                    <label className=''>Address:</label>
                                    <input type="text" autoComplete='none' required 
                                        className='appearance-none py-4 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder=''/>
                                        
                                </div>

                                <div>
                                    <label className=''>Phone Number:</label>
                                    <input type="tel" autoComplete='none' required 
                                    className='appearance-none py-2 rounded relative block w-full px-3 
                                        border border-gray-600 placeholder-gray-500 rounded-t-md mb-2
                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder=''/>
                                </div> */}
                                
                                <div className='py-4 text-center'>
                                    <Button 
                                        label='register' 
                                        onClick={()=>createUser(usrname,name,bio,avatar)}
                                    />
                                </div>
                                
                            </div>
                            
                        </div> 
                    </form>

                </div>
            </div>
        </div>
        
    )
    
}

export default SignUpForm