import { AppProps } from "next/dist/next-server/lib/router/router"
import { Header } from "../components/Header"
import "../styles/global.scss"


function MyApp({Component, pageProps}: AppProps) {
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