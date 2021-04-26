import styles from './styles.module.scss'

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import Link from 'next/link';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import DataUsageIcon from '@material-ui/icons/DataUsage';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return (
        <div>
            <header className={styles.headerContainer}>
                <p>Bem Vindo Daniel</p>
                <span>{currentDate}</span>
            </header>
                <div className={styles.sideNav}>
                <div className={styles.buttons}>
                <Link href="/">
                        <button>
                        <DataUsageIcon />
                        Dashboard
                        </button>
                    </Link>
                    <Link href="/search-customer">
                        <button>
                        <SearchIcon />
                        Buscar cliente
                        </button>
                    </Link>
                    <Link href="/create-customer">
                        <button>
                        <PersonAddIcon />
                        Cadastrar cliente
                        </button>
                    </Link>
                    <div className={styles.contentBox} />
                </div>
            </div>    
        </div>
    )
}