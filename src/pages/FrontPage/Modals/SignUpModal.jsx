import { Logo } from "../../../components/Logo/Logo"
import { TextInputField } from "../../../components/TextInputField/TextInputField"
import { Button } from "../../../components/Button/Button"
import ClearIcon from '@mui/icons-material/Clear';
import { SelectField } from "../../../components/SelectField/SelectField";
import { useState } from "react";
import { authService } from "../../../services/AuthService";

export const SignUpModal = ({ handleClearIcon, switchToLogIn, setIsLogin, setUserName }) => {

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [sex, setSex] = useState('Male');
    const [roles, setRoles] = useState('STUDENT');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSignUp = async ({ email, fullName, phoneNum, sex, roles, password2 }) => {
        authService.createAccount({
            "name": fullName,
            "email": email,
            "password": password2,
            "roles": roles,
            "address": "",
            "sex": sex,
            "phone": phoneNum,
            "degree": "Master",
            "birthday": "1990-05-20"
        }).then((response) => {
            if (!response) {
                alert("Internal server error. Please try again")
            } else {
                alert("Create account successfully")

                setIsLogin(true);
                setUserName(response.userName)

                if (response.userRole === "STUDENT") {
                    // Navigate to /student
                    window.location.href = '/student';
                } else if (response.userRole === "TEACHER") {
                    // Navigate to /instructor
                    window.location.href = '/instructor';
                }
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
            <p>Bắt đầu hành trình của bạn</p>
        </div>

        <TextInputField hasLabel={true} value={email} onChangeHandle={setEmail} inputType={"email"} label={"Email"} placeholderValue={"yourEmail@example.com"} hasIcon={true} iconName={"email"} />

        <TextInputField hasLabel={true} value={fullName} onChangeHandle={setFullName} inputType={"text"} label={"Họ và tên"} placeholderValue={"Họ và tên của bạn"} hasIcon={false} />

        <TextInputField hasLabel={true} value={phoneNum} onChangeHandle={setPhoneNum} inputType={"text"} label={"Số điện thoại"} placeholderValue={"Số điện thoại của bạn"} hasIcon={false} />

        <SelectField value={sex} setValue={setSex} hasLabel={true} label={"Giới tính"} mapValueOptionText={{ 'Male': 'Nam', 'Female': 'Nữ' }} />

        <SelectField value={roles} setValue={setRoles} hasLabel={true} label={"Chọn vai trò"} mapValueOptionText={{ 'STUDENT': 'Học viên', 'TEACHER': 'Giảng viên' }} />

        <TextInputField hasLabel={true} value={password1} onChangeHandle={setPassword1} inputType={"password"} label={"Mật khẩu"} placeholderValue={"Nhập mật khẩu của bạn"} hasIcon={true} iconName={"lock"} />

        <TextInputField hasLabel={true} isError={password1 !== password2} errorMessage={"Hai mật khẩu không trùng nhau"} value={password2} onChangeHandle={setPassword2} inputType={"password"} label={"Mật khẩu"} placeholderValue={"Nhập mật khẩu của bạn"} hasIcon={true} iconName={"lock"} />

        <Button fullWidth={true} label={"Tạo tài khoản"} hasBackground={true} onClick={handleSignUp} onClickArgs={{ email, fullName, phoneNum, sex, roles, password2 }} />

        <div className="flex flex-row gap-3">
            <p className="text-base">Bạn chưa có tài khoản?</p>
            <p className="text-base underline text-blue-600 hover:cursor-pointer" onClick={switchToLogIn}>Tạo tài khoản ngay</p>
        </div>
    </div>)
}