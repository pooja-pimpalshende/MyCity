import React, { useState } from 'react';
import ScholarshipComponent from './Scholarship';


function Allscholarship() {

  const [Scholarships, setScholarships] = useState([

    {
      title: "National Scholarships",
      description: "National Scholarships Portal is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled. National Scholarships Portal is taken as Mission Mode Project under National e-Governance Plan (NeGP).",
      url: "https://scholarships.gov.in/home"
    },

    {
      title: "Rani Durgavati Vishwavidyalaya, Jabalpur MP Scholarships",
      description: "Rani Durgavati Vishwavidyalaya, Jabalpur MP Scholarships. Implementation of New Scholarship Portal 2.00 for Post Matrix Scholarship Scheme through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled.",
      url: "http://www.rdunijbpin.org/1392/Scholarship"
    },

    {
      title: "MP State Scholarship Portal 2.0",
      description: "New Scholarship Portal 2.00 for Post Matrix Scholarship Scheme under Madhya Pradesh State through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled.",
      url: "http://scholarshipportal.mp.nic.in/Index.aspx"
    }

  ])


  return (
    <div>

      {
        Scholarships.length > 0
          ? Scholarships.map((scholar) => <ScholarshipComponent scholarshipcomponent={scholar} />)
          : "No Scholarships are available."
      }

    </div>



  );
}
export default Allscholarship;