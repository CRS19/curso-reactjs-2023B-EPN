import { useForm } from "react-hook-form";
import { NavBar } from "../../components/NavBar/NavBar";
import { get, isEmpty } from "lodash";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useEffect } from "react";
import { IAppState, useAppStore } from "../../Storage/Storage";

export const Login = () => {
  const loginForm = useForm({ mode: "onBlur" });

  const { loading, setLoading } = useAppStore((state: IAppState) => state);

  const onSubmit = () => {
    loginForm.trigger();

    console.log(loginForm.formState.isValid);

    if (loginForm.formState.isValid) {
      setLoading(true);
      signInWithEmailAndPassword(
        auth,
        loginForm.getValues("firstName"),
        loginForm.getValues("password")
      )
        .then((response) => {
          // nunca se ejecuta cuando la promesa falla 4xx 5xx
          console.log("response", response.user);

          sessionStorage.setItem("user", JSON.stringify(response.user));
          setLoading(false);
        })
        .catch((error) => {
          // se ejecuta cuando la promesa falla 4xx 5xx
          console.log("error", error);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    console.log("el objeto auth", auth);
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Login</h1>
      <input
        {...loginForm.register("firstName", {
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
      {!loading ? (
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
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
