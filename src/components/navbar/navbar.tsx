import React from 'react'
import { Link } from "react-router-dom"
import styles from './navbar.module.scss';
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
        <Link to="/">Home</Link>
        <Link to="example">Example Component</Link>
        <Link to="first">My First Component</Link>
    </div>
  )
}

export default Navbar
