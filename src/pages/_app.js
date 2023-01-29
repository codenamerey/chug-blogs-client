import '@/styles/globals.css'
import Header from '@/components/Header'
import { useState, createContext } from 'react'

export default function App({ Component, pageProps }) {
  let UserContext = createContext(null);
  let [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <Header>
        </Header>
        <main className=' bg-gradient-to-tr from-orange-300 to-orange-500 grow min-h-full flex flex-col'>
          <Component {...pageProps} UserContext={UserContext}/>
        </main>
      </UserContext.Provider>
    </>
    )
}
