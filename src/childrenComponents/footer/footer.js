import React from 'react';
import { footerLinks } from './footerLinks';
import './footer.css';

function Footer() {

    const links = footerLinks.map(
        link => <li><a href={link.link}>{link.platform}</a></li>
        )
        



    return <footer>
        <div className='outside'>
            <div className='firstFooter'>
                <div className='contactLink'>
                    <h3>
                        Contact us on:
                    </h3>
                    <div className='links'>
                        <ul style={{display:"flex"}}
                        >
                            {links}
                        </ul>
                    </div>
                </div>
                <p>
                    We'd love to have you join us for service
                </p>
            </div>
            <hr/>
            <div className='secondFooter'>
                <div className='addressSide'>
                    <h3>
                        Living Faith Church <span>Rumuodumaya</span>
                    </h3>
                    <p>
                        Address number, street number, location details
                    </p>
                </div>
                <div className='services'>
                    <div>
                        <h3>
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
            </div>
        </div>
        <div className='cover'></div>
    </footer>
}

export default Footer