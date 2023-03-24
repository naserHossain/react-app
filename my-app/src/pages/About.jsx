import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
    let count = 1;
    return (
        <div>
            <Layout>
                <h1> Hello I am about page</h1>
                <h2> Count: {count} </h2>
            </Layout>
        </div>
    );
};

export default About;
