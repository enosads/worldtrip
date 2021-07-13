import {Heading} from "@chakra-ui/react";
import {Slider} from "./Slider";

type Continent = {
    id: string
    name: string;
    shortDescription: string;
    image: string;
}

interface CallToActionProps {
    continents: Continent[]
}

export function CallToAction({continents}: CallToActionProps) {
    return (
        <>
            <Heading
                textAlign="center"
                fontWeight="500"
                mt={["5", "10"]}
                fontSize={["1.25rem", "1.75rem", '2.25rem']}
                mx={8}
            >
                Vamos nessa?<br/>Então escolha seu continente
            </Heading>
            <Slider
              continents={continents}/>
        </>
    );
}