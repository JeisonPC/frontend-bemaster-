"use client";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

function LoginComponent() {
  const [unAuthorized, setUnAuthorized] = useState<boolean | null>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const { login } = useAuth();

  const onSubmit = handleSubmit(async (data: Inputs) => {

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("logged in");
      const data = await res.json();
      console.log(data);
      login({
        authToken: data.token,
        id: "",
        name: "",
        email: data.email,
      });
    }
    if (res.status === 401) {
      setUnAuthorized(true);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>

          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("email", {
              required: { value: true, message: "Email requerido" },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Email no válido",
              },
            })}
          />
          {errors.email ? (
          <span className={`font-semibold ${style.errorMessage}`}>{errors.email.message}</span>
        ) : null}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("password", {
            required: { value: true, message: "password requerido" },
          })}
        />
        {errors.password ? (
          <span className={`font-semibold ${style.errorMessage}`}>{errors.password.message}</span>
        ) : null}
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <div className="mb-5">
        {unAuthorized ? ( <span className={`font-semibold ${style.errorMessage}`}>Lo siento, los datos ingresados no están en nuestro sistema.</span>) : null}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Iniciar Sesión
        </button>
      </form>

    </div>
  );
}

export default LoginComponent;
