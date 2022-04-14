import React from 'react'
import slider1 from "../img/slider1.jpg";
import slider2 from "../img/slider2.jpg";
import slider3 from "../img/slider3.jpg";
import slider4 from "../img/slider4.jpg";
import slider5 from "../img/slider5.jpg";
import slider6 from "../img/slider6.jpg";
import slider7 from "../img/slider7.jpg";
import questionmark from "../img/questionmark.jpg";
export const Home = () => {
    return (
        <>
            <div className="sliders">
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                            aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                            aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"
                            aria-label="Slide 7"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Do You Know ?</h5>
                                <p>Regular walking or playing with pets can decrease blood pressure, cholesterol levels, and triglyceride
                                    levels. Pets can help manage loneliness and depression by giving us companionship.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Do You Know ?</h5>
                                <p>Animals can serve as a source of comfort and support. Therapy dogs are especially good at this. They’re
                                    sometimes brought into hospitals or nursing homes to help reduce patients’ stress and anxiety.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Do You Know ?</h5>
                                <p>Dogs may also aid in the classroom. One study found that dogs can help children with ADHD focus their
                                    attention.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider4} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Do You Know ?</h5>
                                <p>Kids who read to the real animals showed better social skills and more sharing, cooperation, and
                                    volunteering. They also had fewer behavioral problems.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider5} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Do You Know ?</h5>
                                <p>A study found that children with autism spectrum disorder were calmer while playing with guinea pigs in
                                    the classroom.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider6} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Do You Know ?</h5>
                                <p>A recent study showed that caring for fish helped teens with diabetes better manage their disease.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider7} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Do You Know ?</h5>
                                <p>Interacting with animals has been shown to decrease levels of cortisol and lower blood pressure. Other
                                    studies have found that animals can reduce loneliness and boost your mood.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="more">
                <div className="box" id="box-1">
                    <h3>Picking the right pet</h3>
                    <div className="content">
                        <div className="written">
                            <span>Ask yourself these questions before getting a pet:</span>
                            <span>How long will this animal live?</span>
                            <span>What does the pet eat?</span>
                            <span>How much exercise does the pet need?</span>
                            <span>How large will it become?</span>
                            <span>How much will veterinary care cost?</span>
                            <span>Do I have enough time to properly care for and clean up after the pet?</span>
                            <span>What type of habitat does this pet need to be healthy?</span>
                            <span>What type of exercise does this pet need?</span>
                            <span>Are pets allowed in my house, apartment, or condominium?</span>
                        </div>
                        <div className="content-img">
                            <img src={questionmark} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
