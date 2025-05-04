import React, { useState, useEffect } from "react"
import "../index.css"
import AccordionExample from "../components/AccordionExample"

const Home = () => {

    return (
        <div className="bg-home-bg justify-center align-center w-full h-screen pt-20">
            <section>
                <h1 className="section-header">Hi mom</h1>
                <p>I'm a paragraph</p>
            </section>
            <section>
                <h1 className="section-header">Take a trip</h1>
                <p>
                    You have the disposable income.
                    You have the time.
                    What are you waiting for?
                </p>
            </section>
            <section>
                <h1 className="section-header">It's really good!</h1>
            </section>
            <AccordionExample 
                question="I'm a question. What question should I ask?"
                answer="I'm a long and detailed response. I'm a long and detailed response. I'm a long and detailed response."
            />
            <AccordionExample 
                question="I'm a question. What question should I ask?"
                answer="I'm a long and detailed response. I'm a long and detailed response. I'm a long and detailed response."
            />
        </div>
    )
}

export default Home