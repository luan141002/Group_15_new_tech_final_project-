import React from 'react';
import Header from '../../Header';

// import Footer from '../../Footer';
const defaultLayout = ({ children }) => {
    return (
            <div className="flex flex-col pl-20 flex-wrap w-full h-screen bg-[#151212]">
                <Header />
                <div className=" w-full bg-[#151212] justify-self-center mt-[90px] h-[100px]  ">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
    );
};

export default defaultLayout;
