import React from 'react';

const Footer = () => {
    return (
        <div className="h-auto mb-5 bg-gray-900 relative text-center ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="h-32 w-full bg-red-100"></div>
                <div className="h-32 w-full bg-red-100"></div>
                <div className="h-32 w-full bg-red-100"></div>
            </div>

            <p className=" text-red-600   absolute bottom-0">Developed By @ Nure Alam Siddique</p>
        </div>
    );
};

export default Footer;