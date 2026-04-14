import React from 'react';

function Hero() {
  return (
    <>
        <section className="landing">
            <div className="row vertical-center">
                <div className="col-lg-8 text-left pb-5">
                    <h1 className="display-3">Pavan Kumar Yadav</h1>
                    <p className="lead pl-2">
                        Full Stack Developer & Data Scientist
                    </p>
                </div>
                <div className="col-lg-4 text-center my-auto pb-5 rounded-circle"><img className="img-fluid rounded-circle"
                        src="./me.jpg" /></div>
            </div>
        </section>

    </>
  );
}

export default Hero;
