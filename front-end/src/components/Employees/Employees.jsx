import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import AdminBar from "../NavBar/AdminBar"
import Employee from "./Employee";

export default function Employees() {
  const loggedUser = JSON.parse(localStorage.getItem("loggeduser"));
  const token = loggedUser[1];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmployees(token));
  }, []);

  const employees = useSelector((state) => state.employees);
  console.log(employees);

  return (
    <div className="mt-14  mb-24">
         <NavBar/>
      <h5>aaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
      <div className="grid grid-cols-2 gap-5  p-2 w-full h-full">
      {employees?.map((employee) => {
        return (
            <Employee
              key={employee.identification}
              id={employee.id}
              adress={employee.adress}
              bithdate={employee.bithdate}
              email={employee.email}
              identification={employee.identification}
              last_name={employee.last_name}
              name={employee.name}
              phone={employee.phone}
              vaccination_status={employee.vaccination_status}
              vaccines={employee.vaccines}
            />
            );
          })}
          </div>
         {loggedUser[0]?.admin === true ? <AdminBar /> : false}
    </div>
  );
}
