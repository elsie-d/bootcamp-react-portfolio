import Card from 'react-bootstrap/Card';


export default function Portfolio() {
    return (
  <div class="container text-center">

  <h1>THIS IS THE PORTFOLIO PAGE</h1>
        <h2>List All Projects Here</h2>
  <h3>Use link hook to link to a single Project page</h3>
  <h3>Team Projects</h3>
  <div class="row">
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/savory-secrets.jpg" />
      <Card.Body>
        <Card.Title>Savory Secrets</Card.Title>
        <Card.Text>
          Want to check out recipes? Checkout Savory Secrets to follow written or recorded recipes!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/elsie-d/savory-secrets" target="_blank">GitHub Repo</Card.Link>
        <Card.Link href="https://elsie-d.github.io/savory-secrets/" target="_blank">Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/savory-secrets.jpg" />
      <Card.Body>
        <Card.Title>AI Groovy Graphics</Card.Title>
        <Card.Text>
          Interestead in Goovy Graphics? Check out the cool art Dall-e 3 can generate for you.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/elsie-d/ai-groovy-graphics" target="_blank">GitHub Repo</Card.Link>
        <Card.Link href="https://groovy-graphics-afd292f27b77.herokuapp.com/" target="_blank">Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </div>
  </div>

 <h3>Individual Challenges</h3>


  <div class="row">
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/savory-secrets.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" target="_blank">GitHub Repo</Card.Link>
        <Card.Link href="#" target="_blank">Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/savory-secrets.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" target="_blank">GitHub Repo</Card.Link>
        <Card.Link href="#" target="_blank">Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/savory-secrets.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" target="_blank">GitHub Repo</Card.Link>
        <Card.Link href="#" target="_blank">Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div class="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/savory-secrets.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" target="_blank">GitHub Repo</Card.Link>
        <Card.Link href="#" target="_blank">Visit Site</Card.Link>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>


    );
  }