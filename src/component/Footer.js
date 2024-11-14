import { Box, Grid, GridItem, Heading, HStack, Icon, Text, Link, VStack } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";


function Footer() {

    return (
        <>
            <Grid templateColumns={'repeat(3,1fr)'}>
                <GridItem >

                    <Heading size={'3xl'}>Little Lemon</Heading>
                    <Text fontSize={"md"}>
                        All rights reserved
                    </Text>
                    <HStack mt={3} gap={3}>
                        <Link>
                            <FaEnvelope />
                        </Link>
                        <Link>
                            <FaInstagram />
                        </Link>
                        <Link>
                            <FaYoutube />
                        </Link>
                        <Link>
                            <FaWhatsapp />
                        </Link>
                    </HStack>


                </GridItem>

                <GridItem display="flex" justifyContent={'space-between'} alignItems="center">
                    <HStack fontSize={'md'}>
                        <Link>Home</Link>
                        <Link>Menu</Link>
                        <Link>Reservations</Link>
                        <Link>Order online</Link>
                        <Link>Home</Link>
                    </HStack>
                </GridItem>
            </Grid >
        </>
    )
}

export default Footer;