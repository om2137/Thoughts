import { create } from 'domain';
import { Wallet } from 'ethers';
import Head from 'next/head'
import { useState } from 'react';
import Button from '../components/Button'
import SignUpForm from '../components/SignUpForm'
import useThoughts from '../hooks/useThoughts'
import MediaCard from '../components/Cards';
import { ClassNames } from '@emotion/react';
import Navbar from '../components/Navbar';

const Profile = () => {
  const {connect, account, user, createUser, postThought, thoughts, } = useThoughts();  
  const [thoughtContent, setThoughtContent] = useState<string>('');
  return (
    <>
      <header className=" bg-gray-900">
        <Navbar
          title='Thoughts'
          name={user?.username}
        />
      </header>
      <main className="flex min-h-screen flex-col items-center bg-gray-900">
        
        <div className='flex pt-20'>
          <div>
            <img src={user?.avatar}  className="border-2 rounded-full mr-2 aspect-square" width="170" height="170"/>
          </div>
          <div>
            <div className=''>
              <span className='font-bold text-9xl uppercase text-white pl-10'>{user?.name}</span>
            </div>
            <div className=''>
              <span className='font-semibold text-4xl text-white pl-10 ml-5'>@{user?.username}</span>
            </div>
          </div>
          
        </div>
        
        <div className='py-10'>
          {/* current loged in users content*/}
          {
            thoughts.map( thought => (
              thought.authorName === user?.username ? (
                <div>
                  <div className='flex flex-col justify-top w-72 sm:w-96 break-all sm:ml-10'>
                      <MediaCard Cardtitle={"@ "+ thought.authorName }  Cardthought={thought.content} />
                  </div>
                </div>
              ) : null
            ))
          }
          {/* current loged in users content end */}
        </div>
      </main>
      
      
    </>
    
  )
}
export default Profile