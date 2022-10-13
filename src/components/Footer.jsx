import React from 'react';
import './movieHeist.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    const year = new Date().getFullYear(); 
    return (
        <div className="footer">
            <div className="social-media-links">
                <a href='https://facebook.com' target='_blank' rel='noreferrer'><FacebookIcon /></a>
                <a href='https://instagram.com' target='_blank' rel='noreferrer'><InstagramIcon /></a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'><TwitterIcon /></a>
            </div>
            <p>&#169; Movie Heist {year}</p>
        </div>
    );
};

export default Footer;