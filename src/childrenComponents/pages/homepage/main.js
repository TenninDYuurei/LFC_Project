import React, {useState, useEffect } from 'react';
import './main.css';
import {Link} from 'react-router-dom'

export default function Main() {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    },[])


return (
    <main>

        <section id='welcomeView'>
            <div className="textbody">
                <h2>We are on our covenant highways</h2>
                <h1>Welcome to the official website of Living faith Church Rumuodumaya</h1>
                <h3>On this platform you can:</h3>
            </div>
            <div className="cover"></div>
        </section>

        <section id='welcomeView2'>
            <div className='textbody next'>
                <h2>Book an appointment with the resident pastor or request follow-up/visitation</h2>
                <p>Would you like to book an appointment to meet with the resident pastor?</p>
                <p>Click the link below and fill and submit the form provided to book your appointment.</p>

            <button>Book an appointment</button>
            </div>
            <div className="cover"></div>
        </section>

        <section id='welcomeView3'>
            <div className='textbody'>
                <h3>Watch uplifting and insightful short videos, meant to enliven and educate your spirit man. 
                    Also get access to snippets and wisdom quotes from our father in the lord, the bishop over this commission for your daily meditation.
                </h3>
                <div className="imageContainer">
                    <div className='pseudoImage'>Image with caption</div>
                    <div className='pseudoImage'>Image with caption</div>
                    <div className='pseudoImage'>Image with caption</div>
                </div>
            <button>See more</button>
            </div>
            <div className="cover"></div>
        </section>

        <section id='welcomeView4'>
            <div className='textbody'>
                <h3>Devotional Messages</h3>
                <div className='devotional'>
                <div className='devotionalM'>
                    <p>1/1/1111</p>
                    <p>Topic:</p>
                    <p>Bible verse:</p>
                    <p>Message: 
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, facere ex sint at alias ad vitae atque quae soluta explicabo dignissimos esse possimus. Consequuntur facere quisquam voluptas nemo enim molestias?</p>
                    </p>
                </div>
                <div className='devotionalM'>
                    <p>1/1/1111</p>
                    <p>Topic:</p>
                    <p>Bible verse:</p>
                    <p>Message: 
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, facere ex sint at alias ad vitae atque quae soluta explicabo dignissimos esse possimus. Consequuntur facere quisquam voluptas nemo enim molestias?</p>
                    </p>
                </div>
                <div className='devotionalM'>
                    <p>1/1/1111</p>
                    <p>Topic:</p>
                    <p>Bible verse:</p>
                    <p>Message: 
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, facere ex sint at alias ad vitae atque quae soluta explicabo dignissimos esse possimus. Consequuntur facere quisquam voluptas nemo enim molestias?</p>
                    </p>
                </div>
                <div className='devotionalM'>
                    <p>1/1/1111</p>
                    <p>Topic:</p>
                    <p>Bible verse:</p>
                    <p>Message: 
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, facere ex sint at alias ad vitae atque quae soluta explicabo dignissimos esse possimus. Consequuntur facere quisquam voluptas nemo enim molestias?</p>
                    </p>
                </div>
                </div>
            <button>See more</button>
            </div>
            <div className="cover"></div>
        </section>
        <section id='welcomeView5'>
            <div className='textbody'>
                <i>To Him who heareth prayers shall all flesh gather.</i>
                <h2>Send in your prayer requests for Divine intervention</h2>
                <p>Fill in the form with your prayer requests and submit.</p>
                <p>
                    Your prayer requests are strictly confidential and no attempt whatsoever will be made to contact you using the information you provide here, unless otherwise stated.
                </p>
                <div>
                    <div>
                        <h3 className='prayerNotice'>
                            Click on the button to send in your prayer request
                        </h3>
                    </div>
                    <div style={{overflow: "hidden"}}>
                        <button>Request Prayer</button>
                    </div>
                </div>
                </div>
            <div className="cover"></div>
        </section>
        {showBtn ?
            (<button className='toTopBtn' onClick={() => { window.scrollTo({ top: 0 }) }}>
            <Link>
                Back to top
            </Link>
        </button>): null }
    </main>
    )
}
