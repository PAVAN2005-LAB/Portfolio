import React from 'react';

function Achievements() {
    return (
        <>
            <section id="achievements">
                <h1 className="display-4 mt-5">Achievements</h1>
                <h1 className="bold-text bg-text">Honours</h1>
                <div className="row d-flex">
                    <div className="col-md-10">
                        <div className="mt-3">

                            <div className="py-4">
                                <div className="desc">
                                    <h4>Problem Solving</h4>
                                </div>
                                <div>
                                    <li>Solved 200+ coding problems over various platforms. </li>
                                    <li><a target="_blank" href="https://leetcode.com/u/Pavanslab_2005/">LeetCode Profile</a>
                                    </li>
                                    <li> max. Pupil, 1189 at <a target="_blank"
                                        href="https://codeforces.com/profile/pavan.yadav.27">Codeforces</a></li>

                                    <li><a target="_blank"
                                        href="https://www.geeksforgeeks.org/profile/pavanyaadwp">GeeksForGeeks
                                        Profile</a></li>



                                </div>
                            </div>




                            <div className="py-4">
                                <div className="desc">
                                    <h4>TCScodevita</h4>
                                </div>
                                <div>
                                    <li>secured global rank 4918 and 740 in TCScodevita session 12 and session 13 respectively.
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Achievements;
