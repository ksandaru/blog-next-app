import Image from "next/image"
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Agency</h2>
        <h1 className={styles.subtitle}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.description}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.card}>
            <h1>234 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.card}>
            <h1>5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>

      </div>
      <div className={styles.imgContainer}>
      <Image src="/about.png" 
        className={styles.image}
        alt="about image" fill />
      </div>
    </div>
  )
}

export default About
