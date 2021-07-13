import {AppProps} from 'next/app';
import {theme} from "../styles/theme";
import {ChakraProvider} from '@chakra-ui/react'
import '../styles/globals.scss'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
