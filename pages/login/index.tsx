import { AuthLayout } from "@/layouts/Auth";
import { Input, Button } from "@/components";
import { useLogin } from "./Hooks/useLogin";
import { useRouter, NextRouter } from "next/router";

const Login = () => {
  const {
    formData: { email, password },
    handleInputChange,
    loading,
    login,
  } = useLogin();

  const { push }: NextRouter = useRouter();
  return (
    <div className="auth">
      <AuthLayout>
        <div className="px-12 space-y-10 text-center">
          <p className="title-general">Iniciar Sesion</p>
          <Input
            labelTop="Email"
            placeholder="Ingrese el correo electronico"
            value={email}
            onChange={handleInputChange}
            name="email"
          />

          <Input
            labelTop="Contraseña"
            type="password"
            placeholder="Ingrese su contrasena"
            value={password}
            onChange={handleInputChange}
            name="password"
          />

          <Button
            onClick={login}
            content="Iniciar Sesion"
            loading={loading}
            disabled={loading}
            iconLeft="/assets/icons/loginWhite.svg"
          />

          <p
            onClick={() => push("/")}
            className="cursor-pointer hover:text-blue hover:underline"
          >
            Ir a Inicio
          </p>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;
