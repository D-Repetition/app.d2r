import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button {...props}  className={["px-5 py-3 rounded-4xl cursor-pointer flex items-center gap-2.5", props.className].join(" ")}>
            {children}
        </button>
    );
};

export default Button;