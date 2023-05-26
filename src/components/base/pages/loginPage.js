import { useContext } from "react";
import { AuthContext } from "../../SwApi/contexts/authContext";
import { PrevPageButton } from "../prevPageButton";
import "./pagesStyles.css";

export function LoginPage() {
  const loggedIN = useContext(AuthContext);
  return (
    <div className='page-form-wrapper'>
      <div className="page-form">
        <h1 style={{ marginTop: 0 }} className="sf-title title-pages">
          This is login page
        </h1>
        <button
          className="button"
          onClick={
            loggedIN.isAuthenticated
              ? () => {
                  loggedIN.logout();
                  alert("You have been logged out");
                }
              : () => {
                  loggedIN.login();
                  alert("You have been logged in");
                }
          }
        >
          {loggedIN.isAuthenticated ? "Log Out" : "Log In"}
        </button>
        <PrevPageButton />
      </div>
    </div>
  );
}
