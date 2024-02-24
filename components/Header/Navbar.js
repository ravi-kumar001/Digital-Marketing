import classes from './Navbar.module.css'
const Navbar = () => {

    return (
        <div className={classes.nav}>
            <div className={classes.logo} >
                <span className={classes.log}>DIGITAL</span>
                <br />
                <span>MARKETING</span>
            </div>
            <div className={classes.container} >
                <div className={classes.navItems}>HOME</div>
                <div className={classes.navItems}>ABOUT US</div>
                <div className={classes.navItems}>SERVICES</div>
                <div className={classes.navItems}>PROJECTS</div>
                <div className={classes.navItems}>CONTACT US</div>
                <div className={classes.navItems}>MORE</div>
                <div className={classes.navItems}>LOGIN</div>
                <div className={classes.navItems}>SIGN UP</div>
            </div>
        </div>

    );
};

export default Navbar;