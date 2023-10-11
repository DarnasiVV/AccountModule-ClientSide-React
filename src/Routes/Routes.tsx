
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import CreateAccount from '../Accounts/CreateAccount';
import GetAccountList from '../Accounts/GetAccountList';
import GetAccountbyId from '../Accounts/GetAccount';
import UploadProofs from '../Accounts/UploadProofs';

export const MyRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Link to="/GetAccountList">AccountList</Link><br />
                <Link to="/CreateAccount">CreateAccount</Link><br />
                <Link to="/GetAccount">GetAccountbyId</Link><br />
                <Link to="/UploadProofs">UploadProofs</Link><br />
                <Routes>
                    <Route path='/GetAccountList' element={<GetAccountList />} />
                    <Route path='/CreateAccount/:id?' element={<CreateAccount />} />
                    <Route path='/GetAccount' element={<GetAccountbyId />} />
                    <Route path='/UploadProofs/:id' element={<UploadProofs />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

