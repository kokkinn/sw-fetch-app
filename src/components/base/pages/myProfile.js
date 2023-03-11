import { useContext } from "react";
import { AuthContext } from "../../SwApi/contexts/authContext";
import { LoginRequire } from "./loginRequire";
import "./pagesStyles.css";
import { PrevPageButton } from "../prevPageButton";

export function MyProfile() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      {authContext.isAuthenticated ? (
        <div className='page-form-wrapper'>
          <div className="page-form">
            <h1 className="sf-title title-pages" style={{ marginTop: "0" }}>
              This is profile page
            </h1>
            <div>Welcome, User</div>
            <PrevPageButton />
          </div>
        </div>
      ) : (
        <LoginRequire />
      )}
    </div>
  );
}
