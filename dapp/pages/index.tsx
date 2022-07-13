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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <Head>
        <title>Thoughts</title>
      </Head>
      
      <div className='flex item-top justify-top'>
          <h1 className=" text-6xl font-bold text-center text-white py-10">
            Welcome to <span className="text-red-400">Thoughts!</span>
          </h1>
        </div>
      
      <main className="flex w-full flex-1 flex-col items-center justify-top px-20 py-">
        
        <div className='item-center justify-center'>
          {!account ? (
          <Button label = "Connect to Etherum" onClick={connect} />
          ) : 
            account.toUpperCase() !== user?.wallet.toUpperCase() ? (
              <SignUpForm />
            ): (
              <>
              <div className='flex w-full flex-col pb-8 px-auto'>
                <div className=' flex item-center justify-center  w-120 '>
                  <div>
                    <img src={user?.avatar}  className="rounded-full mr-2" width="170"/>
                  </div>
                  
                  <div className='pl-3 '>

                    <div className="item-center w-60">   
                      <div>
                        <div className='justify-start'>
                          <h1 className='text-left text-2xl font-bold text-white'>{user?.name}</h1>
                          <span className='text-sm text-gray-400 text-left'>@{user?.username}</span>
                        </div>  
                      </div>
                      <div className=''>
                        <textarea 
                          className='mt-2 rounded-xl border border-gray-600 w-60 pt-1 pl-2' 
                          placeholder='whats on your mind ' 
                          value={thoughtContent} 
                          onChange={e=>setThoughtContent(e.target.value)}
                        /> 
                      </div>           
                      
                    </div>  
                    <div className='mt-1 flex justify-end w-60 pl-4'>
                      <Button label='publish' onClick={() => postThought(user?.username +": "+ thoughtContent)}/>
                    </div> 
                  </div>
                </div>
                
              </div>
              <div>
                
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
              </>
          ) }
        </div>
      
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

