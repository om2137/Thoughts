import Head from 'next/head'
import Button from '../components/Button'
import useThoughts from '../hooks/useThoughts'

export default function Home() {
  const {connect, account} = useThoughts();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Thoughts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <h1 className="mb-8 text-6xl font-bold">
          Welcome to <span className="text-red-400">Thoughts</span>
        </h1>

        {!account ?<Button label = "Connect to Etherum" onClick={connect} />
        : <p className="text-red-400">Connected to : {account}</p>}
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


