import { create } from 'domain';
import { Wallet } from 'ethers';
import Head from 'next/head'
import { useState } from 'react';
import Button from '../components/Button'
import SignUpForm from '../components/SignUpForm'
import useThoughts from '../hooks/useThoughts'

export default function Home() {
  const {connect, account, user, createUser, postThought, thoughts} = useThoughts();
  //console.log(user);
  const [thoughtContent, setThoughtContent] = useState<string>('');
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-900">
      <Head>
        <title>Thoughts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 ">
        <h1 className="mb-8 text-6xl font-bold text-center text-white">
          Welcome to <span className="text-red-400">Thoughts</span>
        </h1>
        {!account ? (
        <Button label = "Connect to Etherum" onClick={connect} />
        ) : 
          account.toUpperCase() !== user?.wallet.toUpperCase() ? (
            <SignUpForm />
          ): (
            <>
            <div className='flex items-center justify-center w-100 pb-8'>
              <img src={user?.avatar}  className="rounded-full mr-2" width="80"/>
              <div className='flex flex-col justify-start'>
                <h1 className='flex flex-col text-left text-2xl font-bold text-white'>{user?.name}</h1>
                <span className='text-sm text-gray-400 text-left'>@{user?.username}</span>
              </div>
            </div>
            <div className='item-center justify-center  w-120 '>
              <div className='pl-8 pb-4'>
                <div className="flex item-center w-60">              
                  <textarea className='ml-2 rounded-xl border border-gray-600  w-60 pt-1 pl-2' placeholder='whats on your mind ' value={thoughtContent} onChange={e=>setThoughtContent(e.target.value)}/>
                </div>  
                <div className='mt-1 flex justify-end w-60 pl-4'>
                  <Button label='publish' onClick={() => postThought(user?.username +": "+ thoughtContent)}/>
                </div> 
              </div>
              
              <div>
                <div className='mt-2  bg-red-400 text-white  rounded pt-1 '>
                  {
                    thoughts.map(thought => (  
                      <span className='ml-3 mr-2'>
                        {thought.content } <br />
                      </span>
                      
                    ))
                  }
                </div>
              </div>
               
            </div>
            </>
        ) }
        
        
      
      </main>

      <footer className="flex h-20 w-full items-center justify-center border-0 text-white ">
        <a
          className="flex items-center justify-center gap-2"
          rel="noopener noreferrer"
        >
          Powered by{' Etherum'}
        </a>
      </footer>
    </div>
  )
}

