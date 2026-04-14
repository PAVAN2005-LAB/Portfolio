import React from 'react';

function Vision() {
  return (
    <>
      <section id="vision" className="mt-5 mb-5 pt-4 pb-4 text-center">
        <h1 className="display-4 font-weight-bold mb-4">My Mission</h1>
        <h1 className="bold-text bg-text">Purpose</h1>
        
        <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
                <div className="p-5 shadow-sm rounded bg-white" style={{ borderTop: '5px solid #00D8FF', borderRadius: '15px' }}>
                    <h3 className="font-weight-light font-italic" style={{ lineHeight: '1.6', fontSize: '1.8rem' }}>
                        &quot;I am driven to build solutions that elevate my <strong style={{color: '#00D8FF'}}>college</strong>, contribute to the technological advancement of my <strong style={{color: '#00D8FF'}}>country</strong>, and ultimately leave a lasting positive impact on this <strong style={{color: '#00D8FF'}}>world</strong>.&quot;
                    </h3>
                    <div className="mt-4">
                        <p className="lead text-muted" style={{ fontSize: '1.1rem' }}>
                            Whether through scalable web platforms, data-driven AI solutions, or volunteering in my community, my goal is to leverage computer science not just for personal growth, but to solve real human challenges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Vision;
