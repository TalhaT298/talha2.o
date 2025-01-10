import React from 'react';
import Banner from '../Banner/Banner';
import Github from '../Github/Github';
import Earth from '../Earth/Earth';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Earth></Earth>
            <Github></Github>
            <CopyToClipboard></CopyToClipboard>
        </div>
    );
};

export default Home;