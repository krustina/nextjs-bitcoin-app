import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        {/* This is where, whatever page we're on, things will output */}
        <div className="container">
            {props.children}
        </div>
    </div>
);
export default Layout;