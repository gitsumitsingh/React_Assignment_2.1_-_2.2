import { useState } from 'react'
import './resume.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container">
        <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="title text-center">
            <h1>Sumit Singh</h1>
            <h3>Fullstack Developer</h3>
            <h4><a href="https://www.powerweave.com/">sumit.singh@powerweave.com</a></h4>
            <hr />
            </div>
            
            {/*<!-- summary section -->*/}
            <div class="summary">
            <h2 class="text-center">Summary</h2>
            <p>A full stack developer with over 7 years of experience in designing and developing web applications. Looking for challenging roles in web and mobile industry to enhance my skills and provide my services to add value to the products of the organization. Highly motivated self learner with a passion for learning and keeping informed of the latest in technology.</p>
            
            <div class="row">
                <div class="col-md-3 col-sm-3">
                <p>Business Analysis</p>
                <p>Project Management</p>
                <p>WordPress Management</p>
                </div>
                <div class="col-md-3 col-sm-3">
                <p>Development</p>
                <p>Design</p>
                <p>Linux Admin</p>
                </div>
                <div class="col-md-3 col-sm-3">
                <p>Agile Development</p>
                <p>Scrum of Scrum</p>
                <p>Frontend Development</p>
                </div>
                <div class="col-md-3 col-sm-3">
                <p>Code Review</p>
                <p>Peer Review</p>
                <p>Fullstack Development</p>
                </div>
            </div>
            
            </div>
            
            
            {/*<!-- work experience section -->*/}        
            <div class="work-experience">
            <h2 class="text-center">Work Experience</h2>
            <div class="row experience-title">
                <div class="col-md-9">
                <h3>Some company</h3>
                <h4>Program Manager</h4>
                <h5>Some project</h5>
                </div>
                <div class="col-md-3">
                <h3>June 2015 - Present</h3>
                </div>
            </div>
            <div class="row experience-summary">
                <div class="col-md-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat ullam, pariatur, iste sunt ducimus modi cum ad provident dolores mollitia voluptatibus nemo amet ipsam corporis, accusamus repudiandae nihil! Sed?</p>
                </div>
            </div>
            
            {/*<!-- Corasent -->*/}
            <div class="row experience-title">
                <div class="col-md-9">
                <h3>Some company</h3>
                <h4>Associate Project Manager</h4>
                <h5>Some project</h5>
                </div>
                <div class="col-md-3">
                <h3>Oct 2012 - Jun 2015</h3>
                </div>
            </div>
            <div class="row experience-summary">
                <div class="col-md-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sequi voluptatibus similique repellat, qui officiis excepturi odit esse magni veritatis voluptatum iste molestias illum labore fugit nihil, modi inventore. Excepturi!:</p>
                <ul>
                    <li>Lead - UI design and development.</li>
                    <li>WordPress expert - Configuration, maintenance and custom development.</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default App
