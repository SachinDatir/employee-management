import { useEffect, useState } from "react";
import apiAxios from "./axios";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

function App() {
  const [employees, setEmployees] = useState([]);

  const handleDeleteEmployee = (id) => {
    apiAxios
      .delete(`/employees/${id}`)
      .then(() => {
        console.log("Employee deleted successfully.");
        setEmployees(employees.filter((employee) => employee.id !== id));
      })
      .catch((err) => {
        console.log("Error deleting employee", err);
      });
  };

  useEffect(() => {
    apiAxios.get("/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div className="mx-8 mt-8">
      <div className="flex justify-between">
        <div className="text-xl font-bold">Employee List</div>
        <div>
          <Link
            to="/add-employee"
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Add Employee
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
        <table className="mt-8 min-w-full divide-y-2 divide-gray-200 bg-white text-sm border-2">
          <thead className="ltr:text-left rtl:text-right bg-gray-200">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">DOB</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Joining Date</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Relieving Date</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Contact</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edit</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Delete</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{employee.name}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{dayjs(employee.dob).format("DD-MM-YYYY")}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{employee.salary}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{dayjs(employee.joining_date).format("DD-MM-YYYY")}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{dayjs(employee.relieving_date).format("DD-MM-YYYY")}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{employee.contact}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{employee.status}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <Link
                      to={`/update-employee/${employee.id}`}
                      className="inline-block rounded-3xl border border-indigo-600 px-3 py-1 text-sm font-medium text-black hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button
                      to={`/update-employee/${employee.id}`}
                      className="rounded-2xl border bg-white border-red-600 px-2 py-1 text-sm font-medium text-black hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
                      onClick={() => handleDeleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
