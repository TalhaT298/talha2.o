import React from 'react';
import Banner from '../Banner/Banner';
import Github from '../Github/Github';
import Earth from '../Earth/Earth';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard';
import Card from '../Card/Card';
import Bootcamp from '../Bootcamp/Bootcamp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Bootcamp></Bootcamp>
            <Earth></Earth>
            <Github></Github>
            <CopyToClipboard></CopyToClipboard>
        </div>
    );
};

export default Home;