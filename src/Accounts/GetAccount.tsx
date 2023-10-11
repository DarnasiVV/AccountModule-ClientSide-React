
import { useState } from "react"

import { Button, Col, Container, Form, Row } from "react-bootstrap";


function GetAccountbyId() {

   const [Id, setId] = useState('');
   const [details, setDetails] = useState<any>({});

   const submitHandle = () => {


      fetch(`https://localhost:7267/GetAccount/${Id}`, {
         method: 'GET',
      }).then((res) => {
         if (res.ok) {
            return res.json();
         }
      }).then((data) => (setDetails(data)));
   }


   return (<>
      <Container>
         <Row>
            <Col sm='3'>
               <h1>GetAccountbyID</h1>
               <Form.Label>Id</Form.Label>
               <Form.Control
                  type="text"
                  onChange={(e) => { setId(e.target.value) }}
               >
               </Form.Control>
               <Button onClick={submitHandle}>Submit</Button>
               <div>
                  <b>Name</b> : {details?.accountHolderName}<br />
                  <b>Address</b> :   {details?.address} <br />
                  <b>PhoneNumber</b> : {details?.phoneNumber} <br />
                  <b>Proofs </b>:  {details?.proofs?.map((item: any, index: number) => {
                     return (<>
                        <div key={index}>{item.proofType}:{item.proofValue}</div>
                     </>)
                  })} <br />
               </div>
            </Col>
         </Row>
      </Container>

   </>)
}

export default GetAccountbyId;