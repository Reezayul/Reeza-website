import { Link, useRouteError } from "react-router-dom";
import { Button } from "./Styles/Button";
import "./App.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img src="../images/error.svg" alt="error" />
      <Link to="/" className="btn"> Go Back </Link>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
