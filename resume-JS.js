// Resume's javascript

let header = document.querySelector("header");
let footer = document.querySelector("footer");
let myName = document.createElement("h3");
myName.textContent = "Evelyn King";
header.appendChild(myName);

let navBar = document.createElement("nav");
header.appendChild(navBar);

let homeLink = document.createElement("a");
homeLink.href = "/index.html";
homeLink.textContent = "Home";
navBar.appendChild(homeLink);

let resumeLink = document.createElement("a");
resumeLink.href = "/resume.html";
resumeLink.textContent = "Resume";
navBar.appendChild(resumeLink);

let portfolioLink = document.createElement("a");
portfolioLink.href="/portfolio.html"
portfolioLink.textContent = "Portfolio"
navBar.appendChild(portfolioLink);

let handshakeLink = document.createElement("a");
handshakeLink.href = "https://app.joinhandshake.com/profiles/y8kxvs";
handshakeLink.textContent = "Handshake Profile";
footer.appendChild(handshakeLink)

let techButton = document.getElementById("tech")
let techSection = document.getElementById("tech-section")
techButton.addEventListener("click", function() {
    this.style.backgroundColor = "#808080";
    workButton.style.backgroundColor = "blue";
    eduButton.style.backgroundColor = "blue";
    techSection.hidden = false;
    workSection.hidden = true;
    eduSection.hidden = true;
})

let workButton = document.getElementById("work")
let workSection = document.getElementById("work-section")
workButton.addEventListener("click", function() {
    techButton.style.backgroundColor = "blue";
    this.style.backgroundColor = "#808080";
    eduButton.style.backgroundColor = "blue";
    techSection.hidden = true;
    workSection.hidden = false;
    eduSection.hidden = true;
})

let eduButton = document.getElementById("edu")
let eduSection = document.getElementById("edu-section")
eduButton.addEventListener("click", function() {
    this.style.backgroundColor = "#808080";
    techButton.style.backgroundColor = "blue";
    workButton.style.backgroundColor = "blue";
    techSection.hidden = true;
    workSection.hidden = true;
    eduSection.hidden = false;
})
