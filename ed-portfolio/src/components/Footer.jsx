// Application has a single Footer component that appears on multiple pages.

const styles = {
    footerStyle:{
        background: 'green',
    },
    footerLinksStyle: {
        color: 'purple',
        fontSize: '25px',

    },
};

function Footer(){
return(
    <div style={styles.footerStyle}>
        <p style={styles.footerLinksStyle}>
            GitHub | LinkedIn 
        </p>
    </div>
);
}

export default Footer;