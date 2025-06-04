import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section className="error-page px-20 py-0 section flex justify-center">
      <div className="error-container capitalize align-center">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary ">
          back home
        </Link>
      </div>
    </section>
  );
}