import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from './product.module.css';

const Named = () => {
  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <div className={styles.title}>
        <div className={styles.col}>
          <p className={styles.l}>Don't Miss A Word!</p>
          <p className={styles.m}>
            An assistant in your hand who improved your work ability and quality
            of life! Finally, Your AI recording record manager is here.
          </p>
          <div className={styles.try}>
            <Link href="/api/login">
              <a className={styles.try}>Try Missage Free</a>
            </Link>
          </div>
        </div>
        <img
          className={styles.titleimg}
          src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0cdd6d87-f37f-460f-bd88-b6034206a853%2Fdocs.png?table=block&id=d09e70d6-a625-46ab-9fb0-8d3c204bf711&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2"
          alt=""
        />
      </div>
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#ffffff"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Named;
