"use client";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

function RegisterComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = handleSubmit(async (data: Inputs) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      router.push("/login");
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Nombre requerido",
            },
          })}
        />
        {errors.username ? (
          <span className={style.errorMessage}>{errors.username.message}</span>
        ) : null}
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

export default RegisterComponent;
