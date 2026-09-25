// Portfolio's javascript

window.addEventListener("DOMContentLoaded", domLoaded);
let header = document.querySelector("header");
let footer = document.querySelector("footer");

function domLoaded() {
    header.innerHTML = 
            `<h3>Evelyn King</h3>
            <nav role="navigation">
                <a id="portfolio-home" href="/index.html">Home</a>
                <a id="portfolio-resume" href="/resume.html">Resume</a>
                <a id="portfolio-portfolio" href="/portfolio.html">Portfolio</a>
            </nav>`;
    
    footer.innerHTML = 
    `<p>Evelyn King</p>
    <a href="https://app.joinhandshake.com/profiles/y8kxvs" id="handshake-logo-link"><img src = "handshakelogo.png" alt="Handshake profile page" id="handshake-logo"></a>`;

}