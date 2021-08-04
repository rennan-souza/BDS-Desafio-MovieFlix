import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/custom.scss';
import './App.css';

import Routes from './Routes';
import { useState } from 'react';
import { AuthContext, AuthContextData } from './AuthContext';
import { ToastContainer } from 'react-toastify'

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    autheticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <ToastContainer />
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
