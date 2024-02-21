import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/resume.css'

export default function Resume() {
  const onButtonClick = () => {
    const pdfUrl = "ElsieResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ElsieResume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

    return (
      <Container className="resBody">
      <Row>
        <Col>
        
        <Row>
          <Col><h1 className="resume">Resume</h1></Col>
        </Row>
                <h4>
                    Click below to download a copy of my resume.
                    <br/><br/>
                </h4>
                <button onClick={onButtonClick} className="download" style={{color: "#876d37"}}>
                    Download Resume
                </button>
            
   
      </Col>
      </Row>
      </Container>
    );
  }