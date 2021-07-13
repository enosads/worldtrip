import {Box, Center, Flex, Grid, Icon, Image,} from "@chakra-ui/react";
import Link from 'next/link';
import {useRouter} from "next/router";
import {RiArrowLeftSLine} from 'react-icons/ri';

export function Header() {
    const {asPath} = useRouter()
    const notHomePage = asPath !== '/'

    return (
        <Flex
            w="100%" as="header" mx="auto" px="1rem" h={["50px","100px"]} align="center" justify="center"
        >
           <Grid
               h="100%"
               mx="auto"
               w="100%"
               maxW="1160px"
               alignItems="center"
               templateColumns="repeat(3, 1fr)"
               justifyContent="center"
               alignSelf="start"
           >
               {notHomePage && (
                   <Link href="/">
                       <a>
                           <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start"/>
                       </a>
                   </Link>
               )}
               <Image
                   src="/images/logo.svg"
                   alt="World Trip"
                   align="center"
                   display="absolute"
                   gridColumn="2"
                   justifySelf="center"
               />
           </Grid>
        </Flex>
    )
}