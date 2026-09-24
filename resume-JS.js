// Resume's javascript

let header = document.querySelector("header");
let myName = document.createElement("h3");
myName.textContent = "Evelyn King";
header.appendChild(myName);

let navBar = document.createElement("nav");
header.appendChild(navBar);

let homeLink = document.createElement("a");
homeLink.href = "/index.html";
homeLink.textContent = "Home";
navBar.appendChild(homeLink);

let portfolioLink = document.createElement("a");
portfolioLink.href="/portfolio.html"
portfolioLink.textContent = "Portfolio"
navBar.appendChild(portfolioLink);
