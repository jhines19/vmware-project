import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DataCard({ dataObj }) {



  return (
    <div className="container">
      <h1>Kubernetes Clusters:</h1>
          <>
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Title>Name: {`${dataObj.name}`}</Card.Title>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Size: {`${dataObj.name}`}</ListGroup.Item>
                  <ListGroup.Item>Cores: {`${dataObj.cores}`}</ListGroup.Item>
                  <ListGroup.Item>OS: {`${dataObj.os}`}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <br />
          </>
    </div>
  );
}

{/* <li className="list-group-item">
          {data.os}
        </li>
        <li className="list-group-item">
        {data.cores}
      </li> */}

// const DataCard = ({ data }) => {

//     return (
//         <>
//             <Card border="primary" style={{ width: '18rem' }}>
//                 <Card.Header>Name:{data.name}</Card.Header>
//                 <Card.Title>Name:{data.name}</Card.Title>
//                 <Card.Body>
//                     <ListGroup variant="flush">
//                         <ListGroup.Item>Size:{data.total_memory_gb}</ListGroup.Item>
//                         <ListGroup.Item>Cores:{data.cores}</ListGroup.Item>
//                         <ListGroup.Item>OS:{data.os}</ListGroup.Item>
//                     </ListGroup>
//                 </Card.Body>
//             </Card>
//             <br />
//         </>
//     )
// }






