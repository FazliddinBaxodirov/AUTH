import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'

export interface LoginRoutesProps {
    setToken: React.Dispatch<React.SetStateAction<boolean>>;
  }

const LoginRoutes: React.FC<LoginRoutesProps> = ({setToken}) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn setToken={setToken}/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default LoginRoutes
