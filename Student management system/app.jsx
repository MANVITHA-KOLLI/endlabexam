
import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const student = { name, roll, email, course };

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = student;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, student]);
    }

    setName('');
    setRoll('');
    setEmail('');
    setCourse('');
  }

  function deleteStudent(index) {
    setStudents(students.filter((_, i) => i !== index));
  }

  function editStudent(index) {
    const s = students[index];
    setName(s.name);
    setRoll(s.roll);
    setEmail(s.email);
    setCourse(s.course);
    setEditIndex(index);
  }

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Student Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          placeholder="Roll Number"
          value={roll}
          onChange={e => setRoll(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Course"
          value={course}
          onChange={e => setCourse(e.target.value)}
          required
        />

        <button type="submit">
          {editIndex !== null ? 'Update Student' : 'Add Student'}
        </button>
      </form>

      <h2>Student Details</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button onClick={() => editStudent(index)}>
                  Edit
                </button>
                <button onClick={() => deleteStudent(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
