import React from "react";

function Footer (props){
  if(props.data){
    var name = props.data.name;
  }
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="copyright">
              <li>&copy; Copyright {new Date().getFullYear()} {name}</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
