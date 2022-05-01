import './App.css';
import React, {useState, useEffect} from 'react'
import { Routes, Route, useNavigate   } from "react-router-dom";
import Login from './Component/Login';
import Home from './Component/Home';
import { authentication } from './firebase-config';
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  // let navigate = useNavigate();

  
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      console.log(user)
      if (user) {
        // navigate("/home");
        return setIsUserSignedIn(true)
      }
      setIsUserSignedIn(false)
    }
    );
  })
  
  return (
    <div>
      <Routes>
        {!isUserSignedIn ?
          <Route path="/" element={<Login isUserSignedIn />} />
          :
          <Route path="/" element={<Home />} />
        }
      </Routes>
    </div>
  );
}

export default App;