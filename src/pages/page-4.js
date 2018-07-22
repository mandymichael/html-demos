import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
    <div>

        <nav role="navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/good-dogs">Good Dogs</a></li>
                <li><a href="/">Sleeping Dogs</a></li>
                <li><a href="/">Fluffy Dogs</a></li>
            </ul>
        </nav>

        <main id="main" role="main" tabindex="0">
                <h1 itemProp="headline">Dogs: They are good</h1>
                <div><p>Corgo you are a long doggo, many pats.</p></div>
                <div class="byline" itemScope itemType="http://schema.org/Person">
                    <span class="author" itemProp="author">Mandy Michael</span>,&nbsp;
                    <time class="published-date" datetime="2018-08-03" itemProp="datePublished">August 3rd, 2018</time>
                </div>

                <article itemProp="articleBody">
                <h2>Why are dogs good?</h2>
                <p><q cite="http://google.com">Dogs are the best</q>, doggo ipsum the neighborhood pupper, shoob you are doin me a concern. Noodle horse smol borking</p>
                <figure>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/Screen%20Shot%202018-04-02%20at%209.15.48%20PM.png" alt="A fluffy golden retriever" width="300" />
                    <figcaption>Michaelangelo AKA "Jello"</figcaption>
                </figure>
                <p>The <dfn><abbr title="International Good Dog Association">IGDA</abbr></dfn>
is an international, not-for-profit organization responsible for determining that all dogs are good.</p>
                <hr />

                <h3>Doggo ipsum the neighborhood pupper, shoob you are doin me a concern. Noodle horse smol borking</h3>
                <p>The Incomprehens<wbr/>ibilities of not loving dogs.</p>
                <ul>
                    <li>Doggo ipsum the neighborhood pupper, shoob you are doin me a concern. Noodle horse smol borking</li>
                    <li>Blop adorable doggo what a nice floof</li>
                    <li>biscit smol borking doggo with a long snoot for pats</li>
                </ul>

                <h2>He made many woofs</h2>
                <p>Shoober very good boys and girls smol aqua doggo</p>
                <blockquote>
                    <p>Long doggo pupperino, many pats <mark>extremely cuuuuuute</mark>.</p>
                    <cite>– floofy pupper, neighborhood</cite>
                </blockquote>
                <p>Doggo ipsum aqua doggo bork such treat stop it fren bork doge, sub woofer shoober heckin angery woofer woofer. dat tungg tho wow very biscit floofs. Floofs doing me a frighten woofer tungg aqua doggo, ur givin me a spook vvv long bois.</p>
                </article>
        </main>

        <footer>
            <section role="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/good-dogs">Good Dogs</a></li>
                    <li><a href="/">Sleeping Dogs</a></li>
                    <li><a href="/">Fluffy Dogs</a></li>
                </ul>
            </section>
        </footer>
    </div>
)

export default SecondPage
