export const SelectField = ({ hasLabel, label, mapValueOptionText, value, setValue }) => {
    let labelStyle = "label text-base w-full"

    if (!hasLabel) {
        labelStyle += " hidden";
    }

    let fieldStyle = "flex flex-row gap-4 h-12 w-fit border rounded-lg overflow-hidden items-center w-full"

    const options = Object.entries(mapValueOptionText).map(([key, value]) => (
        <option key={key} value={key}>
            {value}
        </option>
    ));

    return <div className="flex flex-col gap-1 w-full">
        <p className={labelStyle}>{label}</p>

        <div className={fieldStyle}>

            <select className="w-full h-full rounded-lg px-2" value={value} onChange={(e) => setValue(e.target.value)}>
                {options}
            </select>
        </div>
    </div>;
}