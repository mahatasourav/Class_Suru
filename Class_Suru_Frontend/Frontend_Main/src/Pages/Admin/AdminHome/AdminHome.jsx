import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../Components/Button/Button'

const AdminHome = () => {
  return (
    <>
      <div className="AdminHomeContainer">
        <br />
        <br />
        <center>
        <h1 style={{color: "#504EEC"}}>Admin Home</h1>
        </center>
      </div>
      <br />
      <center>
      <div className="AdminHomeContent">
        <h3>What would you like to do?</h3>
        <br />

        <Button isLink={true} link="/admin/list" text="Manage Exams" className="AdminHomeButton" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Button isLink={true} link="/admin/users" text="Manage Users" className="AdminHomeButton" /> */}

      </div>
      </center>
    </>
  )
}

export default AdminHome