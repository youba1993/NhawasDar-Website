import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import HousesIndex from '../houses/HousesIndex';

function MainPageSearch() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/houses/adress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ "adress": search }),
    }).then((respense) => respense.json())
      .then((res) => {
        if (res.error)
          setResult(false)
        else
          setResult(res)
      })
  }

  return (
    <>
      <Container>
        <Form className="d-flex justify-content-center" onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            type="search-form-control"
            placeholder="Search"
            md={{ span: 3, offset: 3 }}
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
      </Container>
      <br/>
      
        {result ? <HousesIndex result={result} /> : <div className="error-container" style={{ color: 'red' }}>No entres for this Adress</div>}
   
    </>
  )

}
export default MainPageSearch;