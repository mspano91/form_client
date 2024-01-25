"use client";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:3002/user", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  });

  return (
    <div className="w-80 rounded-2xl bg-slate-900">
      <div className="flex flex-col gap-2 p-8">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>
        <form className="w-2/4" onSubmit={onSubmit}>
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
            {...register("name", {
              required: { value: true, message: "User required" },
            })}
          />
          {errors.username && (
            <span className="text-red-400">{errors.username.message}</span>
          )}
          <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
            email
          </label>
          <input
            className="p-3 rounded block mb-2 bg-slate-700 text-slate-300"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "email required" },
            })}
          />

          {errors.username && (
            <span className="text-red-400">{errors.email.message}</span>
          )}

          <label
            htmlFor="password"
            className="text-slate-500 mb-2 block text-sm"
          >
            password
          </label>
          <input
            className="p-3 rounded block mb-2 bg-slate-700 text-slate-300"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password required" },
            })}
          />
          {errors.username && (
            <span className="text-red-400">{errors.password.message}</span>
          )}

          <label
            htmlFor="confirm Password"
            className="text-slate-500 mb-2 block text-sm"
          >
            confirm Password
          </label>
          <input
            className="p-3 rounded block mb-2 bg-slate-700 text-slate-300"
            type="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: { value: true, message: "field required" },
            })}
          />
          {errors.username && (
            <span className="text-red-400">
              {errors.confirmPassword.message}
            </span>
          )}
          <button className=" w-full mb-2 bg-blue-500 text-white p-3 rounded-lg mt-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
