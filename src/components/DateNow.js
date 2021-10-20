import React, {useState, useEffect} from "react";

export default function DateNow() {
    const [dateNow, setDateNow] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDateNow(new Date())
        }, 1000);

    }, []);

    const getTime = () => {
        const hours = (dateNow.getHours() < 10) ? '0' + dateNow.getHours() : dateNow.getHours();
        const minutes = (dateNow.getMinutes() < 10) ? '0' + dateNow.getMinutes() : dateNow.getMinutes();
        const seconds = (dateNow.getSeconds() < 10) ? '0' + dateNow.getSeconds() : dateNow.getSeconds();
        return [hours + ':' + minutes + ':' + seconds]
    };

    const getDate = () => {
        const day = (dateNow.getDay() < 10) ? '0' + dateNow.getDay() : dateNow.getDay();
        const month = (dateNow.getMonth() < 10) ? '0' + dateNow.getMonth() : dateNow.getMonth();
        const year = (dateNow.getFullYear() < 10) ? '0' + dateNow.getFullYear() : dateNow.getFullYear();
        return year + '/' + month + '/' + day;
    }

    return (
        <h2 className="date flex flex-col items-center justify-end">
            <p className="m-0">Current date: {getDate()}</p>
            <p className="m-0">Current time: {getTime()}</p>
        </h2>
    )
};