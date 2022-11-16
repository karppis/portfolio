import React from 'react'
import { Link } from "react-router-dom"
import styles from './navbar.module.scss';
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
        <Link to="/">   Home   </Link>&nbsp;
        <Link to="example">   Example Component   </Link>&nbsp;
        <Link to="first">   My First Component   </Link>&nbsp;
    </div>
  )
}

export default Navbar
