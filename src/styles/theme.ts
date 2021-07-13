import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "700": "#47585B", //text-dark
            "500": "#999999", //info
            "400": "rgba(153, 153, 153, 0.5)", //info-alpha
            "300": "#DADADA", //info-light
            "100": "#F5F8FA" //text-light
        },
        yellow: {
            "400": "#FFBA08", // highlight
            "300": "rgba(255, 186, 8,0.5)" // highlight 50% alfa
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.700'
            }
        }
    }
})