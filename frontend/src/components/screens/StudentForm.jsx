import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMobileAlt,
  FaWhatsapp,
  FaAddressBook,
  FaUserTie,
  FaGraduationCap,
  FaCalendarAlt,
  FaImage,
  FaMale,
  FaFemale,
} from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";

const StudentForm = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [session, setSession] = useState("");
  const [admissionDate, setAdmissionDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [studentPicture, setStudentPicture] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [cellNumberCountry, setCellNumberCountry] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [whatsappNumberCountry, setWhatsappNumberCountry] = useState("");
  const [address, setAddress] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [fatherEducation, setFatherEducation] = useState("");
  const [guardianInformation, setGuardianInformation] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto container px-5 py-24">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Left column */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4 flex flex-wrap -m-4 bg-slate-500">
            <div className="grid grid-cols-2 gap-6 p-4 md:w-1/3">
              <div className="col-span-2">
                <label
                  htmlFor="registration-number"
                  className="block text-sm font-medium"
                >
                  Registration Number
                </label>
                <input
                  type="text"
                  name="registration-number"
                  id="registration-number"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="student-name"
                  className="block text-sm font-medium"
                >
                  Student Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="student-name"
                    id="student-name"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="John Doe"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="class" className="block text-sm font-medium">
                  Class
                </label>
                <select
                  id="class"
                  name="class"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="">-- Select Class --</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Pre-KG">Pre-KG</option>
                  <option value="KG">KG</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="session" className="block text-sm font-medium">
                  Session
                </label>
                <input
                  type="text"
                  name="session"
                  id="session"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={session}
                  onChange={(e) => setSession(e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="admission-date"
                  className="block text-sm font-medium"
                >
                  Admission Date
                </label>
                <input
                  type="date"
                  name="admission-date"
                  id="admission-date"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={admissionDate}
                  onChange={(e) => setAdmissionDate(e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="student-picture"
                  className="block text-sm font-medium"
                >
                  Student Picture (Max. 500kb)
                </label>
                <div className="mt-1 flex items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 overflow-hidden">
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
              </div>
              <div className="col-span-2">
                <label htmlFor="dob" className="block text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="gender" className="block text-sm font-medium">
                  Gender
                </label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="cell-number"
                  className="block text-sm font-medium"
                >
                  Cell Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                      value={cellNumberCountry}
                      onChange={(e) => setCellNumberCountry(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="cell-number" className="sr-only">
                        Cell Number
                      </label>
                      <input
                        type="text"
                        name="cell-number"
                        id="cell-number"
                        autoComplete="tel"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
                        value={cellNumber}
                        onChange={(e) => setCellNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="whatsapp-number"
                  className="block text-sm font-medium"
                >
                  WhatsApp Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country-code" className="sr-only">
                      Country Code
                    </label>
                    <select
                      id="country-code"
                      name="country-code"
                      className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                      value={whatsappNumberCountry}
                      onChange={(e) => setWhatsappNumberCountry(e.target.value)}
                    >
                      <option value="+1">+1</option>
                      <option value="+91">+91</option>
                      <option value="+92">+92</option>
                      <option value="+93">+93</option>
                    </select>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="whatsapp-number" className="sr-only">
                      WhatsApp Number
                    </label>
                    <input
                      type="text"
                      name="whatsapp-number"
                      id="whatsapp-number"
                      autoComplete="tel"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
