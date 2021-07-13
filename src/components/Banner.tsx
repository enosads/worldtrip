import {Box, Flex, Heading, Text, Image} from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
            width='100%'
            bgImage="/images/banner.jpg"
            h={["163px", "250px", "250px", "335px"]}
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            bgSize="cover"
        >
            <Flex
                justify={['center', 'space-evenly']}
                align="center"
                width='100%'
                mx='auto'
                px={["4", "10", "15", "20", "36"]}
            >
                <Flex
                    p='6'
                    direction='column'
                    justify='center'
                >
                    <Heading
                        color='gray.100'
                        fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
                        fontWeight='500'
                    >
                        5 Continentes, infinitas possibilidades.
                    </Heading>
                    <Text
                        color="gray.300"
                        mt='3'
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Flex>
                <Image
                    src="/images/airplane.svg"
                    alt="Avião amarelo voando com algumas nuvens ao redor."
                    transform="translateY(8px)"
                    mt='100'
                    display={['none', 'none', 'block']}
                    ml='8'
                    w={["300px","300px","375px","430px", "550px"]}
                />
            </Flex>
        </Flex>
    );
}