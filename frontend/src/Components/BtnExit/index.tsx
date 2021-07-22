import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import history from "../../util/history";
import {
  getTokenData,
  isAuthenticated,
  removeAuthData,
} from "../../util/requests";
import "./styles.css";

const BtnExit = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        autheticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        autheticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = () => {
    removeAuthData();
    setAuthContextData({
      autheticated: false,
    });
    history.replace("/");
  };

  return (
    <div>
      {authContextData.autheticated ? (
        <button className="btn-exit ml-4" onClick={handleLogoutClick}>
          SAIR
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default BtnExit;
