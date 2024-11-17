import {
    Grid, GridItem, Heading,
    Span, VStack, Box, HStack,
    Button, Text, Badge, Input,
    For, useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from 'react';
import DatePickerComponent from "../component/DatePickerComponent";
import { fetchAPI, submitAPI } from '../api/api.js'
import { FaMapMarkerAlt, FaCalendarAlt, FaIdCardAlt, FaDollarSign } from "react-icons/fa";
import { format } from 'date-fns';
import { IoPerson } from "react-icons/io5";
import NumberPicker from "../component/NumberPicker.js";
import { Radio, RadioGroup } from "../components/ui/radio"
import { MdEmail } from "react-icons/md";
import { useFormik, Formik } from "formik";
import OccasionPicker from "../component/OccasionPicker.js";
import ReceiptDialog from "../component/ReceiptDialog.js";


function Reservation() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [validSchedule, setValidSchedule] = useState(false);
    const [timeOptions, setTimeOptions] = useState([]);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [pax, setPax] = useState(2);
    const isDesktop = useBreakpointValue({ base: false, md: true });

    const selectDateRef = useRef(null);
    const scheduleRef = useRef(null);
    const personalInfoRef = useRef(null);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            payment: 'cash',
            location: 'Chicago',
            occasion: 'Meeting'
        },
        onSubmit: (values, { resetForm }) => {

            const finalData = { ...scheduleFormData, ...values };
            setFinalFormData(finalData);
            const res = submitAPI(finalData);
            setResponse(res);

            setAvailableTimes([]);
            setSelectedReservation(null);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            handleOpenDialog();

        },
        // validationSchema: Yup.object().shape({
        //     firstName: Yup.string().required().min(3),
        //     email: Yup.string().required().email(),
        //     type: Yup.string().required(),
        //     comment: Yup.string().required().min(25)
        // }),
    });


    const [availableTimes, setAvailableTimes] = useState([]);
    const [scheduleFormData, setScheduleFormData] = useState({
        person: '',
        date: new Date(),
        day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        time: ''

    });
    const [finalFormData, setFinalFormData] = useState({
    });

    useEffect(() => {
        const arr = availableTimes.map((item, index) => ({
            id: index + 1,
            time: item,
            reservationDate: scheduleFormData.date,
            person: pax,
            day: scheduleFormData.date.toLocaleDateString('en-US', { weekday: 'long' })

        }));
        setTimeOptions(arr);
        setValidSchedule(!validSchedule)
        formik.resetForm();

    }, [availableTimes, response]);

    useEffect(() => {
        if (selectedReservation) {
            personalInfoRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [selectedReservation]);
    useEffect(() => {
        // console.log(`isDialogOpen: ${isDialogOpen}`)
    }, [isDialogOpen]);

    const handleDateChange = (selectedDate) => {
        setScheduleFormData((prevData) => ({
            ...prevData,
            date: selectedDate,
            day: selectedDate.toLocaleDateString('en-US', { weekday: 'long' })
        }));
        setError(null);
    }

    const handleNumberChange = (person) => {
        setScheduleFormData((prevData) => ({ ...prevData, person }));
        setPax(person);
    }

    const handleReservationSelect = (id, val) => {

        if (selectedReservation === id) {
            setSelectedReservation(null);

        } else {
            setScheduleFormData((prevData) => ({ ...prevData, time: val.time }))
            setSelectedReservation(id);
        }


    };

    const handleScheduleSubmit = (e) => {

        e.preventDefault();
        const times = fetchAPI(scheduleFormData.date);
        setAvailableTimes(times);
        scheduleRef.current.scrollIntoView({ behavior: "smooth" });

    };

    return (

        <>
            <ReceiptDialog isOpen={isDialogOpen} onClose={handleCloseDialog} data={finalFormData} />
            <HStack p={3} my={2} rounded={'2xl'} shadow={'md'} w={'fit-content'} h={'50px'} ref={selectDateRef}>
                <Span rounded={'full'} bg={'yellow.200'} >
                    <Text fontWeight={'bolder'} _dark={{ color: "black" }}>
                        1
                    </Text>
                </Span>
                <Text>
                    Select date & pax
                </Text>

            </HStack>
            <form onSubmit={handleScheduleSubmit}>
                <HStack p={5} rounded={'2xl'} shadow={'xl'} w={'fit-content'} wrap={{ base: 'wrap', md: 'nowrap' }}>
                    <Box w={{ base: '100%', md: '50%' }} maxW={{ base: '100%', md: 'fit-content' }}>
                        <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={2}
                        >
                            <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                <Span rounded={'full'} bg={'blue.200'} p={3} _dark={{ color: 'black' }}>
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

                    <Box w={{ base: '100%', md: '50%' }} maxW={{ base: '100%', md: 'fit-content' }} >
                        <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={2}
                        >
                            <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                <Span rounded={'full'} bg={'green.200'} p={3} _dark={{ color: 'black' }}>
                                    <FaCalendarAlt />
                                </Span>

                            </GridItem>
                            <GridItem colSpan={4} display={'flex'} alignItems={'end'}>
                                <Text fontSize={'xs'} fontWeight={'bold'}>
                                    DATE
                                </Text>
                            </GridItem>
                            <GridItem colSpan={4} display={'flex'} alignItems={'start'}>
                                <DatePickerComponent onDateChange={handleDateChange} required={true}
                                    onInvalid={(message) => setError('message')} />
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box w={{ base: '100%', md: '50%' }} maxW={{ base: '100%', md: 'fit-content' }}>
                        <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={2}
                        >
                            <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                <Span rounded={'full'} bg={'yellow.200'} p={3} _dark={{ color: 'black' }}>
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

                    <Button variant={"solid"} type="submit" w={{ base: '100%', md: 'fit-content' }} size={{ base: 'xl', md: 'md' }} mt={{ base: 5, md: 0 }}>
                        Search
                    </Button>
                </HStack>
            </form >
            {
                timeOptions.length > 0 && (
                    <HStack p={3} mt={10} rounded={'2xl'} shadow={'md'} w={'fit-content'} h={'50px'}>
                        <Span rounded={'full'} bg={'yellow.200'} >
                            <Text fontWeight={'bolder'} _dark={{ color: 'black' }}>
                                2
                            </Text>
                        </Span>
                        <Text>
                            Select a schedule
                        </Text>
                    </HStack>
                )
            }
            < Grid templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(5,1fr)' }} mt={3} gap={3} flex={'flex'} ref={scheduleRef}>

                {
                    timeOptions.map((index) => (
                        <GridItem key={index.id} colSpan={1}>
                            <Box bg={'#F8F4E3'} _dark={{ bg: '#333333' }} w={'250'} h={'250'} p={5} rounded={'2xl'} opacity={selectedReservation && selectedReservation !== index.id ? 0.5 : 1}
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
                                    onClick={() => {
                                        handleReservationSelect(index.id, index)
                                    }}
                                    disabled={selectedReservation && selectedReservation !== index.id}
                                    mt={4}

                                >
                                    {selectedReservation === index.id ? "Selected" : "Choose"}
                                </Button>
                            </Box>
                        </GridItem>
                    ))
                }
            </Grid >
            <HStack p={3} my={2} rounded={'2xl'} shadow={'md'} w={'fit-content'} h={'50px'} hidden={selectedReservation ? false : true}>
                <Span rounded={'full'} bg={'yellow.200'} >
                    <Text fontWeight={'bolder'}>
                        3
                    </Text>
                </Span>
                <Text>
                    Personal Information
                </Text>

            </HStack>
            <form onSubmit={formik.handleSubmit} hidden={selectedReservation ? false : true} >
                <Grid ref={personalInfoRef}>
                    <HStack p={5} rounded={'2xl'} shadow={'xl'} w={'fit-content'} wrap={{ base: 'wrap', lg: 'nowrap' }}>
                        <Box w={{ base: '100%', md: '50%' }} maxW={{ base: '100%', md: 'fit-content' }} >
                            <Grid
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                gap={2}
                            >
                                <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                    <Span rounded={'full'} bg={'red.200'} p={3} _dark={{ color: 'black' }}>
                                        <FaIdCardAlt />
                                    </Span>

                                </GridItem>
                                <GridItem colSpan={4} display={'flex'} alignItems={'end'}>
                                    <Text fontSize={'xs'} fontWeight={'bold'}>
                                        NAME*
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={4} display={'flex'} alignItems={'start'}>
                                    <Input placeholder="John Doe" required onChange={formik.handleChange} onBlur={formik.handleBlur} id='name' name="name" value={formik.values.name} />
                                </GridItem>
                            </Grid>
                        </Box>

                        <Box w={{ base: '100%', md: '50%' }} maxW={{ base: '100%', md: 'fit-content' }}>
                            <Grid
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                gap={2}
                            >
                                <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                    <Span rounded={'full'} bg={'green.200'} p={3} _dark={{ color: 'black' }}>
                                        <MdEmail />
                                    </Span>

                                </GridItem>
                                <GridItem colSpan={4} display={'flex'} alignItems={'end'}>
                                    <Text fontSize={'xs'} fontWeight={'bold'}>
                                        EMAIL*
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={4} display={'flex'} alignItems={'start'}>
                                    <Input placeholder="johnDoe@example.com" required type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" name="email" value={formik.values.email} />
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box w={{ base: '100%', md: '50%' }} maxW={{ base: '100%', md: 'fit-content' }}>
                            <Grid
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                gap={2}
                            >
                                <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                    <Span rounded={'full'} bg={'green.200'} p={3} _dark={{ color: 'black' }}>
                                        <FaDollarSign />
                                    </Span>

                                </GridItem>
                                <GridItem colSpan={4} display={'flex'} alignItems={'end'}>
                                    <Text fontSize={'xs'} fontWeight={'bold'}>
                                        PAYMENT
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={4} display={'flex'} alignItems={'start'} w={'fit-content'}>
                                    <RadioGroup defaultValue="cash" w={'fit-content'} size={'md'} onChange={formik.handleChange} value={formik.values.payment} id="payment" name="payment">
                                        <HStack gap="4" wrap={"nowrap"}>
                                            <Radio value="cash">Cash</Radio>
                                            <Radio value="card">Card</Radio>
                                        </HStack>
                                    </RadioGroup>

                                </GridItem>

                            </Grid>

                        </Box>
                        <Box w={{ base: '100%', md: '50%' }} maxW={{ base: '100%', md: 'fit-content' }} >
                            <Grid
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                gap={2}
                            >
                                <GridItem rowSpan={2} colSpan={1} display={'flex'} justifyContent={'end'} alignItems={'center'} mr={2}>
                                    <Span rounded={'full'} bg={'green.200'} p={3} _dark={{ color: 'black' }}>
                                        <FaCalendarAlt />
                                    </Span>

                                </GridItem>
                                <GridItem colSpan={4} display={'flex'} alignItems={'end'}>
                                    <Text fontSize={'xs'} fontWeight={'bold'}>
                                        OCCASION
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={4} display={'flex'} alignItems={'start'} w={{ base: '100%', lg: '10vw' }}>
                                    <OccasionPicker onSelectChange={formik.handleChange} id={'occasion'} />
                                </GridItem>
                            </Grid>
                        </Box>
                        <Button variant={"solid"} type="submit" w={{ base: '100%', lg: 'fit-content' }} size={{ base: 'xl', lg: 'md' }} mt={{ base: 5, md: 0 }}>
                            Order
                        </Button>
                    </HStack>
                </Grid>

            </form >



        </>
    );
}
export default Reservation;