import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import { useNavigate, useParams } from "react-router-dom";
import apiAxios from "../axios";

export default function UpdateEmployee() {
  const navigate = useNavigate();
  const params = useParams();
  const [employee, setEmployee] = useState();

  const handleSubmit = (updatedEmployee) => {
    apiAxios
      .put(`/employees/${employee.id}`, updatedEmployee)
      .then((res) => {
        console.log("Update employee:", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error("Error creating employee:", err);
      });
  };

  useEffect(() => {
    const employeeId = params.employeeId;

    apiAxios.get(`/employees/${employeeId}`).then((res) => {
      setEmployee(res.data);
    });
  }, []);

  return (
    <div className="my-4 mx-8">
      <h1 className="text-center text-xl font-bold">Update Employee</h1>

      {employee ? (
        <EmployeeForm
          name={employee.name}
          dob={new Date(employee.dob)}
          salary={employee.salary}
          joining_date={new Date(employee.joining_date)}
          relieving_date={new Date(employee.relieving_date)}
          contact={employee.contact}
          status={employee.status}
          onSubmit={handleSubmit}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
