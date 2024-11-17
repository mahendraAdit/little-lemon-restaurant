import { useEffect, useState } from "react";
import { Button } from "../components/ui/button"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import { Heading, HStack, Image, Text, Box, Grid, GridItem } from "@chakra-ui/react";

function ReceiptDialog({ isOpen, onClose, data }) {
    const [finalData, setFinalData] = useState({});
    const imgSrc = '/assets/little-lemon-logo.svg';
    const [formattedDate, setFormattedDate] = useState([]);
    useEffect(() => {
        setFinalData(data);
        setFormattedDate(new Date(data.date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }));
    }, [data])
    if (!isOpen) return null;
    return (
        <DialogRoot motionPreset="slide-in-bottom" open={isOpen} closeOnEscape closeOnInteractOutside onOpenChange={onClose} size={'xl'}>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle >
                        <Image src={imgSrc} alt="company logo" />
                    </DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Heading size={'2xl'} fontWeight={'bolder'}>
                        Order Summary
                    </Heading>
                    <Text>
                        Thank you for your reservation.
                    </Text>
                    <Box mt={5}>
                        <Grid templateColumns={'repeat(2, 1fr)'} rowGap={5}>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'bold'} justifyContent={'end'} mr={5} h={'30px'} alignItems={'center'}>
                                <Text>
                                    Name:
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'light'} justifyContent={'start'} h={'30px'} alignItems={'center'}>
                                <Text>
                                    {data.name}
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'bold'} justifyContent={'end'} mr={5} h={'30px'} alignItems={'center'}>
                                <Text>
                                    Email:
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'light'} justifyContent={'start'} h={'30px'} alignItems={'center'}>
                                <Text>
                                    {data.email}
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'bold'} justifyContent={'end'} mr={5} h={'30px'} alignItems={'center'}>
                                <Text>
                                    Reservation date:
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'light'} justifyContent={'start'} h={'30px'} alignItems={'center'}>
                                <Text>
                                    {data.day}, {formattedDate}
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'bold'} justifyContent={'end'} mr={5} h={'30px'} alignItems={'center'}>
                                <Text>
                                    Reservation time:
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'light'} justifyContent={'start'} h={'30px'} alignItems={'center'}>
                                <Text>
                                    {data.time}
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'bold'} justifyContent={'end'} mr={5} h={'30px'} alignItems={'center'}>
                                <Text>
                                    Pax:
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'light'} justifyContent={'start'} h={'30px'} alignItems={'center'}>
                                <Text>
                                    {data.person}
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'bold'} justifyContent={'end'} mr={5} h={'30px'} alignItems={'center'}>
                                <Text>
                                    Payment:
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'light'} justifyContent={'start'} h={'30px'} alignItems={'center'}>
                                <Text>
                                    {data.payment}
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'bold'} justifyContent={'end'} mr={5} h={'30px'} alignItems={'center'}>
                                <Text>
                                    Location:
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'light'} justifyContent={'start'} h={'30px'} alignItems={'center'}>
                                <Text>
                                    @Little Lemon {data.location}
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'bold'} justifyContent={'end'} mr={5} h={'30px'} alignItems={'center'}>
                                <Text>
                                    Occasion:
                                </Text>
                            </GridItem>
                            <GridItem display={'flex'} fontSize={'md'} fontWeight={'light'} justifyContent={'start'} h={'30px'} alignItems={'center'}>
                                <Text>
                                    {data.occasion}
                                </Text>
                            </GridItem>

                        </Grid>
                    </Box>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild onClick={onClose}>
                        <Button variant="outline">Close</Button>
                    </DialogActionTrigger>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot >
    )
}
export default ReceiptDialog;
