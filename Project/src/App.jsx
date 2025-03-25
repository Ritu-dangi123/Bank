import { Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './Layout'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import Dashboard from './Dashboard'
import WithdrawCase from './Pages/WithdrwaCase'
import YourProfile from './Pages/YourProfile'
import SubmitCase from './Pages/SubbmitCase'
import AccountStatement from './Pages/AccountBalance'
import MiniStatement from './Pages/MiniStatement'
import ResetPassword from './Pages/ResetPassoward'
import BalanceInquiry from './Pages/BalanceInquiry'

function App() {
  

  return (
    <>
     <Routes>
       <Route path='/' element = {<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/register' element = {<Registration/>}/>
        <Route path='/login' element = {<Login/>}/>
       </Route>
     </Routes>

     <Routes>
      <Route path='/dashboard' element = {<Dashboard/>}>
      <Route index element = {<YourProfile/>}/>
      <Route path='/dashboard/yourprofile' element = {<YourProfile/>} />
      <Route path='/dashboard/submitcase' element = {<SubmitCase/>} />
      <Route path='/dashboard/withdrawcase' element = {<WithdrawCase/>} />
      <Route path='/dashboard/balanceinqury' element = {<BalanceInquiry/>} />
      <Route path='/dashboard/accountstatement' element = {<AccountStatement/>} />
      <Route path='/dashboard/ministatement' element = {<MiniStatement/>} />
      <Route path='/dashboard/resetpassword' element = {<ResetPassword/>} />
      </Route>
     </Routes>
    </>
  )
}

export default App