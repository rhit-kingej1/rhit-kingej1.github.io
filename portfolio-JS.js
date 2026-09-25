// Portfolio's javascript

window.addEventListener("DOMContentLoaded", domLoaded);
let header = document.querySelector("header");
let footer = document.querySelector("footer");

function domLoaded() {
    header.innerHTML = 
            `<h3>Evelyn King</h3>
            <nav>
                <a id="portfolio-home" href="/index.html">Home</a>
                <a id="portfolio-resume" href="/resume.html">Resume</a>
                <a id="portfolio-portfolio" href="/portfolio.html">Portfolio</a>
            </nav>`;
    
    footer.innerHTML = '<a href="https://app.joinhandshake.com/profiles/y8kxvs">Handshake Profile</a>'

}