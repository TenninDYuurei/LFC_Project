import React from "react";
import { useNavigate } from "react-router-dom";
import './about.css'

export default function About () {

    const navigate = useNavigate();


return  <div className="aboutComp">
            <div className="firstSect">
                <h2>
                    About LFC
                </h2>
                <div>
                    <p>
                        "The time has come to liberate the world from all oppressions of darkness through the preaching of the word of faith, and I am sending you to undertake this task."
                    </p>
                    <p>
                        God called our father Bishop David O. Oyedepo to undertake this precious task over forty years ago, and what started off small then has grown by the grace of God to become one of the largest Christian denominations in the world.
                    </p>
                    <p>
                        Here at Living Faith Church, the oppressed are relieved of their burdens, broken families are restored, the sick receive their healing, and many wondroud things are made possible by the mighty hand of God.
                    </p>
                    <p>
                        Join us this sunday or wednesday, at Living Faith Church Rumuodumaya and watch as the power resident in God's word transforms your life.
                    </p>
                </div>
            </div>
            <div className='services secondSect'>
                <div>
                    <h3 className="mainh3">
                        Our Service Schedule
                    </h3>
                </div>
                <div className='serviceDays'>
                    <div>
                        <h3>
                            Sundays
                        </h3>
                        <p>1st Service: 6:30AM - 8:15AM</p>
                        <p>2nd Service: 8:15AM - 10:00AM</p>
                        <p>3rd Service: 10:00AM - 11:50AM</p>
                    </div>
                    <div>
                        <h3>
                            Wednesdays
                        </h3>
                        <p>Mid-week Service: 5:00PM - 6:30PM</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>{navigate(-1)}} className='backBtn'>
                Go Back
            </button>
        </div>
}