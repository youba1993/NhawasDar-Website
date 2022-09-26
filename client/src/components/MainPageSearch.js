import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function MainPageSearch(){
    return(
        <Container>        
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                md={{ span: 3, offset: 3 }}
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
        </Container>  
    )

}
export default MainPageSearch;