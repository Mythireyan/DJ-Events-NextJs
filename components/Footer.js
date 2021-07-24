import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>Copyright &copy; DJ Events 2021</p>
            <p>
                <Link href='/about'>
                    <a style={{color:'rgb(54, 142, 249)'}}> About This Project </a>
                </Link>
            </p>
        </div>
    )
}
