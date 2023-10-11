import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";


// interface props {
//     submitdisable: boolean ,
//     proofs : {
//         ProofType : string,
//         ProofValue : string
//     },
//     saveHandle : () => void;
// }


export default function UploadProofs(props: any) {

    const {submitdisable:submitbuttondisable, proofs } = props;
    
    const data = useSelector((state: any) => state.accountList.initialdata);
    const { id } = useParams();

    const filteredData = data?.find((x: any) => (x.id === id));

    // const [Proof, setProof] = useState([{
    //     ProofType: "Pan",
    //     ProofValue: " "
    // }])
    const [proof, setProof] = useState({
        ProofType: "Pan",
        ProofValue: ""
    })

    const submitHandler = () => {
        
        const Proofs = [{
            accountId: filteredData?.id,
            ProofType: "",
            ProofValue: ""
        }]

        fetch(`https://localhost:7267/CreateAccountHolderIdentityProofs`, {
            method: 'POST',
            headers: { "Content-type": "application/json;charset=utf-8" },
            body: JSON.stringify(Proofs)
        }).then((res) => {
            if (res.ok) {
                return alert("Proofs Submitted Successfully");
            }
        })
        setProof({
            ProofType: " ",
            ProofValue: " "
        })

    }

    return (<>
        <Container>

            <Row>


                <Col sm='3'>
                    <Form.Label>ProofType</Form.Label>
                    <Form.Select  
                     onChange={(e) => (setProof({...proof,ProofType : e.target.value}))}
                     defaultValue={proof.ProofValue}
                    >
                        <option value={"Pan"} label="Pan"> </option>
                        <option value={"Aadhar"} label="Aadhar"> </option>
                        <option value={"VoterId"} label="Pan"> </option>
                        <option value={"Driving License"} label="Driving Licence"> </option>
                        <option value={"PassPort"} label="PassPort"> </option>
                        <option value={"RationCard"} label="RationCard"> </option>
                        <option value={"BirthCertificate"} label="BirthCertificate"> </option>
                    </Form.Select>
                </Col>
                <Col sm='3'>
                    <Form.Label>ProofValue</Form.Label>
                    <Form.Control
                        type=" text"
                        onChange={(e) => (setProof({...proof,ProofValue : e.target.value}))}
                        value={proof.ProofValue}
                    >
                    </Form.Control>
                </Col>

            </Row>
            <Col>
                {submitbuttondisable ? <></> : <> <Button onClick={() => (submitHandler())}>Submit</Button></>}
            </Col>

        </Container>

    </>)
}



