import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import AdminBar from "../NavBar/AdminBar";
import Employee from "./Employee";

export default function Employees() {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  const employees = useSelector((state) => state.employees);

  return (
    <div className="mt-14  mb-24">
      <NavBar />
      <h5>4646</h5>
      <div className="grid grid-cols-2 gap-5  p-2 w-full h-full">
        
        {employees?.length>0?employees?.map((employee) => {
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
        }):false}
      </div>
      {/* {loggedUser?.admin === true ? <AdminBar /> : false} */}a
    </div>
  );
}
