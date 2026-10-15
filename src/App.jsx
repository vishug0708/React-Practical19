
import { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", course: "BCA", age: 20 },
    { id: 2, name: "Priya", course: "BBA", age: 21 },
    { id: 3, name: "Amit", course: "B.Tech", age: 22 },
    { id: 4, name: "Neha", course: "BCA", age: 19 }
  ]);

  function handleDelete(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  }

  return (
    <div>
      <h1>Student Management System</h1>
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.age}</td>
                <td>
                  <button
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
