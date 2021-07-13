import {Wrap , useBreakpointValue} from "@chakra-ui/react";
import {Atraction} from "./Atraction";

export function AtractionsList() {


    return (
        <Wrap
            justify='space-evenly'
            mt={['36px', '36px', '80px']}
            mx='8'
        >
            <Atraction name='vida noturna' img='/images/icons/cocktail.svg'/>
            <Atraction name='praia' img='/images/icons/surf.svg'/>
            <Atraction name='moderno' img='/images/icons/building.svg'/>
            <Atraction name='clássico' img='/images/icons/museum.svg'/>
            <Atraction name='e mais...' img='/images/icons/earth.svg'/>
        </Wrap>
    );
}