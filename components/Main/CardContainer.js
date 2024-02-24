import React from 'react';
import Link from 'next/link';
import Card from './Card';
import classes from './CardContainer.module.css'
const CardContainer = () => {
    const style1 = {
        backgroundColor: '#ffefe8',
    };
    const style2 = {
        backgroundColor: '#fde7e7',
    };
    const style3 = {
        backgroundColor: '#f7e1f5',
    };
    return (
        <div className={classes.main}>
        <div className={classes.lc}>
            <h3 style={{color : 'blue'}}>WHAT WE SERVE</h3>
            <h1>
                Top Values For You
            </h1>
            <p>Try a verity of benefits when using our service.</p>
            <Link href={'/'}>See More &#x276F;</Link>
        </div>
        <div className={classes.cardContainer}>
            <Card style={style1} imagePath={'/Bottom-Images/young man writing something.png'} title={'Content Writing'} desc={'Exploring the Impact of Artificial Intelligence on Future Workforce Dynamics'} />
            <Card style={style2} imagePath={'/Bottom-Images/Graphic designer creating artwork.png'} title={'Logo Design'} desc={'Elevating Brands through 50+ Distinctive Logo Designs'} />
            <Card style={style3} imagePath={'/Bottom-Images/Social media marketing and internet marketing.png'} title={'Front-End Developer'} desc={'Exploring the art of User interface.The Role of a Front-End Developer in Crafting Engaging web Experiences.'} />
            <Card style={style1} imagePath={'/Bottom-Images/Mobile app development and web development.png'} title={'Graphic Design'} desc={'Graphic design: visual storytelling through artful composition'} />
            <Card style={style2} imagePath={'/Bottom-Images/young man writing something.png'} title={'Social-Media Marketing'} desc={'Strategically promoting products through engaging content on online platforms defines social-media marketing'} />
            <Card style={style3} imagePath={'/Bottom-Images/young man writing something.png'} title={'UX Design'} desc={'UX design crafts user friendly and delighful experiences through smart interface and interaction design'} />
        </div>
    </div>
    );
};

export default CardContainer;