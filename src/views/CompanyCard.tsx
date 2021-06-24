import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Modal } from 'react-bootstrap';

const CompanyCards = () => {
  const [companies, setCompanies] = useState([
    { name: '', address: '', url: '' }
  ]);
  console.log(companies);
  useEffect(() => {
    const companyData = localStorage.getItem('companydata');
    if (companyData && JSON.parse(companyData)) {
      setCompanies(() => {
        if (companyData) return JSON.parse(companyData);
      });
      return;
    }
    fetch('https://tqinterviewapi.azurewebsites.net/api/Companies?key=2a3a487f-4337-4b34-84e8-f097d042b858')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('companydata', JSON.stringify(data));
        console.log(data);
        if (data.status > 200) {
          setCompanies(data);
        }
      })
      .catch((error) => console.log('Error'));
  }, []);

  //Modal control states
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container>
      <Card>
        {Array.isArray(companies) &&
          companies?.map((company) => {
            // console.log(company);

            return (
              <Card.Body>
                <ul>
                  <li>{company?.name}</li>
                  <li>{company?.address}</li>
                </ul>
                <Card.Link href='#'>{company?.url}</Card.Link>
                <div>
                  <Button onClick={handleShow}>View Employees</Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ul>
                        {/* <li>{company?.name}</li>
                              <li>{company?.age}</li> */}
                      </ul>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant='secondary' onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Card.Body>
            );
          })}
      </Card>
    </Container>
  );
};

export default CompanyCards;
