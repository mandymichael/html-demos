import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
    <div>
        <nav role="main navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/good-dogs">Good Dogs</a></li>
                <li><a href="/bad-dog-myths">Bad Dog Myths</a></li>
            </ul>
        </nav>

        <main id="main" role="main">
            <h1 itemProp="headline">Dogs: They are good</h1>
            <p itemProp="description">We are dedicated to educating the world on why dogs are good, and how they can make your life good.</p>
            <div itemScope itemType="http://schema.org/Person">
                <span itemProp="author">Mandy Michael</span>,&nbsp;
                <time datetime="2018-08-03" itemProp="datePublished">August 3rd, 2018</time>
            </div>

            <article itemProp="articleBody" role="article">
                <h2>Why are dogs good?</h2>
                <p>Dogs are loyal, intelligent, devoted and affectionate, they are known to improve our physical and mental health.</p>

                <figure>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/Screen%20Shot%202018-04-02%20at%209.15.48%20PM.png" alt="A fluffy golden retriever" width="300" />
                    <figcaption>Michaelangelo <abbr title="Also Known As">AKA</abbr> "Jello"</figcaption>
                </figure>

                <p>The <dfn><abbr title="International Good Dog Association">IGDA</abbr></dfn>
is an international, not-for-profit organization responsible for determining that all dogs are good.</p>

                <blockquote>
                    <p>Dog owners are 34% more likely to get enough exercise than non-pet owners are.</p>
                    <cite>– A smart person</cite>
                </blockquote>
                <hr />

                <aside role='complementary'>
                    <h2>Related Links</h2>
                    <a href="/">IGDA</a>
                </aside>

                <h2>The benefits of owning a dog</h2>
                <ul>
                    <li>Studies have found dog owners have lower blood pressure than non-dog owners.</li>
                    <li>Regular walks with your dog will result in better fitness.</li>
                    <li>Dogs provide us with a sense of emotional wellbeing thanks to the unconditional love they give.</li>
                    <li>When dogs socialise with other dogs, their owners make new friends and socialise with other people as well.</li>
                </ul>

                <h3>Did you know?</h3>
                <p>There is evidence to suggest that we didn't domesticate wolves – they came to us first. The friendliest ones hung around our ancestors' campsites and so began the evolution of the modern dog.</p>

            </article>
        </main>

        <footer role='contentinfo'>
            <p>Made with love by Mandy Michael</p>
        </footer>
    </div>
)

export default SecondPage
