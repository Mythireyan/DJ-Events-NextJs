import {FaExclamationTriangle} from 'react-icons/fa';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.scss';
export default function pageNotFound() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1 className={styles.message}>
                    <FaExclamationTriangle/>  <br/>
                     404 Page Not Found
                 </h1>
                <Link href='/'>
                    <a className={styles.link}>Go Back Home</a>
                </Link>
            </div>
        </Layout>
    )
}
