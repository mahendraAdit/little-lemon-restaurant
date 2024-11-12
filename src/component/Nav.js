import { Box, Grid, GridItem, HStack, Link, Group, Image } from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";

function Nav() {
    const imgSrc = '/assets/little-lemon-logo.svg';
    return (
        <Box as={'nav'} w={'100%'} py={3}>
            <HStack w={'auto'} justify="space-between">
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
            </HStack>
        </Box>
    )
}
export default Nav;