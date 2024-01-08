import { useState } from 'react';

function Search() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className={`py-2 pl-8 pr-4 rounded-full ${
          isFocused ? 'w-64' : 'w-48'
        } transition-all duration-500 focus:outline-none focus:shadow-outline`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="w-5 h-5 text-gray-400"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 21l-4.35-4.35" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </div>
    </div>
  );
}

export default Search