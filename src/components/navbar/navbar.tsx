import React from 'react'
import { Link } from "react-router-dom"
import styles from './navbar.module.scss';
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <a>
        <Link to="/">   About Me   </Link>&nbsp;
        <Link to="Cv">   CV   </Link>&nbsp;
        <Link to="Projects">   Projects   </Link>&nbsp;
        </a>
    </div>
  )
}

export default Navbar
