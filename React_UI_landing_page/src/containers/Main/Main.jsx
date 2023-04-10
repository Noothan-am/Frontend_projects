import React from 'react'
import './main.css'
import { Comp } from '../../components'

function Main() {
  return (
    <>
      <div className="main_container" id='openai'>
        <div className="main_part1-feature">
          <Comp title={"OpenAI ??"} discription={"OpenAI is a research laboratory based in San Francisco, California. Our mission is to ensure that artificial general intelligence benefits all of humanity."} />
        </div>
        <div className="main_part2">
          <h1>OPEN AI TOOLS</h1>
          <p>--Explore</p>
        </div>
        <div className="main_part3-feature">
          <Comp title={"Playground"} discription={"OpenAI's Playground provides a powerful artificial intelligence tool that makes many everyday projects easier."} />
          <Comp title={"ChatGPT"} discription={"ChatGPT is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAI's GPT-3.5 family of large language models, and is fine-tuned with both supervised and reinforcement learning techniques"} />
          <Comp title={"DALL-E2"} discription={"DALL-E and DALL-E 2 are deep learning models developed by OpenAI to generate digital images from natural language descriptions, called DALL-E was revealed by OpenAI in a blog post in January 2021, and uses a version of GPT-3 modified to generate images"} />
        </div>
      </div>
    </>
  )
}

export default Main