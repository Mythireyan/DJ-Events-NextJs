import Head from 'next/head';
import layoutStyles from '../styles/Layout.module.css';

export default function Layout({title, description, keyword, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta description={description} keyword={keyword}></meta>
            </Head>
            <div className={layoutStyles.container}>
                {children}
            </div>
            
        </div>
    )
}

Layout.defaultProps = {
    title:'DJ | Events Home',
    description:'DJ events application to check all events',
    keyword:'DJ event dance music'
}