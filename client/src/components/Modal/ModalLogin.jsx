// import React from 'react'
import {Modal, Button} from "antd";
import { metamask } from "../../assets";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

export default function ModalLogin({isOpen, setOpen}) {
  return (
    <Modal 
      title={<p className="text-center">Login</p>}
      open={isOpen}
      onCancel={()=>setOpen(false)}
      footer={null}
      className="!w-fit"
    >
    <div className="mx-auto mt-6">
      {/* <Button className="flex w-full items-center gap-2 border-gray-100 hover:!border-gray-300 h-14 px-2 min-w-[200px]">
        <img src={google} alt="google-login" className="w-8 object-cover" />
        <p className="text-lg">Google</p>
      </Button> */}
      <GoogleLogin
        onSuccess={credentialResponse => {
          const profileUser = JSON.stringify(jwt_decode(credentialResponse.credential));
          localStorage.setItem("profileUser", profileUser)
          setOpen(false);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <Button disabled className="flex w-full items-center gap-2 border-gray-100 hover:!border-gray-300 h-14 px-2 mt-4 min-w-[200px]">
        <img src={metamask} alt="google-login" className="w-5 object-cover" />
        <p className="">Metamask</p>
      </Button>
    </div>
    </Modal>
  )
}
