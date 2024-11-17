import { Box, Button, IconButton, Popover, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import default datepicker styles
import { FaCalendar } from "react-icons/fa";

const DatePickerComponent = ({ onDateChange, required = false, onInvalid }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isInvalid, setIsInvalid] = useState(false);


    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsInvalid(false);
        if (onDateChange) {
            onDateChange(date);
        }
    };

    const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : 'SELECT A DATE';
    const handleBlur = () => {
        if (required && !selectedDate) {
            setIsInvalid(true);
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
