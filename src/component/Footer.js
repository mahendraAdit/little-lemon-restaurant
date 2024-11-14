import {
    Box, Grid, GridItem, Heading,
    HStack, Icon, Text, Link,
    VStack, Image, useBreakpointValue,
    Button
} from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaFacebookF } from "react-icons/fa";


function Footer() {
    const imgSrc = '/assets/little-lemon-logo.svg';
    const isDesktop = useBreakpointValue({ base: false, md: true });
    return (
        <>
            {isDesktop ? (<Grid templateColumns={'1fr 2fr 1fr'}>
                <GridItem p={3}>
                    <Image src={imgSrc} alt="logo" />
                    <Text fontSize={'xl'}>Little Lemon Restaurant</Text>

                    <Text fontSize={"xs"}>
                        All rights reserved
                    </Text>

                </GridItem>

                <GridItem p={3} display={'flex'} justifyContent={'center'}>
                    <HStack justifyContent={'center'} gap={5}>
                        <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                            <FaFacebookF />
                        </Button>
                        <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                            <FaInstagram />
                        </Button>
                        <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                            <FaWhatsapp />
                        </Button>
                        <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                            <FaEnvelope />
                        </Button>
                        <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                            <FaYoutube />
                        </Button>
                    </HStack>
                </GridItem>
                <GridItem p={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <HStack fontSize={'md'} gap={5}>
                        <Link>Home</Link>
                        <Link>Menu</Link>
                        <Link>Reservations</Link>
                        <Link>Order</Link>
                        <Link>Home</Link>
                    </HStack>
                </GridItem>
            </Grid >)
                : (
                    <Grid templateRows={'1fr 1fr'}>
                        < GridItem >

                            <HStack justifyContent={'center'} gap={5}>
                                <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                                    <FaFacebookF />
                                </Button>
                                <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                                    <FaInstagram />
                                </Button>
                                <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                                    <FaWhatsapp />
                                </Button>
                                <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                                    <FaEnvelope />
                                </Button>
                                <Button variant={'outline'} borderRadius={'full'} size={'xl'} p={0}>
                                    <FaYoutube />
                                </Button>
                            </HStack>
                        </ GridItem>
                        <GridItem mt={5}>
                            <HStack justifyContent={'center'} gap={5}>
                                <Link>
                                    Home
                                </Link>
                                <Link>
                                    About
                                </Link>
                                <Link>
                                    Reservations
                                </Link>
                                <Link>
                                    Order Online
                                </Link>
                            </HStack>
                        </GridItem>
                        <GridItem display={'flex'} justifyContent={'center'} my={5} alignItems={'end'}>
                            <Image src={imgSrc} />
                        </GridItem>

                    </Grid >
                )
            }

        </>
    )
}

export default Footer;