import { Grid, GridItem, Heading, Span, VStack, Box, HStack, Button, Text, Badge } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import DatePickerComponent from "../component/DatePickerComponent";
import ReservationForm from "../component/ReservationForm";
import { fetchAPI, submitAPI } from '../api/api.js'
import { FaMapMarkerAlt, FaCalendarAlt, } from "react-icons/fa";
import { format } from 'date-fns';
import { IoPerson } from "react-icons/io5";
import NumberPicker from "../component/NumberPicker.js";

function Reservation() {
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [timeOptions, setTimeOptions] = useState([]);
    const [pax, setPax] = useState(2);

    const [availableTimes, setAvailableTimes] = useState([]);
    const [formData, setFormData] = useState({
        person: 2,
        date: new Date(),
        day: new Date().toLocaleDateString('en-US', { weekday: 'long' })

    });
    useEffect(() => {
        const arr = availableTimes.map((item, index) => ({
            id: index + 1,
            time: item,
            reservationDate: formData.date,
            person: pax,
            day: formData.date.toLocaleDateString('en-US', { weekday: 'long' })

        }));
        setTimeOptions(arr);
        console.log(`Updated available times: ${JSON.stringify(timeOptions)}`);

    }, [availableTimes]);

    const handleDateChange = (date) => {
        setFormData((prevData) => ({ ...prevData, date }));
    }

    const handleNumberChange = (number) => {
        setPax(number);
    }

    const handleReservationSelect = (id) => {
        if (selectedReservation === id) {
            setSelectedReservation(null);
        } else {
            setSelectedReservation(id);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submitted: ${formData.date}`);
        const times = fetchAPI(formData.date);
        setAvailableTimes(times);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <HStack p={5} rounded={'2xl'} shadow={'xl'} w={'fit-content'}>
                    <Box w={'50%'} colSpan={2} maxW={'20vw'}>
                        <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={2}
                        >
                            <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                <Span rounded={'full'} bg={'blue.200'} p={3}>
                                    <FaMapMarkerAlt />
                                </Span>

                            </GridItem>
                            <GridItem colSpan={4} display={'flex'} alignItems={'end'}>
                                <Text fontSize={'xs'} fontWeight={'bold'}>
                                    LOCATION
                                </Text>
                            </GridItem>
                            <GridItem colSpan={4} display={'flex'} alignItems={'center'}>
                                <Text fontSize={'lg'} fontWeight={'bold'}>
                                    CHICAGO
                                </Text>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box w={'50%'} colSpan={2} maxW={'20vw'}>
                        <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={2}
                        >
                            <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                <Span rounded={'full'} bg={'green.200'} p={3}>
                                    <FaCalendarAlt />
                                </Span>

                            </GridItem>
                            <GridItem colSpan={4} display={'flex'} alignItems={'end'}>
                                <Text fontSize={'xs'} fontWeight={'bold'}>
                                    DATE
                                </Text>
                            </GridItem>
                            <GridItem colSpan={4} display={'flex'} alignItems={'start'}>
                                <DatePickerComponent onDateChange={handleDateChange} />
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box w={'50%'} colSpan={2} maxW={'20vw'}>
                        <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={2}
                        >
                            <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                <Span rounded={'full'} bg={'green.200'} p={3}>
                                    <IoPerson />
                                </Span>

                            </GridItem>
                            <GridItem colSpan={4} display={'flex'} alignItems={'end'}>
                                <Text fontSize={'xs'} fontWeight={'bold'}>
                                    PERSON
                                </Text>
                            </GridItem>
                            <GridItem colSpan={4} display={'flex'} alignItems={'start'}>
                                <NumberPicker onNumberChange={handleNumberChange} />
                            </GridItem>
                        </Grid>
                    </Box>
                    <Button variant={"solid"} type="submit" >
                        Search
                    </Button>
                </HStack>
            </form>
            <Grid templateColumns={'repeat(4,1fr)'} mt={10} gap={5}>
                {timeOptions.map((index) => (
                    <GridItem key={index.id} colSpan={1}>
                        <Box bg={'blue.100'} w={'250'} h={'250'} p={5} rounded={'2xl'} opacity={selectedReservation && selectedReservation !== index.id ? 0.5 : 1}
                        >
                            <Heading size={'xl'} fontWeight={"bolder"}>
                                <HStack>
                                    {index.time}
                                    <Badge ml={'auto'}>
                                        Chicago
                                    </Badge>
                                </HStack>

                            </Heading>
                            <Text>
                                {index.day}
                            </Text>

                            <Text>
                                {format(new Date(index.reservationDate), 'MMMM do, yyyy')}
                            </Text>
                            <Text>
                                {index.person} pax
                            </Text>
                            <Button
                                onClick={() => handleReservationSelect(index.id)}
                                disabled={selectedReservation && selectedReservation !== index.id}
                                mt={4}
                            >
                                {selectedReservation === index.id ? "Selected" : "Choose"}
                            </Button>
                        </Box>
                    </GridItem>
                ))}
            </Grid>

        </>
    );
}
export default Reservation;