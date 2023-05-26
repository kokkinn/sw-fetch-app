import { useNavigate } from "react-router-dom";
import { PrevPageButton } from "../prevPageButton";

export function LoginRequire() {
  let navigate = useNavigate();
  return (
    <div className="page-form-wrapper">
    <div className="page-form">
      <h3 className="error-div">You should login to visit this page</h3>
      <button
        className="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <PrevPageButton />
    </div>
    </div>
  );
}
