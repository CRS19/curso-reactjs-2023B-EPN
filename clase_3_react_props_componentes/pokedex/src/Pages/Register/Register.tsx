import { useForm } from "react-hook-form";
import { NavBar } from "../../components/NavBar/NavBar";
import { get, isEmpty } from "lodash";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useEffect } from "react";

export const Register = () => {
  const registerForm = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    registerForm.trigger();

    console.log(registerForm.formState.isValid);

    if (registerForm.formState.isValid) {
      //
      console.log("hacer el registro");
      createUserWithEmailAndPassword(
        auth,
        registerForm.getValues("firstName"),
        registerForm.getValues("password")
      )
        .then((response) => {
          // siempre que la solicitud sea exitosa
          console.log("response", response);
        })
        .catch((error) => {
          // siempre que la solicitud falle
          console.log("error", error);
        });
    }
  };

  useEffect(() => {
    console.log("el objeto auth", auth);
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Register Form</h1>
      <input
        {...registerForm.register("firstName", {
          required: "Este campo es requerido.",
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
      {!isEmpty(registerForm.formState.errors) && (
        <p style={{ color: "red" }}>
          {
            get(
              registerForm,
              "formState.errors.firstName.message",
              ""
            ) as string
          }
        </p>
      )}
      <input
        {...registerForm.register("password", {
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
      {!isEmpty(registerForm.formState.errors) && (
        <p style={{ color: "red" }}>
          {get(registerForm, "formState.errors.password.message", "") as string}
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
