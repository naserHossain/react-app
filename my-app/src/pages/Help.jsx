import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

const Help = () => {
    const [state, setState] = useState({ name: "" });
    // const [name, setName] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setState({ name: "Shawon" });
        }, 1000);
        console.log("set time out called");

        console.log("rendering");
    }, []);

    // const data = [
    //     { name: "Joseph", email: "joseph@gmail.com" },
    //     { name: "Robert", email: "robert@gmail.com" },
    //     { name: "Jennifer", email: "jennifer@gmail.com" },
    //     { name: "Nicholas", email: "nocholas@gmail.com" },
    //     { name: "Abraham", email: "abraham@gmail.com" },
    // ];

    const data = [];
    return (
        <div>
            <Layout>
                {/* {name && <h1> Hello {name} from help page </h1>}
                {!name && <h1> Hello Guest from help page </h1>} */}

                {state.name ? (
                    <h1> Hello {state.name} from help page </h1>
                ) : (
                    <h1> Hello Guest from help page </h1>
                )}

                {data.length ? (
                    <ul>
                        {data.map((person) => (
                            <li>
                                Name: {person.name} Email: {person.email}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>"Error: 404 Data not Found"</p>
                )}
            </Layout>
        </div>
    );
};

export default Help;
