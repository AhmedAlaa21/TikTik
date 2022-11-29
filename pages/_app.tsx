import { useState, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const App = ({ Component, pageProps }: AppProps) => { // App props are predefined by Next.js
  // these steps for smoother work flow..
  const [isSSR, setIsSSR] = useState(true); // SSR: Server Side Rendering

  useEffect(() => {
    setIsSSR(false)
  }, []);

  if (isSSR) return null;

  return (
    <div>
      <Navbar />
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] flex-1' >
          <Component {...pageProps} />

        </div>
      </div>
    </div>
  );
}

export default App;