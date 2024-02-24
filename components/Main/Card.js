import Image from 'next/image';
import React from 'react';
import classes from './Card.module.css';
const Card = (props) => {
    const { style, imagePath, title, desc } = props
    return (
        <div style={style} className={classes.card}>
            <Image src={imagePath} alt={title} width={40} height={40} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default Card;