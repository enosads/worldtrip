import {Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react";

type AtractionProps = {
    img: string;
    name: string;
}

export function Atraction({img, name}: AtractionProps) {
    const isMd = useBreakpointValue({
        base: false,
        md: true
    })
    return (
        <Stack
            direction={isMd ? 'column' : 'row'}
            align="center"
            justify='center'
        >
            {isMd ? <Image src={img} alt={name} width='85' height='85'/> :
                <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
            <Text fontWeight='600' fontSize='24'>{name}</Text>
        </Stack>
    );
}