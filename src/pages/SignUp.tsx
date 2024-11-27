import React from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface DataType {
    first_name: string;
    last_name: string;
    phone_number: string | number;
    email: string;
    password: string | number;
}

function SignUp() {
    const navigate = useNavigate();

    function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const base = e.target as HTMLFormElement;
        const data: DataType = {
            first_name: base.first_name.value,
            last_name: base.last_name.value,
            phone_number: base.phone_number.value,
            email: base.email.value,
            password: base.password.value,
        };

        localStorage.setItem("userData", JSON.stringify(data));
        toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
        navigate("/"); 
    }

    return (
        <div className="w-[600px] mx-auto mt-[120px]">
            <h1 className="text-center text-blue-600 mb-[20px] text-[30px] font-bold">Ro'yxatdan o'tish</h1>
            <form autoComplete="off" onSubmit={handleSignUp} className="space-y-[15px]">
                <Input name="first_name" size="large" placeholder="Ismingizni kiriting..." />
                <Input name="last_name" size="large" placeholder="Familiyangizni kiriting..." />
                <Input name="email" size="large" type="email" placeholder="Email manzilingizni kiriting..." />
                <Input name="phone_number" size="large" placeholder="Telefon raqamingizni kiriting..." />
                <Input name="password" size="large" type="password" placeholder="Parolingizni kiriting..." />
                <Button className="w-full" variant="filled" size="large" color="primary" htmlType="submit">
                    Ro'yxatdan o'tish
                </Button>
            </form>
        </div>
    );
}

export default SignUp;