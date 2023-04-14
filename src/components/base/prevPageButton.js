import { useNavigate } from "react-router-dom";

export function PrevPageButton() {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}
