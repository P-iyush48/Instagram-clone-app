import { NavLink } from 'react-router';

import styles from './Vert_Navbar.module.css'; 

export default function Navbar() {

    return<nav>
        <div className={styles.insta_logo_contanier}>
            <i className="fa-brands fa-instagram" style={{color: "rgb(255, 255, 255)"}}></i>
        </div>
        <ul>
            <li>
                <NavLink to={'/h'}>
                    <i className="fa-solid fa-house icons fa-lg" style={{color: "rgb(255, 255, 255)"}}></i>
                </NavLink>

            </li>
            <li>
                <NavLink to={'/h/reels'}>
                <i className="fa-brands fa-youtube-shorts icons fa-lg" style={{color: "rgb(255, 255, 255)"}}></i>
            </NavLink>    
            </li>
            <li>
                <NavLink to={'/h/chats'}>
                    <i className="fa-brands fa-airbnb icons fa-lg" style={{color: "rgb(255, 255, 255)"}}></i>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/h/search'}>
                    <i className="fa-solid fa-magnifying-glass icons fa-lg" style={{color: "rgb(255, 255, 255)"}}></i>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/h/likes'}>
                    <i className="fa-regular fa-heart icons fa-lg" style={{color: "rgb(255, 255, 255)"}}></i>
                </NavLink>    
            </li>
            <li>
                <NavLink to={'/h/add'}>
                    <i className="fa-solid fa-plus icons fa-lg" style={{color: "rgb(255, 255, 255)"}}></i>
                </NavLink>
            </li>
            <li></li> 

            <div className={styles.bottom_icons}>
                <i className="fa-solid fa-bars fa-lg" style={{color: "rgb(255, 255, 255)"}}></i>
                <i className="fa-solid fa-network-wired fa-lg" style={{color:" rgb(255, 255, 255)"}}></i>
            </div>
        </ul>
    </nav>
}