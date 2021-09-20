import React from 'react'
import "./Header.css";
import {SiThemoviedatabase} from "react-icons/si";
import {AiOutlineSearch} from "react-icons/ai";
import {RiPlayList2Fill} from "react-icons/ri";
function Header() {
    return (
        <div className="header">
           <div className="header__conatiner">
              <div className="header__logo">
                   <SiThemoviedatabase />
              </div>
              <div className="header__containt">
                <ul>
                    <li>Home</li>
                    <li>Web Shows</li>
                    <li>Movies</li>
                    <li>Tv</li>
                    <li>Music</li>
                </ul>
              </div>
              <div className="header__icons">
                 <AiOutlineSearch className="search"/> 
                 <RiPlayList2Fill />
              </div>
              <div className="header__button">
                  <button>Login</button> 
              </div>
           </div>
        </div>
    )
}

export default Header
