import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Home = () => {
  const [email, setEmail] = useState("");
  const [studentPicture, setStudentPicture] = useState("");

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file.size <= 500000) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setStudentPicture(reader.result);
      };
    } else {
      alert("File size should not be greater than 500kb");
    }
  };

  return (
    <>
      <section className="text-white bg-blue-700">
        <div className="container p-10 mx-auto bg-red-500">
          <form>
            <div className="flex flex-wrap -m-4 bg-yellow-400  ">
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-gray-800 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden   shadow-gray-900 shadow-lg">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-100 mb-1 mx-4 my-4"
                    >
                      User name
                    </label>
                    <div className="mt-1 mx-4">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        // required
                        // value={email} onChange={handleEmailChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 shadow-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-100 mb-1 mx-4"
                    >
                      User name
                    </label>
                  </div>
                  <div className="mt-1 mx-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                      // value={email}
                      // onChange={handleEmailChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 shadow-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-100 mb-1 mx-4"
                    >
                      User name
                    </label>
                  </div>
                  <div className="mt-1 mx-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                      // value={email}
                      // onChange={handleEmailChange}
                      className="appearance-none w-full block px-3 py-2 border border-gray-600 rounded-md bg-gray-800 shadow-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-100 mb-1 mx-4"
                    >
                      User name
                    </label>
                  </div>
                  <div className="mt-1 mx-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                      // value={email}
                      // onChange={handleEmailChange}
                      className="appearance-none w-full block px-3 py-2 border border-gray-600 rounded-md bg-gray-800 shadow-sm placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="student-picture"
                      className="block text-sm font-medium mx-4 mt-1"
                    >
                      Student Picture (Max. 500kb)
                    </label>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 border border-white mx-4 overflow-hidden">
                      {studentPicture ? (
                        <img
                          src={studentPicture}
                          alt="Student"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <FaUser className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <label
                      htmlFor="student-picture-upload"
                      className="ml-5 cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Choose Picture
                      <input
                        type="file"
                        name="student-picture-upload"
                        id="student-picture-upload"
                        className="sr-only"
                        accept="image/*"
                        onChange={handlePictureUpload}
                      />
                    </label>
                  </div>

                  <div className="p-6">
                    
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/721x401"
                    alt="blog"
                  />{" "}
                  */{"}"}
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      The 400 Blows
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  {"{"}/*{" "}
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/722x402"
                    alt="blog"
                  />{" "}
                  */{"}"}
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
