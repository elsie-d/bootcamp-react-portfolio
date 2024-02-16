// About Me, Portfolio, Contact, and Resume sections.


const styles = {
    navbarStyle:{
        background: 'yellow',
    },
    navStyle: {
        color: 'white',
        fontSize: '25px',

    },
};

function Nav(){
return(
    <div style={styles.NavBarStyle}>
        <p style={styles.navStyle}>
            About Me | Portfolio | Contact | Resume
        </p>
    </div>
);
}

export default Nav;