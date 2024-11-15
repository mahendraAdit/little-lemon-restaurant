import { Text, VStack, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api/api.js'
import DatePickerComponent from "./DatePickerComponent.js";


function ReservationForm() {
    const [datePicked, setDatePicked] = useState(false);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [result, setResult] = useState([]);
    const [formData, setFormData] = useState({
        date: null,
        name: '',
    });
    useEffect(() => {
        console.log(`Updated available times: ${availableTimes}`);
        console.log(`Updated results: ${JSON.stringify(result)}`);
    }, [availableTimes, result]);

    const handleDateChange = (date) => {
        setFormData((prevData) => ({ ...prevData, date }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = submitAPI(formData);
        const times = fetchAPI(formData.date);
        setAvailableTimes(times);
        setResult(res);

    };
    return (

        <form onSubmit={handleSubmit}>
            <VStack spacing={4} p={10}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Select Date:

                </label>
                <DatePickerComponent onDateChange={handleDateChange} />
                <Button type="submit" colorScheme="teal">
                    Submit
                </Button>
            </VStack>
        </form>
    );
};

export default ReservationForm;