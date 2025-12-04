import { Logo } from "../../../components/Logo/Logo"
import { TextInputField } from "../../../components/TextInputField/TextInputField"
import { Button } from "../../../components/Button/Button"
import ClearIcon from '@mui/icons-material/Clear';
import { SelectField } from "../../../components/SelectField/SelectField";

export const SignUpModal = ({ handleClearIcon, switchToLogIn }) => {
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

        <TextInputField hasLabel={true} inputType={"email"} label={"Email"} placeholderValue={"yourEmail@example.com"} hasIcon={true} iconName={"email"} />

        <TextInputField hasLabel={true} inputType={"text"} label={"Họ và tên đệm"} placeholderValue={"Họ và tên đệm của bạn"} hasIcon={false} />

        <TextInputField hasLabel={true} inputType={"text"} label={"Tên"} placeholderValue={"Tên của bạn"} hasIcon={false} />

        <SelectField label={"Chọn vai trò"} mapValueOptionText={{ 'STUDENT': 'Học viên', 'TEACHER': 'Giảng viên' }} />

        <TextInputField hasLabel={true} inputType={"password"} label={"Mật khẩu"} placeholderValue={"Nhập mật khẩu của bạn"} hasIcon={true} iconName={"lock"} />

        <TextInputField hasLabel={true} inputType={"password"} label={"Mật khẩu"} placeholderValue={"Nhập mật khẩu của bạn"} hasIcon={true} iconName={"lock"} />

        <Button fullWidth={true} label={"Tạo tài khoản"} hasBackground={true} />

        <div className="flex flex-row gap-3">
            <p className="text-base">Bạn chưa có tài khoản?</p>
            <p className="text-base underline text-blue-600 hover:cursor-pointer" onClick={switchToLogIn}>Tạo tài khoản ngay</p>
        </div>
    </div>)
}