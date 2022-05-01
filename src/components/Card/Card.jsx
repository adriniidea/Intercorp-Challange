import React from "react";
import { Link } from "react-router-dom";

export default function Card({ Icon, text, path }) {
  return (
    <div className="col-12 col-md-6 cursor-pointer my-5 ">
      <Link className="link" to={path}>
        <div className="card d-flex">
          <h1 className="text-center">
            <Icon />
          </h1>
          <h2 className="text-center">{text}</h2>
        </div>
      </Link>
    </div>
  );
}
