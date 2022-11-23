import styles from './Cv.module.scss'
import React from 'react'
type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <head>
      </head>
      <body> 
        <img src="Capture.PNG" alt='' width="350" height="500"></img>
        <p>Open as <a href="https://eduvantaa-my.sharepoint.com/:b:/g/personal/samu_karppinen_opp_eduvantaa_fi/ES7iRvKqW1ZBubuCiQ1d9RgBCORui5M9usP8k_PoVo3Iew">PDF</a></p>
      </body>
      
    </div>
  )
}



export default Cv
