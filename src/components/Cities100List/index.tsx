import {Flex, Heading, Image, SimpleGrid, Stack, Text, Wrap} from "@chakra-ui/react";

type City = {
    id: string,
    name: string,
    image: string,
    country: {
        name: string,
        image: string
    }
}

interface Cities100ListProps {
    cities: City[];
}

export function Cities100List({cities}: Cities100ListProps) {
    return (
        <Stack spacing='10'>
            <Heading
                fontWeight="500"
                fontSize={["2xl", "4xl"]}
            >
                Cidades +100
            </Heading>
            <Wrap spacing={'2rem'}  minChildWidth='256px' justify='space-evenly'>
                {cities.map(({image, name, country,id}) => {
                    return (
                        <Flex
                            key={id}
                            width='256px'
                            height='279px'
                            direction={'column'}
                        >
                            <Image
                                src={image}
                                alt={`${name}, ${country.name}`}
                                h="173px"
                                w="100%"
                                borderRadius=' 0.5rem  0.5rem 0 0'
                            />
                            <Flex
                                p="6"
                                align="center"
                                justify="space-between"
                                h='106px'
                                bg="white"
                                border="1px"
                                borderColor="yellow.300"
                                borderRadius='0 0 0.5rem  0.5rem'
                                borderTop="0"
                            >
                                <Flex direction="column">
                                    <Heading
                                        fontSize='1.25rem'
                                        fontWeight="600"
                                        fontFamily='Barlow, sans-serif'
                                    >
                                        {name}
                                    </Heading>
                                    <Text
                                        fontFamily='Barlow, sans-serif'
                                        mt="3"
                                        fontSize='1rem'
                                        color="gray.500"
                                        fontWeight="500"
                                    >
                                        {country.name}
                                    </Text>
                                </Flex>
                                <Image src={country.image} w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
                            </Flex>
                        </Flex>
                    );
                })}

            </Wrap>
        </Stack>
    )
}