import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/userContextProvider';


function App() {
  

  return (
    <userContextProvider>
      <Login />
      <Profile />
    </userContextProvider>
  )
}

export default App