import SignupPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainpage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/" element={<h1>Hello</h1>      
                  
                  } />
            </Routes>
        
        
        </BrowserRouter>
      
    </div>
  )
}

export default App
