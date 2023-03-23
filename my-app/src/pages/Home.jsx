import React from "react";
import Layout from "../components/layout/Layout";
import Section from "../components/section/Section";

const education = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam nisi. Dolorem voluptas at sed!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam nisi. Dolorem voluptas at sed!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam nisi. Dolorem voluptas at sed!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam nisi. Dolorem voluptas at sed!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam nisi. Dolorem voluptas at sed!",
];

const experiences = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam nisi. Dolorem voluptas at sed!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam nisi. Dolorem voluptas at sed!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam nisi. Dolorem voluptas at sed!",
];

const Home = () => {
    return (
        <div>
            <h1> Hello, this is home page</h1>
            <Layout>
                <Section title="Experience" items={experiences} />
                <Section title="Education" items={education} />
            </Layout>
        </div>
    );
};

export default Home;
