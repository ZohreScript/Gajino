// components/TextBox.tsx
import React from 'react';

interface TextBoxProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({ value, placeholder, disabled }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-4 py-2 border ${
        disabled ? 'bg-gray-200' : 'bg-white'
      } border-gray-300 rounded-md focus:outline-none`}
    />
  );
};

export default TextBox;
