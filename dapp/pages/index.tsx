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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Thoughts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 ">
        <h1 className="mb-8 text-6xl font-bold text-center">
          Welcome to <span className="text-red-400">Thoughts</span>
        </h1>
        {/* <img src="https://i.pinimg.com/originals/a3/5f/1f/a35f1ff1fdd3a241a838ce3bdfc2f1d2.jpg" className="rounded-full h-16 w-16" alt='error' /> */}

        {!account ? (
        <Button label = "Connect to Etherum" onClick={connect} />
        ) : 
          account.toUpperCase() !== user?.wallet.toUpperCase() ? (
            <SignUpForm />
          ): (
            <>
            <div className='flex items-center justify-center w-100 pb-4'>
              <img src={user?.avatar}  className="rounded-full h-16 w-16 mr-2" />
              <div className='flex flex-col justify-start'>
                <span className='flex flex-col text-left'>{user?.name}</span>
                <span className='text-sm text-gray-400 text-left'>@{user?.username}</span>
              </div>
            </div>
            <div className='item-center justify-center  w-120 '>
              <div className='pl-8'>
                <div className="flex item-center w-60">              
                  <textarea className='ml-2 rounded-xl border border-gray-600  w-60 pt-1 pl-2' placeholder='whats on your mind ' value={thoughtContent} onChange={e=>setThoughtContent(e.target.value)}/>
                </div>  
                <div className='mt-1 flex justify-end w-60 pl-4'>
                  <Button label='publish' onClick={() => postThought(user?.username +": "+ thoughtContent)}/>
                </div> 
              </div>
              
              <div>
                <div className='mt-2  bg-red-200 mr-8 rounded pt-1 pb-2'>
                  {
                    thoughts.map(thought => (  
                      <span className='ml-3 mr-3'>
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

      <footer className="flex h-24 w-full items-center justify-center border-t ">
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

