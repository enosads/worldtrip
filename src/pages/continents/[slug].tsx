import {Box, Flex, Heading, Text, Center} from "@chakra-ui/react";
import {Header} from "../../components/Header";
import {GetStaticPaths, GetStaticProps} from "next";
import {fauna} from "../../services/faunadb";
import {query as q} from "faunadb";
import {ContinentBanner} from "../../components/ContinentBanner";
import {ContinentContent} from "../../components/ContinentContent";

interface ContinentProps {
    continent: {
        image: string,
        name: string,
        longDescription: string,
        countryAmount: number,
        population: number,
        cities100: []
    }
}

export default function Continent({continent}: ContinentProps) {
    return (
        <Flex direction="column">
            <Header/>
            <ContinentBanner image={continent.image} name={continent.name}/>
            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
                <ContinentContent
                    cities100Count={continent.cities100.length}
                    countryAmount={continent.countryAmount}
                    longDescription={continent.longDescription}
                    population={continent.population}
                />
            </Flex>
            {JSON.stringify(continent.cities100)}
        </Flex>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            {params: {slug: 'america-do-sul'}},
            {params: {slug: 'america-do-norte'}},
            {params: {slug: 'africa'}},
            {params: {slug: 'oceania'}},
            {params: {slug: 'asia'}},
            {params: {slug: 'europa'}},
        ],
        fallback: false
    }
};


export const getStaticProps: GetStaticProps = async (context,) => {
    const {slug} = context.params;
    const continentQuery = await fauna.query<any>(
        q.Get(
            q.Match(
                q.Index('continent_by_id'),
                q.Casefold(slug)
            )
        )
    );
    const continent = {
        id: continentQuery.data.id,
        name: continentQuery.data.name,
        longDescription: continentQuery.data.long_description,
        image: continentQuery.data.image ?? "",
        countryAmount: continentQuery.data.country_amount,
        population: continentQuery.data.population,
        cities100: await Promise.all(continentQuery.data.cities100.map(cityRef => {
            return fauna.query<any>(q.Get(cityRef)).then(async city => {
                return {
                    id: city.ref.id,
                    name: city.data.name,
                    image: city.data.image,
                    country: await fauna.query<any>(q.Get(city.data.country)).then(country => {
                        return {
                            name: country.data.name,
                            image: country.data.image
                        }
                    })
                }
            })
        }))
    }

    return {
        props: {
            continent
        },
        revalidate: 60 * 60 * 24 // 24 hours
    }
}