import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Button } from 'react-bootstrap';
import CompanyCards from '../views/CompanyCard';

const Companies: React.FC = () => {
  return (
    <>
      <div>
        {/* <LinkContainer to='/'>
          <Button>Home</Button>
        </LinkContainer> */}
        <CompanyCards />
      </div>
    </>
  );
};

export default Companies;
