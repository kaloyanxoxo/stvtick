import React from 'react';
import Logo from '../assets/logo_copy.png'
import Video from '../assets/reel_converted.mov'
import Thumb from '../assets/thumb.png'
import './styles/styles.css';

export const Header = () => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };

    return (
        <section className="showcase" id="home">
            <header>
                <a href="#home"><img src={Logo} className="logo" alt="Logo" /></a>
            </header>
            <img
                src={Thumb}
                className="video-thumb tiny"
                alt="thumb"
                style={{ opacity: isVideoLoaded ? 0 : 1 }}
            />
            <video
                src={Video}
                muted
                loop
                autoPlay
                onLoadedData={() => onLoadedData()}
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
            />

            <div className="overlay"></div>

            <div className="text">
                <hr style={{ width: '100px', margin: 'auto' }} />
                <h1>Video services</h1>
                <h3>Southwest Florida</h3>
                <a href="#contact">Contact</a>
                <hr style={{ width: '100px', margin: 'auto' }} />
            </div>
        </section>
    )
}