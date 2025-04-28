import React, { useState } from "react"

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev) //toggle open and close
    }

    const handleSelect = (option) => {
        onSelect(option)
        setIsOpen(false) //closes dropdown after selecting an option
    }

    return (
        <div className="relative inline-block">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none" onClick={toggleDropdown}>
                Amount
            </button>
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown