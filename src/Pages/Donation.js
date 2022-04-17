import React from 'react'

export const Donation = () => {
    return (
        <div className="container donation-container my-4">
            <div class="accordion" id="accordionExample">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>Red Paws Rescue</b>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                <strong>Address : </strong> <span>29A, 1st Floor, Hauz Khas Village, New Delhi, Delhi 110016</span>
                            </p>
                            <p>
                                <strong>Website : </strong> <span>https://www.redpawsrescue.com/</span>
                            </p>
                            <p>
                                <strong>Contact : </strong> <span>9958866067</span>
                            </p>

                        </div>
                    </div>
                </div>

                <hr/>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>Circle of Animal Lovers</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                <strong>Address : </strong> <span>E-67, DDA Flats, Saket, New Delhi, Delhi 110017</span>
                            </p>
                            <p>
                                <strong>Website : </strong> <span>http://ww1.circleofanimallovers.org/</span>
                            </p>
                            <p>
                                <strong>Contact : </strong> <span>011 4057 2892</span>
                            </p>

                        </div>
                    </div>
                </div>

                <hr/>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>Jeevashram</b>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                <strong>Address : </strong> <span>near Shiv Temple, Golden Gate, Rajokri, New Delhi, Delhi 110038</span>
                            </p>
                            <p>
                                <strong>Website : </strong> <span>http://jeevashram.org/index.php</span>
                            </p>
                            <p>
                                <strong>Contact : </strong> <span>011 2412 4114</span>
                            </p>

                        </div>
                    </div>
                </div>

                <hr/>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <b>Animal Wellness Institue</b>
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                <strong>Address : </strong> <span>Grand Trunk Rd, Alipur Village, Delhi, 110036</span>
                            </p>
                            <p>
                                <strong>Website : </strong> <span>https://www.theanimalwellnessinstitute.org/</span>
                            </p>
                            <p>
                                <strong>Contact : </strong> <span>78385 56716</span>
                            </p>

                        </div>
                    </div>
                </div>

                <hr/>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <b>Stray Relief</b>
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                <strong>Address : </strong> <span>2303, Pocket 2, Sector D, Vasant Kunj, New Delhi, Delhi 110070</span>
                            </p>
                            <p>
                                <strong>Website : </strong> <span>https://www.strawindia.org/</span>
                            </p>
                            <p>
                                <strong>Contact : </strong> <span>98385 56716</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}