import React from "react";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginRoutesProps } from "../routes/LoginRoutes";

const SignIn: React.FC<LoginRoutesProps> = ({ setToken }) => {
    function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const base = e.target as HTMLFormElement;
        const enteredNumber = base.phone_number.value;
        const enteredPassword = base.password.value;

        const storedUser = JSON.parse(localStorage.getItem("userData") || "{}");

        if (
            storedUser.phone_number === enteredNumber &&
            storedUser.password === enteredPassword
        ) {
            toast.success("Muvaffaqiyatli kirdingiz");
            setToken(true);
        } else {
            toast.error("Telefon raqam yoki parol noto'g'ri!");
        }
    }

    return (
        <div className="w-[600px] mx-auto mt-[120px]">
            <h1 className="text-center text-blue-600 mb-[20px] text-[30px] font-bold">
                Tizimga kirish
            </h1>
            <form autoComplete="off" onSubmit={handleSignIn} className="w-full space-y-[15px]">
                <Input
                    required
                    name="phone_number"
                    size="large"
                    placeholder="Telefon raqamingizni kiriting..."
                />
                <Input
                    required
                    name="password"
                    size="large"
                    type="password"
                    placeholder="Parolingizni kiriting..."
                />
                <Link
                    className="w-full pl-[450px] text-blue-500"
                    to={"/sign-up"}
                >
                    Registratsiya qilish
                </Link>
                <Button
                    className="w-full"
                    variant="filled"
                    size="large"
                    color="primary"
                    htmlType="submit"
                >
                    Tizimga kirish
                </Button>
            </form>
        </div>
    );
};

export default SignIn;
