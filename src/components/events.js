import React from 'react'
import Header from './header'

export default function EventsPage() {
    return(
        <>
            <Header />
           <div id="lisa">
                <br></br>
                <strong id="bold">Events Page</strong>
                <br></br><br></br>
                <strong id="bold">The Need:</strong> Monika needs the ability to post post events and have users go to her website and fill out a form that emails her, letting her know the person is interested.
                <br></br>
                <br></br>
                <strong id="bold">Technology:</strong> Matt: React, email.js, additional as needed. Lisa: Express, MongoDB
                <br></br>
                <br></br>
                <strong id="bold">Description:</strong> Client needs a blog like system.
                Make a system using express and MongoDB that has a title, a little descritpion and a picture for the posts. Users can click on the event or post and go to the page. This page will have information that Monika has already fill out herself in a blog like way.
                <br></br>     <br></br>
                In these posts, there will be a form that will connect to email.js that will tell Monika something like "Name, email, and so on is interested in event X on date X". The actual form itself is not backend, however, it should automatically know what blog post or event the form is in. So, if the user clicked on an event im making up called "Garden Event", The form I will connect with email.js will not allow the user to select the wrong event.
                <br></br>     <br></br>
                You do not need to do any styling, or anything else. Core functionality of the system the only goal for you.
           </div>
         </>
    )
}