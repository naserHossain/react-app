import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import * as DateFns from "date-fns";

function getTimes(date) {
    return {
        hours: DateFns.getHours(date),
        minutes: DateFns.getMinutes(date),
        seconds: DateFns.getSeconds(date),
    };
}

function formateTime(time) {
    return time < 10 ? `0 ${time}` : time;
}

const Contact = () => {
    const [date, setDate] = useState(new Date());
    // console.log(date);
    useEffect(() => {
        setTimeout(() => {
            setDate(new Date());
        }, 1000);
    }, [date]);

    const time = getTimes(date);

    return (
        <div>
            <Layout>
                <h1> Hello, This is contact page </h1>
                <h2> Clock: </h2>
                <h2>
                    {formateTime(time.hours)} : {formateTime(time.minutes)} :{" "}
                    {formateTime(time.seconds)}
                </h2>
            </Layout>
        </div>
    );
};

export default Contact;
