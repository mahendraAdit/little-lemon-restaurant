import {
    Box, HStack, Group, Image, useDisclosure, useBreakpointValue, Flex, IconButton, Stack, Drawer, DrawerBody, DrawerContent, DrawerHeader, Button, DrawerRoot, DrawerBackdrop, DrawerTrigger, DrawerActionTrigger, DrawerTitle, DrawerFooter, DrawerCloseTrigger, VStack
} from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";
import { Link } from 'react-router-dom';
function Nav() {
    const imgSrc = '/assets/little-lemon-logo.svg';
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Box as={'nav'} py={3}>
            {isDesktop ? (
                <HStack w={'auto'} justify="space-between" align={'center'}>
                    <HStack spacing={4}>
                        <a href="#">
                            <Image src={imgSrc} alt="logo" />
                        </a>
                    </HStack>
                    <Group gap={1}>
                        <Link to={'/'}>
                            <Button variant={'ghost'}>
                                Home
                            </Button>
                        </Link>
                        <Link to={'/'}>
                            <Button variant={'ghost'}>
                                Menu
                            </Button>
                        </Link>
                        <Link to={'/reservation'}>
                            <Button variant={'ghost'}>
                                Reservations
                            </Button>
                        </Link>
                        <Link to={'/reservation'}>
                            <Button variant={'ghost'}>
                                Order Online
                            </Button>
                        </Link>
                        <Link to={'/'}>
                            <Button variant={'solid'} bg={'#B5960F'}>
                                Login
                            </Button>
                        </Link>

                        <ColorModeButton />
                    </Group>
                </HStack>) : (

                <Flex as={'nav'} justify={'space-between'} align={'center'}>
                    <Image src={imgSrc} alt="logo" />
                    <HStack>
                        <DrawerRoot>
                            <DrawerBackdrop />
                            <DrawerTrigger asChild>
                                <Button variant="outline" size="sm" _dark={{ bg: '#B5960F' }} bg='#394C45' color={'white'}>
                                    Menu
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent position={'fixed'} top={0} minH={'40vh'} right={0} >
                                <DrawerHeader >
                                    <HStack display={'flex'} justify={'space-between'}>
                                        <DrawerTitle>
                                            <Image src={imgSrc} alt="logo" />
                                        </DrawerTitle>
                                        <DrawerActionTrigger>
                                            <Button variant="outline">Close</Button>
                                        </DrawerActionTrigger>
                                    </HStack>

                                </DrawerHeader>
                                <DrawerBody>
                                    <VStack gap={3}>

                                        <Button w={'100%'} size={'xl'} variant={'subtle'}>
                                            Home
                                        </Button>
                                        <Button w={'100%'} size={'xl'} variant={'subtle'}>
                                            Menu
                                        </Button>

                                        <Button w={'100%'} size={'xl'} variant={'subtle'}>
                                            Reservations
                                        </Button>

                                        <Button w={'100%'} size={'xl'} variant={'subtle'}>
                                            Order Online
                                        </Button>
                                        <Button w={'100%'} size={'xl'} >
                                            Login
                                        </Button>
                                    </VStack>

                                </DrawerBody>
                                {/* <DrawerFooter>
                                <DrawerActionTrigger>
                                    <Button variant="outline">Close</Button>
                                </DrawerActionTrigger>

                            </DrawerFooter> */}
                                <DrawerCloseTrigger />
                            </DrawerContent>

                        </DrawerRoot>
                        <ColorModeButton />
                    </HStack>

                </Flex>
            )
            }

        </Box >
    )
}


export default Nav;