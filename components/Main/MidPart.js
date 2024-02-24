import React from 'react';
import classes from './MidPart.module.css'

const MidPart = () => {
    return (

        <div className={classes.mainContentWrapper}>
            <div class="contentContainer">
                <p className={classes.title}>WE CAN HELP YOU</p>
                <p className={classes.about} >BOOST YOUR <span>GROWTH</span> EFFORTLESS WITH OUR COMPLETE MARKETING SOLUTION!
                    <img className={classes.imgJahaj} src="/MId_Images/Screenshot__172_-removebg-preview 1.png" alt="" />
                </p>
                <p className={classes.details} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio tenetur nam deserunt
                    incidunt nulla consequuntur, rem illo itaque repellat provident!</p>
                <div className={classes.options} >
                    <button className={classes.optionButton1}>Schedule Call
                        <span>&#8594;</span></button>
                    <button className={classes.optionButton2}> View More</button>
                </div>
                <div className="optionForBrand">
                    <p className={classes.brandInfo}>Trusted by The World's biggest brands</p>
                    <p className={classes.optionForBrandIcons}>AfterPay</p>
                    <p className={classes.optionForBrandIcons}>BaseCamp</p>
                    <p className={classes.optionForBrandIcons}>Maze</p>
                </div>
            </div>
            <div className={classes.imageContainer}>
                <img className={classes.imgMegaPhone} src="/MId_Images/megaphone marketing.png" alt="" />
                <img className={classes.imgTargetMarking} src="/MId_Images/Target marketing.png" alt=""/>
                <div className={classes.mainImgcnt}>
                    <img className={classes.imgEclipse} src="/MId_Images/Ellipse 52.png" alt="" />
                    <img className={classes.mainImage} src="/MId_Images/wepik-export-20240130054922eivH 1.png" alt="" />
                </div>
                <img className={classes.imgCurve} src="/MId_Images/ascending graph.png" alt="" />
            </div>
        </div>
    )
}

export default MidPart;