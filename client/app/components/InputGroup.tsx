import React from "react"
import cls from "classnames"

interface InputGroupProps{
    className?: string;
    type?: string;
    placehoder?: string;
    value: string;
    error: string | undefined
    setValue: (str: string) => void
}

const InputGroup: React.FC<InputGroupProps> = ({
    className = "mb-2",
    type = "text",
    placehoder = "",
    value,
    error,
    setValue
}) => {
    return(
        <div className={className}>
            <input 
                type={type}
                style={{minWidth: 300}}
                className={
                    cls(`w-full p-3 transition duration-200 border border-gray-500 rounded bg-gray-800 focus:bg-900 hover:bg-900`, 
                    {"border-red-500": error}
                )}
                placeholder={placehoder}
                value={value}
                onChange={(e)=> setValue(e.target.value)}
            />
            <small className="font-medium text-red-500">{error}</small>
        </div>
    )
}

export default InputGroup