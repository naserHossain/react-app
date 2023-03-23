import { Link } from "@reach/router";
import React from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
    const path = window.location.pathname;
    return (
        <div className={classes.app}>
            <nav className={classes.nav}>
                <div className={classes.brandTitle}>
                    <h3> Brand Name</h3>
                </div>

                <div className={classes.menu}>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={
                                    path === "/"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={
                                    path === "/about"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/help"
                                className={
                                    path === "/help"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={
                                    path === "/contact"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className={classes.main}>{props.children}</main>

            <footer className={classes.footer}>
                <h3> This is Footer</h3>
                <ul>
                    <li>Footer link one</li>
                    <li>Footer link two</li>
                    <li>Footer link three</li>
                </ul>
            </footer>
        </div>
    );
};

export default Layout;
