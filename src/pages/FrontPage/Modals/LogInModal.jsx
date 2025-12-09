import { Logo } from "../../../components/Logo/Logo"
import { TextInputField } from "../../../components/TextInputField/TextInputField"
import { Button } from "../../../components/Button/Button"
import ClearIcon from '@mui/icons-material/Clear';
import { authService } from '../../../services/AuthService'
import { useState } from "react";

export const LogInModal = ({ handleClearIcon, switchToSignUp, setIsLogin, setUserName }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async ({ email, password }) => {
        authService.login({ email, password })
            .then((response) => {
                if (!response) {
                    alert("Your login information is incorrect!")

                    return;
                } else {
                    alert("Login successfully")

                    setIsLogin(true);
                    setUserName(response.userName)

                    if (response.userRole === "STUDENT") {
                        // Navigate to /student
                        window.location.href = '/student';
                    } else if (response.userRole === "TEACHER") {
                        // Navigate to /instructor
                        window.location.href = '/instructor';
                    }

                    return;
                }
            })
    }

    return (<div className="loginModal relative flex flex-col gap-5 p-8 rounded-xl w-1/3 h-fit border border-gray-400 items-center bg-white">
        <div className="h-4 w-4 absolute top-2.5 right-[23px] hover:cursor-pointer" onClick={() => handleClearIcon()}>
            <ClearIcon />
        </div>

        <div className="Logo">
            <Logo size={"large"} />
        </div>
        <div className="text-[#4B5563] font-bold text-xl">
            <p>Chào mừng bạn trở lại</p>
        </div>

        <TextInputField hasLabel={true} value={email} inputType={"email"} label={"Email"} placeholderValue={"yourEmail@example.com"} hasIcon={true} iconName={"email"} onChangeHandle={setEmail} />

        <TextInputField hasLabel={true} value={password} inputType={"password"} label={"Mật khẩu"} placeholderValue={"Nhập mật khẩu của bạn"} hasIcon={true} iconName={"lock"} onChangeHandle={setPassword} />

        <Button fullWidth={true} label={"Đăng nhập"} hasBackground={true} onClick={handleLogin} onClickArgs={{ email, password }} />

        <div className="flex flex-row gap-3">
            <p className="text-base">Bạn đã có tài khoản?</p>
            <p className="text-base underline text-blue-600 hover:cursor-pointer" onClick={switchToSignUp}>Đăng nhập ngay</p>
        </div>
    </div>)
}