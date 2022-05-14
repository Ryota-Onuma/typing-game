import styles from '@/styles/components/header.module.scss'
import Link from 'next/link'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>Typing Game</div>
      <div className={styles.headerRight}>
        <div className={styles.link}>
          <Link href='/'>Top</Link>{' '}
        </div>
        <div className={styles.link}>
          <Link href='/play'>Play</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
