import {
    Grid, GridItem,
    Heading, Text,
    Image, Button,
    Box,
    HStack,
    Card,
    useBreakpointValue,
    VStack,
    Group,
    Stack,
} from "@chakra-ui/react";
import {
    TimelineConnector,
    TimelineContent,
    TimelineDescription,
    TimelineIndicator,
    TimelineItem,
    TimelineRoot,
    TimelineTitle,
} from "../components/ui/timeline";
import { Link } from 'react-router-dom';


function Main() {
    const heroImg = '/assets/restaurantfood.jpg';
    const cardWidth = useBreakpointValue({ base: '100%', md: 'xs' });
    const columns = useBreakpointValue({ base: '1fr', md: '1fr 1fr' });
    const isDesktop = useBreakpointValue({ base: false, md: true });
    return (
        <>
            <Grid as={'main'} py={10} gap={10} >
                <GridItem as={'section'} bg={"#394C45"} maxH={'fit-content'}>
                    <Grid templateColumns={columns} p={10}>
                        <GridItem >
                            <Heading size={'4xl'} color={'#B5960F'}>
                                Little Lemon
                            </Heading>
                            <Text color={'white'} textStyle={'2xl'}>
                                Chicago
                            </Text>
                            <Text color={'white'} textStyle={'lg'} mt={5}>
                                We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twists.
                            </Text>
                            <Link to={'/reservation'}>
                                <Button variant={'solid'} size={'xl'}>
                                    Reservations
                                </Button>
                            </Link>
                        </GridItem>
                        <GridItem display={'flex'} alignItems={'center'} justifyContent={"center"} hidden={isDesktop ? false : true}>
                            <Image src={heroImg} rounded={'xl'} alt="hero-image" h={450} w={700} />
                        </GridItem>
                    </Grid>


                </GridItem >

                <GridItem as={'section'} px={10}>

                    <HStack justify={'space-between'}>
                        <Text fontSize={'3xl'}>Our Special</Text>
                        <Button variant={'solid'} bg={'#B5960F'}>
                            See Menu
                        </Button>
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
                <GridItem p={10}>
                    <HStack align={'start'} wrap={isDesktop ? 'nowrap' : 'wrap'}>
                        <Stack placeSelf={'center'}>
                            <Heading as={'h2'} size={'5xl'} display={'inline-block'}>
                                Our History
                            </Heading>
                            <Text>
                                Founded by the Vasquez family in 2005, Little Lemon began as a small neighborhood eatery, offering traditional Mediterranean dishes made with love and fresh local ingredients. Over the years, it has grown into a beloved local hotspot, where guests enjoy both iconic Mediterranean recipes and innovative twists on old classics.
                            </Text>
                        </Stack>
                        <TimelineRoot size="md" variant="outline">
                            <TimelineItem>
                                <TimelineContent flex="1" />
                                <TimelineConnector />
                                <TimelineContent flex="1">
                                    <TimelineTitle color={'#B5960F'} >
                                        2005 – The Beginning
                                    </TimelineTitle>
                                    <TimelineDescription>
                                        Little Lemon opens its doors in a small corner of the city
                                    </TimelineDescription>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineContent flex="1" alignItems="flex-end">
                                    <TimelineTitle color={'#B5960F'}>
                                        2007 - The First Expansion:
                                    </TimelineTitle>
                                    <TimelineDescription>
                                        Little Lemon expands to a larger location to accommodate growing demand,
                                    </TimelineDescription>
                                </TimelineContent>
                                <TimelineConnector />
                                <TimelineContent flex="1" />
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineContent flex="1" />
                                <TimelineConnector />
                                <TimelineContent flex="1">
                                    <TimelineTitle color={'#B5960F'}>
                                        2010 – Introducing Farm-to-Table
                                    </TimelineTitle>
                                    <TimelineDescription>
                                        Little Lemon begins sourcing ingredients directly from local farms
                                    </TimelineDescription>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineContent flex="1" alignItems="flex-end">
                                    <TimelineTitle color={'#B5960F'}>
                                        2013 – Launch of Online Ordering
                                    </TimelineTitle>
                                    <TimelineDescription>
                                        Little Lemon introduces an online ordering system
                                    </TimelineDescription>
                                </TimelineContent>
                                <TimelineConnector />
                                <TimelineContent flex="1" />
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineContent flex="1" />
                                <TimelineConnector />
                                <TimelineContent flex="1">
                                    <TimelineTitle color={'#B5960F'}>
                                        2015 – First Catering Event
                                    </TimelineTitle>
                                    <TimelineDescription>
                                        Little Lemon begins offering catering services for events
                                    </TimelineDescription>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineContent flex="1" alignItems="flex-end">
                                    <TimelineTitle color={'#B5960F'}>
                                        2018 – Recognized for Excellence
                                    </TimelineTitle>
                                    <TimelineDescription>
                                        Little Lemon receives multiple awards for best Mediterranean cuisine in the city
                                    </TimelineDescription>
                                </TimelineContent>
                                <TimelineConnector />
                                <TimelineContent flex="1" />
                            </TimelineItem><TimelineItem>
                                <TimelineContent flex="1" />
                                <TimelineConnector />
                                <TimelineContent flex="1">
                                    <TimelineTitle color={'#B5960F'}>
                                        2023 – Expanding the Brand:
                                    </TimelineTitle>
                                    <TimelineDescription>
                                        Little Lemon launches a second location, bringing its signature flavors to new communities.
                                    </TimelineDescription>
                                </TimelineContent>
                            </TimelineItem>

                        </TimelineRoot>


                    </HStack>
                </GridItem>

            </Grid >
        </ >
    )
}

export default Main;