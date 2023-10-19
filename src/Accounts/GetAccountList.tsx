import { useEffect } from "react"
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getaccountlistdata } from "../ReduxConcept/actions/getaccountlistaction";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router";



const GetAccountList = () => {

    const navigate = useNavigate();


    const accountList = useSelector((state: any) => state.accountList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://localhost:7267/GetAccountList").
            then((res) => { return res.json() }).
            then((accountList) => {
                dispatch(getaccountlistdata(accountList));
            });
    }, [])


    const UpdateProofHandler = (id: any) => (

        navigate(`/UploadProofs/${id}`)
    );

    const UpdateHandler = (id: any) => (

        navigate(`/CreateAccount/${id}`)

    );

    const DeleteHandler = (id: any) => {


        fetch('https://localhost:7267/DeleteAccount', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=utf-8" },
            body: JSON.stringify({ id })

        }).
            then((res) => {
                if (res.ok) {
                    return alert("Account Deleted Successfully");
                }
            });

    }

    return (
        <>
            <Container>
                <Table bordered >
                    <thead>
                        <tr>
                            <th>AccountHolderName</th>
                            <th>Address</th>
                            <th>PhoneNumber</th>
                            <th>Proofs</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {accountList.initialdata?.map((item: any, index: number) => (
                            <tr key={index}>
                                <td>{item.accountHolderName}</td>
                                <td>{item.address}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item?.proofs?.map((x: any, index: number) => {
                                    return (<>
                                        <div key={index}>{x.proofType}:{x.proofValue}</div>

                                    </>)
                                })}
                                    <div><Button onClick={() => (UpdateProofHandler(item.id))}>UploadProofs</Button></div>
                                </td>

                                <td>
                                    {<Button
                                        onClick={() => UpdateHandler(item.id)}>Update</Button>}
                                    {<Button onClick={() => DeleteHandler(item.id)}>Delete</Button>}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>

        </>)
}

export default GetAccountList;