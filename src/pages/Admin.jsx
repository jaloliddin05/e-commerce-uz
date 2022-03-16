import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  let [fr_name, setFr_Name] = useState("");
  let [ls_name, setLs_Name] = useState("");
  let [password, setPassword] = useState("");

  let parol = "12345";
  let name = "Admin";
  let lastName = "Admin";

  let istrue = fr_name === name && ls_name === lastName && password === parol;

  return (
    <div
      className={
        istrue ? "container admin_container2" : "container admin_container"
      }
    >
      <form className={istrue ? "form_admin none" : "form_admin"}>
        <input
          type="text"
          className="in in1"
          placeholder="Admin"
          onChange={(e) => setFr_Name(e.target.value)}
        />
        <span className="in_name">First name</span>
        <input
          type="text"
          className="in in2"
          onChange={(e) => setLs_Name(e.target.value)}
          placeholder="Admin"
        />
        <span className="in_lastName">Last name</span>
        <input
          type="password"
          className="in in3"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="12345"
        />
        <span className="in_password">Password</span>
      </form>
      <ul className={istrue ? "admin_list" : "admin_list none"}>
        {JSON.parse(window.localStorage.getItem("info"))?.map((inf) => {
          return (
            <li key={inf.id} className="admin_item">
              <p className="">City:  {inf.gorod} </p>
              <p className="">Street:  {inf.street}</p>
              <p className="">Dom:  {inf.dom}</p>
              <p className="">Podez:  {inf.podez}</p>
              <p className="">Kvartira:  {inf.kvart}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Admin;
