import Navbar from '@/components/Header/Navbar';
import CardContainer from '@/components/Main/CardContainer';
import MidPart from '@/components/Main/MidPart';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <MidPart />
            <CardContainer />
        </div>
    );
};

export default HomePage;