import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  // console.log(data)
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
