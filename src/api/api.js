// src/api.js
const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export const fetchAPI = function (date) {
    if (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    } else {
        return {
            message: 'invalid request'
        }
    }

};

export const submitAPI = function (formData) {
    // console.log(`submitAPI called, received data: ${JSON.stringify(formData)}`)
    return {
        success: true,
        message: "Reservation submitted successfully",
        name: formData.name,
        payment: formData.payment,
        email: formData.email,
        location: formData.location,
        person: formData.person,
        date: formData.date,
        day: formData.day
        // data: formData
    }
};
