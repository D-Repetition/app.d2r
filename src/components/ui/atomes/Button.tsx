import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button {...props}  className={["px-6 py-4 rounded-4xl cursor-pointer flex items-center justify-center gap-2.5 h-14 lg:max-h-14 max-lg:text-[14px]", props.className].join(" ")}>
            {children}
        </button>
    );
};

export default Button;