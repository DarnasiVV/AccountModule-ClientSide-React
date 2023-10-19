
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import CreateAccount from '../Accounts/CreateAccount';
import GetAccountList from '../Accounts/GetAccountList';
import GetAccountbyId from '../Accounts/GetAccount';
import UploadProofs from '../Accounts/UploadProofs';
import ParentComponent from '../DemoonUseContextHook/demo1';
import { Tabs, Tab, Nav } from 'react-bootstrap'

export const MyRoutes = () => {

    return (
        <>
            <Nav variant='pills' >
                <Nav.Item>
                    <Nav.Link href="/CreateAccount">CreateAccount</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/GetAccountList'>AccountList</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/UploadProofs'>ProofUploads</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/DemoonUseContextHook'>UseContextDemo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/GetAccount'>GetAccountById</Nav.Link>
                </Nav.Item>
            </Nav>
            <BrowserRouter>
                {/* <Link to="/GetAccountList">AccountList</Link><br />
                <Link to="/CreateAccount">CreateAccount</Link><br />
                <Link to="/GetAccount">GetAccountbyId</Link><br />
                <Link to="/UploadProofs">UploadProofs</Link><br />
                <Link to="/DemoonuseContextHook">DemoonUseContextHook</Link><br /> */}
                <Routes>
                    <Route path='/GetAccountList' element={<GetAccountList />} />
                    <Route path='/CreateAccount/:id?' element={<CreateAccount />} />
                    <Route path='/GetAccount' element={<GetAccountbyId />} />
                    <Route path='/UploadProofs/:id' element={<UploadProofs />} />
                    <Route path='/DemoonuseContextHook' element={<ParentComponent />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

