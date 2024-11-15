import { Box, Button, IconButton, Popover, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import default datepicker styles
import { FaCalendar } from "react-icons/fa";

const DatePickerComponent = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Handle the date change and pass it to the parent
    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (onDateChange) {
            onDateChange(date); // Call the parent component's callback with the selected date
        }
    };
    // Format the selected date to be displayed as text (optional)
    const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : 'Select a date';

    return (
        <>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                customInput={<Text fontWeight={'bold'}>{formattedDate}</Text>}
                dateFormat="MM/dd/yyyy"
                className='datePicker'
            />
        </>
    )
};

export default DatePickerComponent;
