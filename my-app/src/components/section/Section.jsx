import React from "react";

const Section = ({ title, items }) => {
    const itemArray = items.map((item) => <li> {item} </li>);
    return (
        <div>
            <h2> {title}</h2>
            <ul>{itemArray}</ul>
        </div>
    );
};

export default Section;
