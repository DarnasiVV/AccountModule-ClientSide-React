import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../ReduxConcept/actions/CreateAccountAction";
import { useParams } from "react-router";
import { updateAccount } from "../ReduxConcept/actions/UpdateAccountAction";
import UploadProofs from "./UploadProofs";





export default function CreateAccount() {

    const [submitdisable,SetSubmitDisable] = useState<boolean>(true);

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const data = useSelector((state: any) => state.accountList.initialdata);
    const { id } = useParams();

    const filteredData = data?.find((x: any) => (x.id === id));

    const dispatch = useDispatch();
    const [accountdetail, setAccountDetail] = useState({
        AccountHolderName: filteredData?.accountHolderName,
        Address: filteredData?.address,
        PhoneNumber: filteredData?.phoneNumber,
        Proofs: {
            ProofType : "",
            ProofValue : ""
        }
    });


    useEffect(() => {
        if (filteredData?.id) {
            setIsEdit(true);
        }

    }, filteredData)


    const handleSave = () => {
        
        fetch('https://localhost:7267/CreateAccount', {
            method: 'POST',
            headers:
            {
                "Content-type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(accountdetail)
        }).then((res) => {
            if (res.ok) {
                return alert("Account Created Successfully");

            }
            else {
                throw new Error("Network response was not ok");
            }

        }).then(() => { dispatch(createAccount(accountdetail)); });

        setAccountDetail({
            AccountHolderName: "",
            Address: "",
            PhoneNumber: "",
            Proofs: {
                ProofType : "",
                ProofValue : ""
            }
        });

    }

    const handleUpdate = () => {

        const updateaccountdetail = {
            Id: filteredData?.id,
            Address: accountdetail?.Address,
            PhoneNumber: accountdetail?.PhoneNumber,
            Proofs : {
                ProofType : "",
                ProofValue : ""
            }
        }


        fetch('https://localhost:7267/UpdateAccount', {
            method: 'PUT',
            headers: { "content-type": "application/json;charset=utf-8" },
            body: JSON.stringify(updateaccountdetail)
        }).then(
            (response) => {

                if (response.ok) {
                    return alert("Account Updated Successfully");
                }
                else {
                    return alert("account not updated");
                }
            }).then(() => { dispatch(updateAccount(updateaccountdetail)) })
        setAccountDetail({
            AccountHolderName: "",
            Address: "",
            PhoneNumber: "",
            Proofs: {
                ProofType : "",
                ProofValue : ""
            }
        });
    }


    return (
        <>
            <Container>
                <h1>Create Account</h1>
                 
                <Col sm='3'>
                    <Form.Label>AccountHolderName</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => { setAccountDetail({ ...accountdetail, AccountHolderName: e.target.value }) }}
                        value={accountdetail.AccountHolderName}
                        disabled={isEdit}
                    >
                    </Form.Control>
                </Col>
                <Col sm='3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => { setAccountDetail({ ...accountdetail, Address: e.target.value }) }}
                        value={accountdetail.Address}
                    >
                    </Form.Control>
                </Col>
                <Col sm='3'>
                    <Form.Label>PhoneNumber</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(e) => { setAccountDetail({ ...accountdetail, PhoneNumber: e.target.value }) }}
                        value={accountdetail.PhoneNumber}
                    >
                    </Form.Control>
                </Col>
                

                <Col>
                <UploadProofs
                 submitdisable = {submitdisable}
                 Proofs = {accountdetail.Proofs}
                 handleSave = {() => handleSave()}
                />
                </Col>
                
                <Col sm='3'>
                    {isEdit ? <>
                        <Button onClick={() => handleUpdate()}>Update</Button>
                    </>
                        : <>
                            <Button onClick={() => handleSave()}>Save</Button>
                        </>
                    }
                </Col>
            </Container>
        </>
    )
}