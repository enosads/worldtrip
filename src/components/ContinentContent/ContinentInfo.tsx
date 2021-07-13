import {Flex, Heading, Icon, Text, Tooltip} from "@chakra-ui/react";
import {RiInformationLine} from "react-icons/ri";

interface ContinentInfoProps {
    label: string,
    value: string | number,
    tooltip?: string
}

export function ContinentInfo({label, value, tooltip}: ContinentInfoProps) {
    return (
        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                {value}
            </Heading>
            <Flex
                align="center"
            >
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700" whiteSpace='nowrap'>
                    {label}
                </Text>
                {tooltip &&
                <Tooltip hasArrow label={tooltip} aria-label="A tooltip">
                    <span>
                        <Icon as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]}
                              h={["10px", "16px"]}/>
                    </span>
                </Tooltip>
                }
            </Flex>
        </Flex>
    )
}