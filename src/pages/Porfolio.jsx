import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/portfolio.css'

export default function Portfolio() {
    return (
      <Container>
      <Row>
        <Col>

        <Row>
          <Col><h1 className="portfolio">Explore Portfolio</h1></Col>
        </Row>

  <h3>Team Projects</h3>

  <Container>
      <Row>
        <Col>
  
    <Card className="cardStyle">
      <Card.Img className="appImg" variant="top" src="/assets/savory-secrets.jpg" />
      <Card.Body>
        <Card.Title>Savory Secrets</Card.Title>
        <Card.Text>
          Want to check out recipes? Checkout Savory Secrets to follow written or recorded recipes!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/elsie-d/savory-secrets" target="_blank" style={{color: "#876d37"}}>GitHub Repo</Card.Link>
        &nbsp; |
        <Card.Link href="https://elsie-d.github.io/savory-secrets/" target="_blank" style={{color: "#876d37"}}>Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
   
    <Card className="cardStyle">
      <Card.Img className="appImg" variant="top" src="/assets/artwork-hills-30x30cm-1.jpg" />
      <Card.Body>
        <Card.Title>AI Groovy Graphics</Card.Title>
        <Card.Text>
          Interestead in Goovy Graphics? Check out the cool art Dall-e 3 can generate for you.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/elsie-d/ai-groovy-graphics" target="_blank" style={{color: "#876d37"}}>GitHub Repo</Card.Link>
        &nbsp; |
        <Card.Link href="https://groovy-graphics-afd292f27b77.herokuapp.com/" target="_blank" style={{color: "#876d37"}}>Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </Col>
  </Row>
</Container>



 <h3>Individual Challenges</h3>

 <Container>
      <Row>
        <Col>
 
    <Card className="cardStyle">
      <Card.Img className="appImg" variant="top" src="/assets/javascript2.jpeg" />
      <Card.Body>
        <Card.Title>JavaScript Quiz</Card.Title>
        <Card.Text>
          This app test your knowlege on JavaScript basics
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/elsie-d/quiz-time" target="_blank" style={{color: "#876d37"}}>GitHub Repo</Card.Link>
        &nbsp; |
        <Card.Link href="https://elsie-d.github.io/quiz-time/" target="_blank" style={{color: "#876d37"}}>Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="cardStyle">
      <Card.Img className="appImg" variant="top" src="/assets/weather.png" />
      <Card.Body>
        <Card.Title>Weather Forecast</Card.Title>
        <Card.Text>
          See how the weather will be in your area.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/elsie-d/weather-app" target="_blank" style={{color: "#876d37"}}>GitHub Repo</Card.Link>
        &nbsp; |
        <Card.Link href="https://elsie-d.github.io/weather-app/" target="_blank" style={{color: "#876d37"}}>Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </Col>
  </Row>
  <Row>
    <Col>
    <Card className="cardStyle">
      <Card.Img className="appImg" variant="top" src="/assets/JATE.png" />
      <Card.Body>
        <Card.Title>Just Another Text Editor</Card.Title>
        <Card.Text>
         Check out and install this progessive web application, use it to save your thoughts and notes. 
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/elsie-d/text-editor-pwa" target="_blank" style={{color: "#876d37"}}>GitHub Repo</Card.Link>
        &nbsp; |
        <Card.Link href="https://pwa-text-editor-j7kw.onrender.com" target="_blank" style={{color: "#876d37"}}>Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="cardStyle">
      <Card.Img className="appImg" variant="top" src="/assets/scheduler.png" />
      <Card.Body>
        <Card.Title>Word Day Scheduler</Card.Title>
        <Card.Text>
          Use this tool to plan out your day on an hour by hour basis.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/elsie-d/work-day-scheduler" target="_blank" style={{color: "#876d37"}}>GitHub Repo</Card.Link>
        &nbsp; |
        <Card.Link href="https://elsie-d.github.io/work-day-scheduler/" target="_blank" style={{color: "#876d37"}}>Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </Col>
  </Row>
  </Container>
  </Col>
      </Row>
    </Container>


    );
  }