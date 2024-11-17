
import React, { useState, useEffect } from 'react';
import { createListCollection } from "@chakra-ui/react";
import { Avatar } from "../components/ui/avatar"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "../components/ui/select";


function OccasionPicker({ id, onSelectChange }) {
    const [selectedValue, setValue] = useState()
    const occasions = createListCollection({
        items: [
            { label: "Casual dine", value: "casual" },
            { label: "Formal dine", value: "formal" },
            { label: "Birthday", value: "birthday" },
            { label: "Wedding", value: "wedding" },
        ],
    })


    useEffect(() => {
        // if (selectedValue) {
        //     console.log(`Value updated: ${selectedValue}`);
        // }
    }, [selectedValue]);

    const handleSelect = (item) => {
        const selected = item.value;
        setValue(selected);
        if (onSelectChange) {
            onSelectChange({ target: { name: id, value: selected } }); // Pass to parent
        }
    };



    return (
        <SelectRoot
            collection={occasions}
            width="320px"
            onValueChange={handleSelect}
            value={selectedValue}
        >
            <SelectTrigger>
                <SelectValueText placeholder="Select occasion" />
            </SelectTrigger>
            <SelectContent>
                {occasions.items.map((i) => (
                    <SelectItem item={i} key={i.value}>
                        {i.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}


export default OccasionPicker;