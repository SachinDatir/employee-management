import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

export default function EmployeeForm({
  name = "",
  dob = new Date(1, 0, 2000),
  salary = 10000,
  joining_date = new Date(),
  relieving_date = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  contact = "",
  status = "active",
  onSubmit,
}) {
  const [nameField, setNameField] = useState(name);
  const [dobField, setDobField] = useState(dob);
  const [salaryField, setSalaryField] = useState(salary);
  const [joiningDate, setJoiningDate] = useState(joining_date);
  const [relievingDate, setRelievingDate] = useState(relieving_date);
  const [contactField, setContactField] = useState(contact);
  const [statusField, setStatusField] = useState(status);

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameField && dobField && salaryField && joiningDate && relievingDate && contactField && statusField) {
      onSubmit({
        name: nameField,
        dob: dobField,
        salary: salaryField,
        joining_date: joiningDate,
        relieving_date: relievingDate,
        contact: contactField,
        status: statusField,
      });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="my-6 max-w-[600px] mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 w-full rounded-lg border border-gray-200 p-2 pe-10 text-sm shadow-sm"
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="dob" className="block text-xs font-bold text-gray-700">
            DOB
          </label>
          <DatePicker
            className="mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm"
            id="dob"
            selected={dobField}
            onChange={(date) => setDobField(date)}
          />
        </div>

        <div>
          <label htmlFor="salary" className="block text-xs font-bold text-gray-700">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            placeholder="50000"
            className="mt-1 w-full rounded-lg border border-gray-200 p-2 pe-10 text-sm shadow-sm"
            value={salaryField}
            onChange={(e) => setSalaryField(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="joining date" className="block text-xs font-bold text-gray-700">
            Joining Date
          </label>
          <DatePicker
            className="mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm"
            id="joining date"
            selected={joiningDate}
            onChange={(date) => setJoiningDate(date)}
          />
        </div>

        <div>
          <label htmlFor="joining date" className="block text-xs font-bold text-gray-700">
            Relieving Date
          </label>
          <DatePicker
            className="mt-1 border border-gray-200 rounded-lg p-2 pe-10 text-sm shadow-sm"
            selected={relievingDate}
            onChange={(date) => setRelievingDate(date)}
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-xs font-bold text-gray-700">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            className="mt-1 w-full rounded-lg border border-gray-200 p-2 pe-10 text-sm shadow-sm"
            value={contactField}
            onChange={(e) => setContactField(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-xs font-bold text-gray-700">
            Status
          </label>

          <select
            name="status"
            id="status"
            className="mt-1.5 w-full rounded-lg border border-gray-200 p-2 pe-10 text-gray-700 sm:text-sm"
            value={statusField}
            onChange={(e) => setStatusField(e.target.value)}
          >
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>
        </div>

        {error ? <div className="mt-4 text-red-700">Please fill all fields.</div> : ""}

        <button className="mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
          Submit
        </button>
      </form>
    </div>
  );
}

EmployeeForm.propTypes = {
  name: PropTypes.string,
  dob: PropTypes.string,
  salary: PropTypes.string,
  joining_date: PropTypes.string,
  relieving_date: PropTypes.string,
  contact: PropTypes.string,
  status: PropTypes.string,
  onSubmit: PropTypes.func,
};
