import { Button, HStack, Text, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function NumberPicker({ onNumberChange }) {
    const [number, setNumber] = useState(2);

    const handleAdd = () => {
        setNumber((prev) => {
            const newNumber = prev + 1;
            return newNumber;
        });

    }
    const handleSubstract = () => {
        setNumber((prev) => {
            const newNumber = prev - 1;
            return newNumber;
        });
    }
    useEffect(() => {
        if (onNumberChange) {
            onNumberChange(number);
        }
    }, [number, onNumberChange]);

    return (
        <>
            <HStack>
                <IconButton variant={'subtle'} onClick={handleSubstract} size={'xs'} disabled={number <= 1}>
                    -
                </IconButton>
                <Text>
                    {number}
                </Text>
                <IconButton variant={'subtle'} onClick={handleAdd} size={'xs'} disabled={number >= 5}>
                    +
                </IconButton>
            </HStack>
        </>
    )
}
export default NumberPicker;