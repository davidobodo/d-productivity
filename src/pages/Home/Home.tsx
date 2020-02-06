import React from 'react';
import { HomeWrapper } from './HomeStyles';
import Shapes from '../../components/Shapes';
import { url } from 'inspector';

interface Props {
    handleSetOpenBoard: any,
}

const Home: React.FunctionComponent<Props> = ({ handleSetOpenBoard }) => {
    return (
        <HomeWrapper>
            <div className="section-one">
                <h2>Welcome to d-productivity</h2>
            </div>

            <div className="section-two shape-section">
                <div
                />
                <div style={{
                    borderBottom: 'calc((100vh - 140px)/4) solid #c92e58',
                    borderLeft: 'calc(15vw - 20px) solid transparent',
                    width: '0',
                }} />

                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#2429f5',
                    clipPath: 'circle(50.0% at 50% 0)',
                    backgroundImage: "url('https://images.unsplash.com/photo-1553941884-f8947df6e0ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',

                }} />
                <div style={{
                    borderTop: 'calc((100vh - 140px)/4) solid #6fc08a',
                    borderRight: 'calc(15vw - 20px) solid transparent',
                    width: '0'
                }} />
            </div>
            <div className="section-three shape-section">
                <div />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#6e1fd8',
                    borderTopRightRadius: '50%',
                }} />
                <div />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#d8841f',

                    backgroundImage: "url('https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80')",
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                }} />
            </div>

            <div className="section-four">
                <h1>Your whole <br /> mind <br /> in one place</h1>
                <p>Find out how productive you could be.</p>
                <a onClick={handleSetOpenBoard}>Start Now</a>
            </div>
            <div className="section-five shape-section">
                <div style={{
                    borderBottom: 'calc((100vh - 140px)/4) solid #c92e58',
                    borderLeft: 'calc(15vw - 20px) solid transparent',
                    width: '0',
                }} />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#d8841f',
                    borderRadius: '50%',
                }} />
                <div />
                <div style={{
                    borderBottom: 'calc((100vh - 140px)/4) solid #2429f5',
                    borderRight: 'calc(15vw - 20px) solid transparent',
                    width: '0',
                }}
                />
            </div>
            <div className="section-six shape-section">
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#6e1fd8',
                }} />
                <div style={{
                    borderTop: 'calc((100vh - 140px)/4) solid #d8841f',
                    borderLeft: 'calc(15vw - 20px) solid transparent',
                    width: '0'
                }} />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: 'purple',
                    backgroundImage: "url('https://images.unsplash.com/photo-1485359466996-ba9d9b4958b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80')",
                    backgroundSize: 'cover',
                    borderTopRightRadius: '50%',
                    borderBottomRightRadius: '50%',
                }} />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#2429f5',
                    borderBottomRightRadius: '50%',
                }} />
            </div>
        </HomeWrapper>
    )
}

export default Home;