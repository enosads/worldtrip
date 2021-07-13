import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import {Flex} from "@chakra-ui/react";
import {AtractionsList} from "../components/AttractionsList";
import {Divider} from "../components/Divider";
import {CallToAction} from "../components/CallToAction";
import {GetStaticProps} from "next";
import {fauna} from "../services/faunadb";
import {query as q} from "faunadb"

type Continent = {
    id: string;
    name: string;
    shortDescription: string;
    image: string;
}

interface HomeProps {
    continents: Continent[]
}

export default function Home({continents}: HomeProps) {
    return (
        <Flex direction="column">
            <Header/>
            <Banner/>
            <AtractionsList/>
            <Divider/>
            <CallToAction continents={continents}/>
        </Flex>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const continentsQuery = await fauna.query<any>(
        q.Map(
            q.Paginate(
                q.Documents(
                    q.Collection('continents')
                )
            ),
            q.Lambda(
                x => q.Get(x)
            )
        )
    );
    const continents = continentsQuery.data.map(continent => {
        return {
            id: continent.data.id,
            name: continent.data.name,
            shortDescription: continent.data.short_description,
            image: continent.data.image ?? ""
        }
    });
    return {
        props: {
            continents
        },
        revalidate: 60 * 60 * 24 // 24 hours
    }
}