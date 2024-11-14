import {
    Box, HStack, Link, Group, Image, useDisclosure, useBreakpointValue, Flex, IconButton, Stack, Drawer, DrawerBody, DrawerContent, DrawerHeader, Button, DrawerRoot, DrawerBackdrop, DrawerTrigger, DrawerActionTrigger, DrawerTitle, DrawerFooter, DrawerCloseTrigger, VStack
} from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";
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
                    <Group gap={5}>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Menu</Link>
                        <Link>Reservations</Link>
                        <Link>Order Online</Link>
                        <Link>Login</Link>

                        <ColorModeButton />
                    </Group>
                </HStack>) : (

                <Flex as={'nav'} justify={'space-between'} align={'center'}>
                    <Image src={imgSrc} alt="logo" />
                    <HStack>
                        <DrawerRoot>
                            <DrawerBackdrop />
                            <DrawerTrigger asChild>
                                <Button variant="outline" size="sm">
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
                                        <Button w={'100%'} size={'xl'}>
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