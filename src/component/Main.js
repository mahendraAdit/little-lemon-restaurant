import {
    Grid, GridItem,
    Heading, Text,
    Image, Button,
    Box,
    HStack,
    Card,
    useBreakpointValue
} from "@chakra-ui/react";

function Main() {
    const heroImg = '/assets/restaurantfood.jpg';
    const cardWidth = useBreakpointValue({ base: '100%', md: 'xs' });
    const columns = useBreakpointValue({ base: '1fr', md: '1fr 1fr' });
    const isDesktop = useBreakpointValue({ base: false, md: true });
    return (
        <>
            <Grid as={'main'} py={10} gap={10}>
                <GridItem as={'section'} bg={"#394C45"} maxH={'fit-content'}>
                    <Grid templateColumns={columns} p={10}>
                        <GridItem >
                            <Heading size={'3xl'} color={'#B5960F'}>
                                Little Lemon
                            </Heading>
                            <Text color={'white'} textStyle={'3xl'}>
                                Chicago
                            </Text>
                            <Text color={'white'} textStyle={'xl'} mt={5}>
                                We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twists.
                            </Text>
                            <Button mt={4} size={'xl'}>
                                Reserve a Table
                            </Button>
                        </GridItem>
                        <GridItem display={'flex'} alignItems={'center'} justifyContent={"center"}>
                            <Image src={heroImg} rounded={'xl'} alt="hero-image" h={450} />
                        </GridItem>
                    </Grid>


                </GridItem >

                <GridItem as={'section'} px={10}>

                    <HStack justify={'space-between'}>
                        <Text fontSize={'3xl'}>Our Special</Text>
                        <Button variant={'solid'}>See Menu</Button>
                    </HStack>
                    <HStack justify={'center'} wrap={isDesktop ? 'nowrap' : 'wrap'} gap={6}>
                        <Card.Root my={10} rounded={'xl'}>
                            <Image src={heroImg} alt="menu-item" maxH={'xs'} rounded={'xl'} />
                            <Card.Body w={'100%'}>
                                <Card.Title>Living room sofa</Card.Title>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam delectus consectetur libero itaque quibusdam dolore nisi minus quod in nulla eos ad excepturi, maxime et laboriosam quo praesentium. Temporibus.
                                </Card.Description>
                                <Text textStyle={'2xl'} fontWeight={'medium'} letterSpacing={'tight'} mt={2}>
                                    $20.99
                                </Text>
                            </Card.Body>
                        </Card.Root>
                        <Card.Root w={'100%,'} my={10} rounded={'xl'}>
                            <Image src={heroImg} alt="menu-item" maxH={'xs'} rounded={'xl'} />
                            <Card.Body w={'100%'}>
                                <Card.Title>Living room sofa</Card.Title>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam delectus consectetur libero itaque quibusdam dolore nisi minus quod in nulla eos ad excepturi, maxime et laboriosam quo praesentium. Temporibus.
                                </Card.Description>
                                <Text textStyle={'2xl'} fontWeight={'medium'} letterSpacing={'tight'} mt={2}>
                                    $15.99
                                </Text>
                            </Card.Body>

                        </Card.Root>
                        <Card.Root w={'100%,'} my={10} rounded={'xl'}>
                            <Image src={heroImg} alt="menu-item" maxH={'xs'} rounded={'xl'} />
                            <Card.Body w={'100%'}>
                                <Card.Title>Living room sofa</Card.Title>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam delectus consectetur libero itaque quibusdam dolore nisi minus quod in nulla eos ad excepturi, maxime et laboriosam quo praesentium. Temporibus.
                                </Card.Description>
                                <Text textStyle={'2xl'} fontWeight={'medium'} letterSpacing={'tight'} mt={2}>
                                    $29.99
                                </Text>
                            </Card.Body>
                        </Card.Root>



                    </HStack>

                </GridItem >
                <GridItem bg={'red'} px={10}>
                    <Heading>
                        About us
                    </Heading>
                </GridItem>

            </Grid >
        </ >
    )
}

export default Main;