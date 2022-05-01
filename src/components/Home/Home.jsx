import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import Card from "../Card/Card";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-uppercase my-5">InterCorp-Challenge</h1>
      <div className="main d-flex justify-content-center aling-items-center">
        <div className="container d-flex  align-items-center">
          <div className="row w-100">
            <Card path={"create"} Icon={IoCreateOutline} text="Crear Cliente" />
            <Card path={"clients"} Icon={FaUserFriends} text="Clientes" />
            <div className="col-12 col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}
