import React from "react";

const Button = ({ text, icon, bgColor, textColor, borderColor, onClick }) => (
  <button
    onClick={onClick} // Menambahkan event handler onClick
    className={`all-[unset] box-border w-[404px] h-11 flex items-center justify-center gap-2 border ${bgColor} ${borderColor}`}
  >
    <img className="w-5 h-5" alt={text} src={icon} />
    <div
      className={`text-base ${textColor} font-normal [font-family:'Poppins-Regular',Helvetica]`}
    >
      {text}
    </div>
  </button>
);

export default Button;
