import React from 'react'

import './documentations.css'
import { Card } from '../../components/index'

import ChatGPT from '../../img/chatgpt.png'
import Playground from '../../img/gpt-playground.png'
import Dalle from '../../img/dalle.png'
import OpenAI from '../../img/openai.png'

function Documentations() {

    const data = [
        {
            img: OpenAI,
            heading: "OpenAI",
            paragraph: "OpenAI is a research organization that focuses on developing and promoting friendly artificial intelligence."
        },
        {
            img: Dalle,
            heading: "DALL·E 2",
            paragraph: "OpenAI's DALL-E 2 is a state-of-the-art artificial intelligence system that has the ability to generate images from text descriptions."
        },
        {
            img: ChatGPT,
            heading: "ChatGPT",
            paragraph: "ChatGPT is a natural language processing (NLP) model developed by OpenAI. It is capable of generating human-like text responses in real-time based on input from a user. ple"
        },
        {
            img: Playground,
            heading: "Playground",
            paragraph: "OpenAI Playground is a web-based platform for experimenting with and learning about artificial intelligence. "
        }
    ]



    return (
        <>

            <div className="documentation" id='documentation'>
                <div className="documentation_heading">
                    <h1>Visit out websites from here !!</h1>
                </div>
                <div className="documentation_cards">
                    {data.map(e => {
                        return <Card img={e.img} heading={e.heading} paragraph={e.paragraph} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Documentations