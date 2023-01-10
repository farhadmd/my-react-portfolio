import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Farhad", hasColor: "" },
  { meta: "last name", metaInfo: "Reza", hasColor: "" },
  { meta: "Age", metaInfo: "21 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Bangladeshi", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Chittagong, Bangladesh", hasColor: "" },
  { meta: "phone", metaInfo: "+880163759330", hasColor: "" },
  { meta: "Email", metaInfo: "md6farhad@gmail.com", hasColor: "" },
  { meta: "Skype", metaInfo: " farhad.reza", hasColor: "" },
  { meta: "langages", metaInfo: "English, French", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
