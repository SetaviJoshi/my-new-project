
import Header from "./Header";
import { Submittedimg } from "./Constants";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
const Submit = () => {
    const navigate = useNavigate();

    useEffect(() => {

        const submitAds = async () => {

            // Wait for 0.6 seconds
            await new Promise((resolve) => setTimeout(resolve, 600));

            // Redirect to Create Ads Page after 0.6 seconds
            navigate('/create-ad');
        };
        submitAds();
    });
    return (

        <div><Header />
            <div className="contact-container p-40">
                <div className="p-4 m-4 border border-green-500 pl-40" >
                    < h1 className="font-bold text-5xl pt-10  m-35 text-left">Your Form has been </h1>
                    <h1 className="font-bold text-7xl text-left animate-pulse  text-green-400">SUBMITTED SUCCESSFULLY !!
                    </h1>
                    <img className="pl-40 w-25 h-20"
                        src={Submittedimg} />
                </div>

            </div></div>
    );
};
export default Submit;