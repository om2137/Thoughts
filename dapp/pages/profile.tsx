import { create } from 'domain';
import { Wallet } from 'ethers';
import Head from 'next/head'
import { useState } from 'react';
import Button from '../components/Button'
import SignUpForm from '../components/SignUpForm'
import useThoughts from '../hooks/useThoughts'
import MediaCard from '../components/Cards';

const Profile = () => {
  const {connect, account, user, createUser, postThought, thoughts, } = useThoughts();  
  return (
    <>
      <div>Profile</div>
      <div>
        {/* current loged in users content*/}
        {
                  thoughts.map( thought => (
                    thought.authorName === user?.username ? (
                      <div>
                        <div className='flex flex-col justify-top w-72 sm:w-96 break-all sm:ml-10'>
                          <MediaCard Cardtitle={"@ "+ thought.authorName +" "+ user?.username }  Cardthought={thought.content} />
                        </div>
                      </div>
                    ):(
                      <div></div>
                    )
                  ))
              }
          {/* current loged in users content end */}
      </div>
    </>
    
  )
}
export default Profile