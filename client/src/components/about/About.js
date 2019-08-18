import React from 'react'

function About() {
    return (
        <div className="container">
            <br />
            <h1 className="text-primary">About</h1>
            <br />
            <h5>What?</h5>
            <p>Simple Bodybuilding is an app for tracking exercises, tracking diets, and connecting with others. Keep all of your workout data instead of losing it when you uninstall the app.</p>
            <br />
            <h5>How?</h5>
            <p>For instructions on how to use the app, see <a href="#" className="text-primary">Help</a>. This app is built by a one-man team using the MERN stack. I suggest using a unique password in order to protect yourself. However, no sensitive data is used or stored.</p>
            <br />
            <h5>Who?</h5>
            <p>My name is <a href="reidhansell.com" className="text-primary">Reid Hansell</a>, a web developer currently developing the skills to get into the industry. I am fitness-obsessed and have loved bodybuilding since I was a teen. I made this app not only to gain experience but also to use on a daily basis. My hopes are to turn this into a mobile app aswell to make usage more realistic.</p>
        </div>
    )
}

export default About
