"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useLogin = () => {
  const loginForm = new URLSearchParams();

  const loginMutate = useMutation(
    () => {
      loginForm.append("email", loginData.email);
      loginForm.append("password", loginData.password);
      return axios.post(
        "https://localhost:7151/Admin/Account/Login",
        loginForm,
        {
          headers: {
            RequestVerificationToken:
              "CfDJ8M78HWgNYSBBukhkTnG0LkYNJFFhOfIY7z5XbY6vriOc-TlgQEdEdH6Nd-eXRTeIH0sr8typsvpdmsmg7Z-kwjGXAd61wqk3I8PEJBIa_ppM6zdVpWl4kqPackLr5d7lneDnaIM21BaS9jLj2wdFYOA",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    },
    {
      onSuccess: () => console.log("Success"),
    }
  );
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    loginMutate.mutate();
  };
  return [loginData.email, loginData.password, handleChange, handleSubmit];
};

export default useLogin;
