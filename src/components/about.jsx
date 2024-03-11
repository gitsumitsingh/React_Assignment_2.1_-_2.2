import React from "react";
import Resume from "../resumeData/resume.pdf";
import ProfilePicture from "../resumeData/profilepic.jpg"
import Border from './Border';

export default function About (props) {
    if (props.data) {
      var name = props.data.name;
      var bio = props.data.bio;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var phone = props.data.phone;
      var email = props.data.email;
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <Border color="grey">
            <img className="profile-pic" src={ProfilePicture} alt="" />
            </Border>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city}, {state} {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  
}

