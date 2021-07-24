import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';

export default function Layout({title, description, keyword, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
                <meta name='keyword' content={keyword}></meta>
            </Head>
            <Header/>
            <div className={styles.container}>
                {children}
            </div>   
            <Footer/>   
        </div>
    )
}

Layout.defaultProps = {
    title:'DJ | Events Home',
    description:'DJ events application to check all events',
    keyword:'DJ event dance music'
}