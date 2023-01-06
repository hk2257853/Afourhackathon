import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // css
import "bootstrap/dist/js/bootstrap.bundle.min"; // js
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "emailjs-com"
import "../Components/css/style.css"

const ContactUs = () => {

  function handleOnSubmit(e)
  {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm('service_kfvnhvq', 'template_asr05xw', e.target, '43cP1PiWW5qcMByeg')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });

    e.target.reset()
  }

  return (
    <>
        <div className="user-skill-form-main-container flex-container formbg">
            <div className="skill-catalogue flex-container">
                <h1 className="add-skill-h1">Send Us a Message</h1>
                <div className="catalogue-container flex-container">
                  <form action="" onSubmit={handleOnSubmit} className="needs-validation">
                    <input type="text" className=" skill-form-form-select" name="subject" placeholder="Enter Subject" required/>
                    <textarea type="text" className=" skill-form-form-select" name="message" placeholder="Enter Message" required/>
                    <input type="submit" className="btn btn-primary skill-form-btn skill-form-add"/>
                    <input type="reset" className="btn btn-primary skill-form-btn skill-form-clear"/>
                  </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default ContactUs;
