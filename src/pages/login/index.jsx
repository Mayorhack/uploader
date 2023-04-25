import Button from "@/components/Button";
import FormInput from "@/components/forms/FormInput";
import Link from "next/link";
import AuthLayout from "@/layout/AuthLayout";

import useLogin from "@/hooks/useLogin";
const Login = () => {
  const [email, password, handleChange, handleSubmit] = useLogin();
  return (
    <AuthLayout>
      <h2 className="text-4xl my-6 font-medium ">Welcome</h2>
      <p className="text-slate-600 mb-6">
        Please provide your details to login to your account
      </p>
      <FormInput
        label={"Email"}
        name={"email"}
        onChange={handleChange}
        value={email}
      />
      <FormInput
        label={"Password"}
        name={"password"}
        onChange={handleChange}
        value={password}
        type={"password"}
      />
      <Button className={"my-6 w-full"} onClick={handleSubmit}>
        Login
      </Button>
      <div className="uppercase my-4 flex justify-between items-center">
        <div className="w-[40%] h-[1px] bg-slate-600"></div>or
        <div className="w-[40%] h-[1px] bg-slate-600"></div>
      </div>
      <p>
        You dont have an account?
        <Link href={"/signup"} className="text-highlight mx-2">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
