import { useForm } from "react-hook-form";
import { NavBar } from "../../components/NavBar/NavBar";
import { get, isEmpty } from "lodash";

export const Login = () => {
  const loginForm = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    loginForm.trigger();

    console.log(loginForm.formState.isValid);

    if (loginForm.formState.isValid) {
      console.log(
        "llamar al api de autenciacion con estos valores",
        loginForm.getValues()
      );
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Login</h1>
      <input
        {...loginForm.register("firstName", {
          required: "Este campo es requerido.",
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Porfavor solo ingresa letras.",
          },
        })}
        style={{
          display: "flex",
          width: "80%",
          height: "30px",
          fontSize: "20px",
          marginBottom: "10px",
        }}
        type="text"
        placeholder="Ingrese Nombre"
      />
      {!isEmpty(loginForm.formState.errors) && (
        <p style={{ color: "red" }}>
          {get(loginForm, "formState.errors.firstName.message", "") as string}
        </p>
      )}
      <input
        {...loginForm.register("password", {
          required: "Este campo es requerido.",
          minLength: {
            value: 8,
            message: "La contrasenia debe tener al menos 8 caracteres.",
          },
        })}
        style={{
          display: "flex",
          width: "80%",
          height: "30px",
          fontSize: "20px",
        }}
        type="password"
        placeholder="Ingrese contrasenia"
      />
      {!isEmpty(loginForm.formState.errors) && (
        <p style={{ color: "red" }}>
          {get(loginForm, "formState.errors.password.message", "") as string}
        </p>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            marginTop: "10px",
          }}
          onClick={onSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};
