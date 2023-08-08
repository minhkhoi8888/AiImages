import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home, CreatePage} from "./page"
import { ConfigProvider } from 'antd';
import { GoogleOAuthProvider } from '@react-oauth/google';
import HeaderNav from "./components/HeaderNav";

function App() {

  return (
  <GoogleOAuthProvider 
    clientId="785865526155-di58lpt5fm7jksgg7bkgum357r1s6dvd.apps.googleusercontent.com"
  >
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000',
        },
      }}
    >
      <BrowserRouter>
        <HeaderNav/>
        <main className='w-full mt-[75px] bg-gray-100 sm:px-8 px-4 py-4 h-screen'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create-post' element={<CreatePage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </ConfigProvider>
  </GoogleOAuthProvider>
  )
}

export default App
