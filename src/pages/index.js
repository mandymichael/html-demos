import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div onClick={() =>  window.location='/'}>Home</div>
                        <div onClick={() =>  window.location='http://www.google.com/'}>Good Dogs</div>
                        <div onClick={() =>  window.location='http://www.google.com/'}>Bad Dog Myths</div>
                    </div>
                </div>

                <div>
                    <div>Dogs: They are good</div>
                    <div>We are dedicated to educating the world on why dogs are good, and how they can make your life good.</div>
                    <div>By <div>Mandy Michael</div>, <div>August 3rd, 2018</div></div>
                </div>

                <div>Why are dogs good?</div>
                <div>Dogs are loyal, intelligent, devoted and affectionate, they are known to improve our physical and mental health.</div>
                <div>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/Screen%20Shot%202018-04-02%20at%209.15.48%20PM.png" alt="A fluffy golden retriever" width="300" />
                    <div>Michaelangelo AKA "Jello"</div>
                </div>

                <div>The <div><span title="International Good Dog Association">IGDA</span></div>
is an international, not-for-profit organization responsible for determining that all dogs are good.</div>

                <div></div>

                <div>The benefits of owning a dog</div>

                <div>
                    <div>Studies have found dog owners have lower blood pressure than non-dog owners.</div>
                    <div>Regular walks with your dog will result in better fitness.</div>
                    <div>Dogs provide us with a sense of emotional wellbeing thanks to the unconditional love they give.</div>
                    <div>When dogs socialise with other dogs, their owners make new friends and socialise with other people as well. </div>
                </div>

                <div>Did you know?</div>
                <div>There is evidence to suggest that we didn't domesticate wolves – they came to us first. The friendliest ones hung around our ancestors' campsites and so began the evolution of the modern dog.</div>
                <div>
                    <div>Dog owners are 34% more likely to get enough exercise than non-pet owners are.</div>
                    <div>– A smart person</div>
                </div>

            </div>
            <div>
                <div>Related Links</div>
                <div onClick={() =>  window.location='/'}>IGDA</div>
            </div>
        </div>

        <div>
            <div>
                <div>
                    <div onClick={() =>  window.location='/'}>Home</div>
                    <div onClick={() =>  window.location='http://www.google.com/'}>Good Dogs</div>
                    <div onClick={() =>  window.location='http://www.google.com/'}>Bad Dog Myths</div>
                </div>
            </div>
        </div>
    </div>
)

export default IndexPage
