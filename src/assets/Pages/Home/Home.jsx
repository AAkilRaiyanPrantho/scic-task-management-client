import { Link } from "react-router-dom";
import Banner from "../../../Components/Banner/Banner";
import Headings from "../../../Components/Headings/Headings";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProviders/AuthProvider";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";



const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Banner></Banner>
            
            {
                user?<><div className="flex flex-col justify-center items-center">
                <Headings mainHeading={'Want to do some tasks?'} subHeading={'Go to your dashboard'}></Headings>
                <button className="btn btn-accent btn-outline px-8"><Link to={'/dashboard'}>Dashboard</Link></button></div></>:<><div className="flex flex-col justify-center items-center">
                <Headings mainHeading={'Want to do join us?'} subHeading={'Click the link below'}></Headings>
                <button className="btn btn-accent btn-outline px-8"><Link to={'/dashboard'}>Register</Link></button></div></>
            }
            
            <div id="audiences">
            <Headings mainHeading={'our audience'} subHeading={'Who do we serve?'}></Headings>
            </div>
            <div id="about">
            <Headings mainHeading={'About Us'} subHeading={'What do we serve?'}></Headings>
            <AboutUs></AboutUs>
            </div>
            <div id="contact">
            <Headings mainHeading={'Contact Us'} subHeading={'Stay connected with us'}></Headings>
            <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;