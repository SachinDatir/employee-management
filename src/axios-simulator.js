import { v4 as uuid } from "uuid";
import { createEmployee, deleteEmployeeById, findEmployeeById, findEmployees, updateEmployeeById } from "./store";

export const axiosSimulator = {
  post: async (url, data) => {
    const employee = { id: uuid(), ...data };
    // employees.push(employee);
    createEmployee(employee);
    return { data: employee };
  },
  get: async (url) => {
    const parts = url.split("/");
    if (parts.length > 2) {
      const employeeId = url.split("/").pop();
      // return { data: employees.find((e) => e.id === employeeId) };
      return { data: findEmployeeById(employeeId) };
    } else {
      // return { data: employees };
      return { data: findEmployees() };
    }
  },
  put: async (url, data) => {
    const employeeId = url.split("/").pop();
    // const index = employees.findIndex((e) => e.id === employeeId);
    // employees[index] = { id: employeeId, ...data };
    updateEmployeeById(employeeId, data);
    return { data };
  },
  delete: async (url) => {
    const employeeId = url.split("/").pop();
    // employees.filter((e) => e.id !== employeeId);
    deleteEmployeeById(employeeId);
  },
};
