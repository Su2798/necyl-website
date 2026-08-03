import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-2 rounded-lg font-medium transition-all cursor-pointer duration-300 font-leadership";
  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
