import '@/styles/globals.css'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header>
      </Header>
      <main className=' bg-gradient-to-tr from-orange-300 to-orange-500 grow min-h-full flex flex-col'>
        <Component {...pageProps}/>
      </main>
    </>
    )
}
