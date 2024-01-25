"use client";
import React, { useState } from "react";

export default function login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de validación antes de enviar los datos

    // Ejemplo de validación simple (puedes ajustar según tus necesidades)
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "username required";
    }
    if (!formData.email) {
      newErrors.email = "email required";
    }
    if (!formData.password) {
      newErrors.password = "password required";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Field required";
    }

    if (Object.keys(newErrors).length === 0) {
      // Si no hay errores, puedes enviar los datos o realizar otra acción
      console.log(formData);
    } else {
      // Si hay errores, actualiza el estado de errores
      setErrors(newErrors);
    }
  };
  return (
    <div className="w-80 rounded-2xl bg-slate-900">
      <div className="flex flex-col gap-2 p-8">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>
        <form className="w-2/4" onSubmit={handleSubmit}>
          <label
            htmlFor="userName"
            className="text-slate-500 mb-2 block text-sm"
          >
            username
          </label>
          <input
            className="p-3 rounded block mb-2 bg-slate-700 text-slate-300"
            type="text"
            placeholder="User"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="text-red-400">{errors.username}</span>
          )}
          <input
            className="p-3 rounded block mb-2 bg-slate-700 text-slate-300"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="text-red-400">{errors.email}</span>
          )}
          <input
            className="p-3 rounded block mb-2 bg-slate-700 text-slate-300"
            type="Password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="text-red-400">{errors.password}</span>
          )}
          <input
            className="p-3 rounded block mb-2 bg-slate-700 text-slate-300"
            type="Password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="text-red-400">{errors.confirmPassword}</span>
          )}

          {/* Repite la estructura para los otros campos y mensajes de error */}

          <button className="w-full mb-2 bg-blue-500 text-white p-3 rounded-lg mt-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
