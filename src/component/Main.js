import { Grid, GridItem, Heading, Text, Image, Button } from "@chakra-ui/react";

function Main() {
    const heroImg = '/assets/restaurantfood.jpg';
    return (
        <Grid as={'main'} templateRows={'1fr 1fr 1fr'} h={100} py={10} >
            <GridItem as={'section'} rowSpan={1} bg={"#394C45"}>
                <Grid templateColumns={'1fr 1fr'} p={10}>
                    <GridItem >
                        <Heading size={'7xl'} color={'#B5960F'}>
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
                        <Image src={heroImg} rounded={'xl'} alt="hero-image" h={450} w={450} />
                    </GridItem>

                </Grid>


            </GridItem >

        </Grid >
    )
}

export default Main;