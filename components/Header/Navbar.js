import Link from 'next/link';
import React, { Fragment } from 'react';

const Navbar = () => {
    return (
        <Fragment>


            <nav>
                <div>
                    <h1><b>Digital Marketing</b></h1>

                </div>
                <div>
                    <Link href={'/home'}>Home</Link>
                    <Link href={'/home'}>About Us</Link>
                    <Link href={'/home'}>Services</Link>
                    <Link href={'/home'}>Projects</Link>
                    <Link href={'/home'}>Contact Us</Link>
                    <Link href={'/home'}>More</Link>
                </div>
                <div>
                    <Link href={'/home'}>LOGIN</Link>
                    <Link href={'/home'}>SIGN UP</Link>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;