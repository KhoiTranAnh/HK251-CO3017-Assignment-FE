import EmailIcon from "../../assets/svg/email.svg"
import LockIcon from "../../assets/svg/lock.svg"


export const TextInputField = ({ hasLabel, label, value, placeholderValue, inputType, isError, errorMessage, hasIcon, iconName, onChangeHandle }) => {
    let labelStype = "label text-base w-full"

    if (!hasLabel) {
        labelStype += " hidden";
    }


    let iconStype = "h-5 w-5";

    if (!hasIcon) {
        iconStype += " hidden"
    }

    let iconSource;

    if (iconName === "email") {
        iconSource = EmailIcon;
    } else if (iconName === "lock") {
        iconSource = LockIcon;
    }

    let fieldStyle = "flex flex-row gap-4 h-12 w-fit border rounded-lg overflow-hidden items-center w-full"

    if (isError) {
        fieldStyle += " border-red-600"
    } else {
        fieldStyle += " border-gray-400"
    }

    if (hasIcon) {
        fieldStyle += " pl-2.5"
    }

    let errorStyle = "errorMessage text-sm text-red-700";

    if (!isError) {
        errorStyle += " hidden"
    }


    return <div className="flex flex-col gap-1 w-full">
        <p className={labelStype}>{label}</p>

        <div className={fieldStyle}>

            <img
                src={iconSource}
                className={iconStype} />

            <input
                type={inputType}
                className="px-3 align-middle w-full h-full rounded-lg"
                placeholder={placeholderValue}
                value={value}
                onChange={(e) => onChangeHandle(e.target.value)}
            />
        </div>
        <p className={errorStyle}>{errorMessage}</p>

    </div>;
}