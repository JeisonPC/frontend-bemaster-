"use client";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

function LoginComponent() {
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
      console.log("logged in")
      const data = await res.json();
      console.log(data);
      login({
        authToken: data.token,
        id: "",
        name: "",
        email: data.email
      });
    }
  });


  return (
    <div>
      <form onSubmit={onSubmit}>

        <input
          type="email"
          {...register("email", {
            required: { value: true, message: "Email requerido" },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: "Email no válido",
            },
          })}
        />
        {errors.email ? (
          <span className={style.errorMessage}>{errors.email.message}</span>
        ) : null}
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "password requerido" }
          })}
        />
        {errors.password ? (
          <span className={style.errorMessage}>{errors.password.message}</span>
        ) : null}
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginComponent;
