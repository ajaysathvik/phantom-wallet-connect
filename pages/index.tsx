
import type { NextPage } from 'next'
import { AppBar } from '../components/AppBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <AppBar />
      
    </div>
  )
}

export default Home
