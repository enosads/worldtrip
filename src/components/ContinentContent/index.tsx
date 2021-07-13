import {Flex, Text, useBreakpointValue} from "@chakra-ui/react";
import {ContinentInfo} from "./ContinentInfo";

interface ContinentContentProps {
    longDescription: string,
    countryAmount: number,
    population: number,
    cities100Count: number
}

export function ContinentContent(
    {
        longDescription,
        countryAmount,
        population,
        cities100Count
    }: ContinentContentProps) {

    const isLg = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            gridGap='4.375rem'
            my={['1rem', '1rem', '3rem', '4rem']}
            padding='1rem'
            direction={isLg ? 'row' : 'column'}
        >
            <Text
                color="gray.700"
                textAlign="justify"
            >
                {longDescription}
            </Text>
            <Flex
                alignItems="center"
                justifyContent="space-evenly"
                gridGap='2.625rem'
            >
                <ContinentInfo label='países' value={countryAmount}/>
                <ContinentInfo label='população' value={population}/>
                <ContinentInfo
                    label='cidades +100'
                    value={cities100Count}
                    tooltip={'As cidades +100 são as cidades que estão entre as 100 cidades mais visitadas do mundo.'}/>
            </Flex>
        </Flex>
    )
}