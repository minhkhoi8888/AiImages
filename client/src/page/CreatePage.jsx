// import React from 'react'
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import {emptyImage, Spin} from "../assets/index";

export default function CreatePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-2">
        <Link className="hover:underline" to={"/"}>Home</Link><span>/  Create Post</span>
      </div>

      <div className="mt-12">
        <h1 className="font-extrabold text-[32px] !m-0">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>

      <Form
        name="generate_image"
        layout="vertical"
        className="mt-6"
      >
        <Form.Item
          label={<div className="flex gap-3 items-center">
            <span className="font-semibold">Prompt</span>
            <Button> Suprise me</Button>
          </div>}
          name="prompt"
        >
          <Input.TextArea
            className="!max-w-[500px]"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
          />
        </Form.Item>

        <div className="w-64 h-64 bg-white rounded-lg relative overflow-hidden">
            <img src={emptyImage} alt="" />
            <div className="bg-gray-500/90 absolute flex justify-center items-center top-0 w-full h-full">
              <img src={Spin} className="w-8 spin object-contain" alt="React logo" />
            </div>
        </div>

        <div className="mt-6 flex gap-2">
          <Button type="primary" className="bg-black">Genterate Image</Button>
          <Button>Share to communites</Button>
        </div>
        

      </Form>


    </div>
  )
}
