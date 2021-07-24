import Link from 'next/link';
import headerStyles from '../styles/Header.module.scss';
export default function Header() {
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <Link href='/'>
                    <a>DJ Events</a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <a>
                                Events
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
