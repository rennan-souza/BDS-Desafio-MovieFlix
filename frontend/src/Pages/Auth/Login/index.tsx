import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";
import { getTokenData, requestBackendLogin, saveAuthData } from "../../../util/requests";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [hasError, setHasError] = useState(false);

  const { setAuthContextData } = useContext(AuthContext);

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        saveAuthData(response.data);
        setAuthContextData({
          autheticated: true,
          tokenData: getTokenData(),
        });
        history.push("/movies");
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  return (
    <div className="card bg-secondary-light shadow">
      <div className="card-body">
        <div className="text-center text-white mt-5 mb-3">
          <h2>LOGIN</h2>
        </div>
        <div className="card-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                {...register("username", {
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
                type="text"
                className={`form-control base-input ${
                  errors.username ? "is-invalid" : ""
                }`}
                placeholder="Email"
                name="username"
              />
              <small className="text-danger text-bold">
                {errors.username?.message}
              </small>
            </div>

            <div className="form-group">
              <input
                {...register("password", {
                  required: "Campo senha obrigatório",
                })}
                type="password"
                className={`form-control base-input ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Senha"
                name="password"
              />
              <small className="text-danger text-bold">
                {errors.password?.message}
              </small>
            </div>

            {hasError && (
              <div className="alert alert-danger">
                <small>
                  Erro ao fazer login, verifique os dados e tente novamente
                </small>
              </div>
            )}

            <div className="form-group mt-5">
              <button className="btn btn-lg btn-primary btn-block">
                <h4>FAZER LOGIN</h4>
              </button>
            </div>
          </form>
          <div className="mt-2">
            <Link to="/auth/signup"><small>Ainda não tem conta? Register</small></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
