import logo_vector from "../../assets/svg/logo.svg";

export const Logo = ({ size, colorMode }) => {
    let containerStyle = "logo flex flex-row gap-2 px-2 py-1 w-fit items-center align-middle";
    let textStyle = "h-fit font-bold"

    if (!size || !colorMode) {
        containerStyle += " h-10";
        textStyle += ""
    }

    if (size === "large") {
        containerStyle += " h-15";
        textStyle += " text-xl"
    }

    if (colorMode === "light") {
        textStyle += " text-white"
    }

    return (<div className={containerStyle}>
        <img
            className="w-full h-[87.52%]"
            alt="Vector"
            src={logo_vector}
        />
        <p className={textStyle}>EduLearn</p>
    </div>)
}
