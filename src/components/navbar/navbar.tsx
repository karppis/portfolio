import React from 'react'
import { Link } from "react-router-dom"
import style from './components/navbar/navbar.module.scss'
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={style.container}>
        <Link to="/">Home</Link>
        <Link to="example">Example Component</Link>
        <Link to="first">My First Component</Link>
    </div>
  )
}

export default Navbar
