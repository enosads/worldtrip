import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import 'swiper/components/navigation/navigation.min.css';
import {Flex, Heading, Text} from "@chakra-ui/react";
import Link from 'next/link';

SwiperCore.use([Pagination, Navigation]);


type Continent = {
    id: string,
    name: string;
    shortDescription: string;
    image: string;
}

interface SliderProps {
    continents: Continent[]
}

export function Slider({continents}: SliderProps) {
    return (
        <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]} mt={["0", "10"]} p={8}>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{
                    "clickable": true,
                }}
                autoplay={{
                    delay: 4000,
                }}
                style={{width: '100%', flex: '1'}}
            >
                {continents.map(continent => {
                    return (
                        <SwiperSlide key={continent.id}>
                            <Flex
                                h="100%"
                                align="center"
                                justify="center"
                                direction="column"
                                bgImage={continent.image ?? null}
                                bgPosition="70% 50%"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                textAlign="center"
                            >
                                <Link href={`/continents/${continent.id}`}>
                                    <a>
                                        <Heading fontSize={["1.25rem", "1.75rem", '2.25rem']} color="gray.100"
                                                 fontWeight="bold">{continent.name}</Heading>
                                        <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]}
                                              mt={["2", "4"]}>{continent.shortDescription}</Text>
                                    </a>
                                </Link>
                            </Flex>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Flex>
    );
}