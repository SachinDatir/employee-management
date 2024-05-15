import { useNavigate } from "react-router-dom";
import apiAxios from "../axios";
import EmployeeForm from "../components/EmployeeForm";

export default function AddEmployee() {
  const navigate = useNavigate();

  const handleSubmit = (employee) => {
    apiAxios
      .post("/employees", employee)
      .then((res) => {
        console.log("New employee created:", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error("Error creating employee:", err);
      });
  };

  return (
    <div className="my-4 mx-8">
      <h1 className="text-center text-xl font-bold">Add Employee</h1>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
}
