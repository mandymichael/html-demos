import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <header>
        <h1>Dogs: They are good</h1>
        <time datetime="2018-08-03">August 3rd, 2018</time>
    </header>

    <nav role="navigation">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/good-dogs">Good Dogs</a></li>
            <li><a href="/">Sleeping Dogs</a></li>
            <li><a href="/">Fluffy Dogs</a></li>
        </ul>
    </nav>

<main id="main" role="main" tabindex="0">
        <section>
            <h2>Why are dogs good?</h2>
            <p>Doggo ipsum the neighborhood pupper, shoob you are doin me a concern. Noodle horse smol borking</p>
            <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/Screen%20Shot%202018-04-02%20at%209.15.48%20PM.png" alt="A fluffy golden retriever" width="300" />
                <figcaption>Michaelangelo AKA "Jello"</figcaption>
            </figure>
            <hr />

            <h3>Big ol pupper</h3>

            <ul>
                <li>Corgo you are a long doggo, many pats.</li>
                <li>Blop adorable doggo what a nice floof</li>
                <li>biscit smol borking doggo with a long snoot for pats</li>
            </ul>

            <h2>He made many woofs</h2>
            <p>Shoober very good boys and girls smol aqua doggo</p>
            <blockquote>
                <p>Long doggo pupperino, many pats extremely cuuuuuute.</p>
                <cite>– floofy pupper, neighborhood</cite>
            </blockquote>
	    </section>
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
