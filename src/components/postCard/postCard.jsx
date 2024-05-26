import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/1095817/pexels-photo-1095817.jpeg?cs=srgb&dl=pexels-markburnett-1095817.jpg&fm=jpg"  alt='post' fill className={styles.img}/>
        </div>
        <span className={styles.date}>2024.05.20</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
        It is a long established fact that a 
        reader will be distracted by the readable
        content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has 
        a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', 
        making it look like readable English. Many desktop 
        publishing packages and web page editors now use 
        Lorem Ipsum as their default model text, and a 
        search for 'lorem ipsum' will uncover many web sites
        still in their infancy. 
        </p>
        <Link className={styles.link} href='/blog/post'>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard
