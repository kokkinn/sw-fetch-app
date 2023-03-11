import { PrevPageButton } from "../prevPageButton";
import "./pagesStyles.css";

export function NotFoundPage() {
  return (
    <div className="centre-title">
      <h4 className="">The page you have tried to reach does not exist :(</h4>
      <PrevPageButton />
    </div>
  );
}
