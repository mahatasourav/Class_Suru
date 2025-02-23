import React from 'react'
import { Link } from 'react-router-dom'
import Style from "../../css/admin.module.css"

const Admin = () => {
  return (
    <>
      <div className={Style.AdminContainer}>
          <Link to="/admin/examlist" className={Style.AdminPath}>Exam List</Link>
          <Link to="/admin/users" className={Style.AdminPath}>Users</Link>
      </div>
    </>
  )
}

export default Admin