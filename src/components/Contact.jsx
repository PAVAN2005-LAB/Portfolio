import React from 'react';

function Contact() {
  return (
    <>
    <section id="contact">
        <h1 className="display-4 mt-5">Let's Talk</h1>
        <h1 className="bold-text bg-text">Contact</h1>
        <div className="text-left">
            <div className="pt-5">
                <h2 className="mb-5">Want to connect?
                    <br />
                    My inbox is always open!
                </h2>
                <ul className="social-links list-unstyled mt-4">
                    <li><a target="_blank" href="mailto:pavan.yadav.sde@gmail.com">
                            <ion-icon name="mail-outline"></ion-icon>
                        </a></li>
                    <li><a target="_blank" href="https://github.com/PAVAN2005-LAB">
                            <ion-icon name="logo-github"></ion-icon>
                        </a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/pavan-kumar-yadav-634904363/">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>

                </ul>
            </div>
        </div>
    </section>

    </>
  );
}

export default Contact;
