import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Spin } from '../assets/index';
import ModalLogin from "./Modal/ModalLogin";
import { Dropdown } from 'antd';
import { googleLogout } from '@react-oauth/google';


export default function HeaderNav() {
    const [openModalLogin, setModalLogin] = useState(false)
    const [profileUser, setProfileUser] = useState(null)

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("profileUser"));
        if(data) {
            setProfileUser(data)
        }
    },[openModalLogin])

    const items = [
        {
            key: "profile",
            label: (
                <p>My profile</p>
            )
        },
        {
            key: "log-out",
            label: (
                <p onClick={()=>{
                    googleLogout()
                    localStorage.clear();
                    setProfileUser(null);
                }}>Log out</p>
            )
        },
        
    ]

  return (
    <header className='w-full fixed bg-white top-0 left-0 z-10 px-4 py-4 sm:px-8 border-b border'>
    <div className='max-w-7xl mx-auto flex justify-between'>
      <Link to="/" className='flex items-center gap-1'>
        <img src={Spin} className="w-8 object-contain" alt="React logo" />
        <span className='uppercase font-bold text-lg'>close ai</span>
      </Link>
      {!profileUser ? (
        <div onClick={()=>setModalLogin(true)} className='flex items-center gap-1'>
            <button className='border py-2 px-4 rounded-lg bg-black text-white'>Log in</button>
        </div>
      ): 
        <Dropdown
            menu={{
                items,
            }}
        >
            <div>
                <img src={profileUser?.picture} className="w-10 rounded-full object-cover" />
            </div>
        </Dropdown>
      }
    </div>

     {/* MODAL */}
     <ModalLogin 
        isOpen={openModalLogin}
        setOpen={setModalLogin}
      />
  </header>
  )
}
