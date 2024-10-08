import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import { HashRouter as Router, redirect, RouterProvider } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NeoEmployees } from './components/NeoEmployees.js';
import { Home } from './components/Home.js';
import { EmployeeForm } from './components/EmployeeForm.js';
import { AdminLogin } from './components/AdminLogin.js';
import { getAllEmployees, getEmployeeById } from './model/EmployeeCRUD.js';
import { FileUpload } from './components/FileUpload.js';


// const employeesrouter=createHashRouter(rootRoutes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<NeoEmployees />} />
        <Route path="/addemployee" element={<EmployeeForm />} />
        <Route path="/editemployee/:_id" element={<EmployeeForm />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/editpic/:_id" element={<FileUpload />} />
      </Route>
    </Routes>
  </Router>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
