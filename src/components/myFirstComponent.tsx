import React from 'react'
import style from './myFirstComponent.module.scss'

type MyFirstComponentProps = {

}

const MyFirstComponent: React.FC<MyFirstComponentProps> = () => {
  return (
    <div className={style.div}>
      <h1>Samu Karppinen</h1>
      <p>titteli tähän</p>
      <body></body>
    </div>
  )
}

export default MyFirstComponent