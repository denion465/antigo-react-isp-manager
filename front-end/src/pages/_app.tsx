import { Header } from "../components/Header"
import "../styles/global.scss"


function MyApp({Component, pageProps}) {
    return (
        <div>
            <main>
                <Header />
                <Component {...pageProps} />
            </main>
            
        </div>

    )
}

export default MyApp