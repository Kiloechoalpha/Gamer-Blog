import Link from "next/link";
import Logo from './logo';
import classes from './main-navigation.module.css'; 

function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href='/posts'>
              Posts
            </Link>
          </li>
          {/* Add more navigation links here if needed */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
