// Application has a single Footer component that appears on multiple pages.

const styles = {
    footerStyle:{
        background: '#aabfb1',
        height: '50px',
    },
    footerLinksStyle: {
        color: '',
        fontSize: '15px',
        padding: '15px'

    },
};

function Footer(){
return(
    <div style={styles.footerStyle}>
        <p style={styles.footerLinksStyle}>
            <a href="https://github.com/elsie-d" target="_blank" style={{color: "white"}}>GitHub</a> | <a href="https://www.linkedin.com/in/elsie-duarte-bb2b8650/" target="_blank" style={{color: "white"}}>LinkedIn</a> 
        </p>
    </div>
);
}

export default Footer;