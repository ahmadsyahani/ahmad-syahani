import styles from './style.module.scss';
import Magnetic from '/src/common/Magnetic';

export default function index() {
  return (
    <div className={styles.footer}>
      <Magnetic>
        <div className={styles.el}>
          <a>Youtube</a>
          <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
          <a>Instagram</a>
          <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
          <a>Tiktok</a>
          <div className={styles.indicator}></div>
        </div>
      </Magnetic>
    </div>
  )
}
