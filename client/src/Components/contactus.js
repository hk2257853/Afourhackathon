import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // css
import "bootstrap/dist/js/bootstrap.bundle.min"; // js
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "emailjs-com"
import emailpic from './images/emailpic.png'
import "../Components/style.css"

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
      <div className="contactbg d-flex justify-content-center align-items-center">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 h-100 d-flex align-items-center justify-content-center">
              <div className="">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <form action="" className="row g-4"  onSubmit={handleOnSubmit}>
                        <h3 className="m">Send Us a Message</h3>
                        <div className="col-12">
                          <label>Subject</label>
                          <div className="input-group">                            
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Subject"
                              name="subject"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>Message</label>
                          <div className="input-group">
                            <textarea
                              className="form-control textarea-size"
                              placeholder="Enter Message"
                              name="message"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-12">
                          <input
                            type="submit"
                            className="btn btn-primary px-4 float-end"                            
                          >                            
                          </input>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 text-white text-center pt-5">
                      <img src={emailpic}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
