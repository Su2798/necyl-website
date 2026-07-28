import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-2 rounded font-medium transition-colors duration-300";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;