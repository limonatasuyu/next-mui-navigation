import '../styles/globals.css'
// idk what AppProps is for now 
import type { AppProps } from 'next/app'
import {ReactNode} from 'reacr'
import Layout from '../components/layout' 

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
