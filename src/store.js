export const employees = [
  {
    name: "Akshay Kumar",
    dob: "1996-07-08T18:30:00.000Z",
    salary: "1500000",
    joining_date: "2023-10-28T23:16:49.820Z",
    relieving_date: "2023-11-27T23:16:49.820Z",
    contact: "9876543210",
    status: "active",
    id: "1",
  },
  {
    name: "John Doe",
    dob: "1985-04-15T14:45:00.000Z",
    salary: "1200000",
    joining_date: "2022-09-12T09:30:00.000Z",
    relieving_date: "2023-06-30T18:45:00.000Z",
    contact: "1234567890",
    status: "active",
    id: "2",
  },
  {
    name: "Alice Smith",
    dob: "1990-01-20T08:15:00.000Z",
    salary: "900000",
    joining_date: "2023-01-05T12:00:00.000Z",
    relieving_date: "2023-11-15T16:20:00.000Z",
    contact: "7890123456",
    status: "active",
    id: "3",
  },
  {
    name: "Bob Johnson",
    dob: "1982-11-30T16:00:00.000Z",
    salary: "1600000",
    joining_date: "2022-08-18T11:30:00.000Z",
    relieving_date: "2023-10-10T17:30:00.000Z",
    contact: "3456789012",
    status: "active",
    id: "4",
  },
  {
    name: "Eva Lee",
    dob: "1995-03-05T10:30:00.000Z",
    salary: "1100000",
    joining_date: "2023-04-20T14:15:00.000Z",
    relieving_date: "2023-11-05T19:00:00.000Z",
    contact: "5678901234",
    status: "active",
    id: "5",
  },
  {
    name: "Michael Brown",
    dob: "1989-09-25T12:45:00.000Z",
    salary: "1400000",
    joining_date: "2023-03-15T17:00:00.000Z",
    relieving_date: "2023-11-22T13:30:00.000Z",
    contact: "2345678901",
    status: "active",
    id: "6",
  },
  {
    name: "Linda Wilson",
    dob: "1994-06-10T09:00:00.000Z",
    salary: "1000000",
    joining_date: "2023-02-02T10:45:00.000Z",
    relieving_date: "2023-11-28T15:45:00.000Z",
    contact: "4567890123",
    status: "active",
    id: "7",
  },
  {
    name: "James Davis",
    dob: "1987-12-12T14:30:00.000Z",
    salary: "1300000",
    joining_date: "2023-05-25T08:45:00.000Z",
    relieving_date: "2023-11-25T12:15:00.000Z",
    contact: "6789012345",
    status: "active",
    id: "8",
  },
  {
    name: "Sarah Anderson",
    dob: "1992-02-28T13:15:00.000Z",
    salary: "950000",
    joining_date: "2022-10-10T15:00:00.000Z",
    relieving_date: "2023-11-10T14:30:00.000Z",
    contact: "3456789012",
    status: "active",
    id: "9",
  },
  {
    name: "William Taylor",
    dob: "1984-08-08T11:00:00.000Z",
    salary: "1800000",
    joining_date: "2023-07-02T16:30:00.000Z",
    relieving_date: "2023-11-18T08:00:00.000Z",
    contact: "4567890123",
    status: "active",
    id: "10",
  },
];

const getLocalEmployees = () => {
  try {
    const employees = localStorage.getItem("employees");
    return JSON.parse(employees);
  } catch (err) {
    return null;
  }
};

const setLocalEmployees = (employees) => {
  localStorage.setItem("employees", JSON.stringify(employees));
};

export const createEmployee = (employee) => {
  const employees = getLocalEmployees();
  if (employees) {
    setLocalEmployees([...employees, employee]);
  }
};

export const findEmployees = () => {
  const employees = getLocalEmployees();
  if (!employees) {
    setLocalEmployees([]);
    return [];
  }
  return employees;
};

export const findEmployeeById = (id) => {
  const employees = getLocalEmployees();
  if (employees) {
    const employee = employees.find((e) => e.id === id);
    return employee;
  }

  return null;
};

export const updateEmployeeById = (id, data) => {
  const employees = getLocalEmployees();
  if (employees) {
    const index = employees.findIndex((e) => e.id === id);
    employees[index] = { id: id, ...data };
    setLocalEmployees(employees);
  }
};

export const deleteEmployeeById = (id) => {
  const employees = getLocalEmployees();
  if (employees) {
    const newEmployees = employees.filter((e) => e.id !== id);
    setLocalEmployees(newEmployees);
  }
};
