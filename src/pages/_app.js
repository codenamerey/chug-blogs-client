import '@/styles/globals.css'
import Header from '@/components/Header'
import { useState, createContext, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  let UserContext = createContext(null);
  let [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('jwt-token');
    (async() => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/user/me`, {
          headers: {
            'Authorization': token
          }
        });
        const user = await res.json();
        setUser(user); 
      } catch(err) {
        if(err) throw err;
      }
    })()
  }, []);

  return (
    <>
      <UserContext.Provider value={{...user, setUser}}>
        <Header UserContext={UserContext}>
        </Header>
        <main className=' bg-gradient-to-tr from-orange-300 to-orange-500 grow min-h-full flex flex-col'>
          <Component {...pageProps} UserContext={UserContext}/>
        </main>
      </UserContext.Provider>
    </>
    )
}
