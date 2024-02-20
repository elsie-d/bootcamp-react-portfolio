import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
      <Row>
        <Col>
        <center>
                <h2>Interested in my background?</h2>
                <h3>
                    Click below to download a copy of my resume.
                </h3>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
   
      </Col>
      </Row>
      </Container>
    );
  }