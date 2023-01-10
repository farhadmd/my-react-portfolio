import React from "react";

const experienceContent = [
  {
    year: "   April 2019 - January 2021",
    position: " Shopify Expert and Web Designer",
    compnayName: "Siren Floral Co",
    details: `  Design engaging and effective category and marketing landing pages. Creatively solve development problems and translate technical requirements and mockups into site features/improvements. Perform ongoing website maintenance including functional changes to Shopify eCommerce stores.Web design:CSS:HTML5`,
  },
  /*
  {
    year: "2013 - 2018",
    position: " UI/UX Designer",
    compnayName: "Themeforest",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "2005 - 2013",
    position: "Consultant",
    compnayName: "Videohive",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
  */
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
