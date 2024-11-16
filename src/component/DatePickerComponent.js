import { Box, Button, IconButton, Popover, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import default datepicker styles
import { FaCalendar } from "react-icons/fa";

const DatePickerComponent = ({ onDateChange, required = false, onInvalid }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isInvalid, setIsInvalid] = useState(false);

    // Handle the date change and pass it to the parent
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsInvalid(false);
        if (onDateChange) {
            onDateChange(date); // Call the parent component's callback with the selected date
        }
    };
    // Format the selected date to be displayed as text (optional)
    const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : 'Select a date';
    const handleBlur = () => {
        if (required && !selectedDate) {
            setIsInvalid(true); // Set invalid state if the date is required but not selected
            if (onInvalid) {
                onInvalid('Date is required');
            }
        }
    };

    return (
        <>
            <DatePicker
                required={required}
                selected={selectedDate}
                onChange={handleDateChange}
                customInput={<Text fontWeight={'bold'}>{formattedDate}</Text>}
                dateFormat="MM/dd/yyyy"
                className='datePicker'
                onBlur={handleBlur}
            />
            {isInvalid && (
                <Text color="red.500" fontSize="sm">
                    Date is required
                </Text>
            )}
        </>
    )
};

export default DatePickerComponent;
