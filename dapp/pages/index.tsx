import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Thoughts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-8 text-6xl font-bold">
          Welcome to <span className="text-red-400">Thoughts</span>
        </h1>

        <Button
          label = "Connect to Etherum"
          onClick={() =>console.log('todo: connect etherum')}
        />
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
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

export default Home
