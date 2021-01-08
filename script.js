class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav>
                <div class="container">
                    <div class="nav-wrapper">
                        <div class="logo">
                            <h1>My App</h1>
                        </div>
                        <ul class="menu">
                            <li><a href="#home.html">Home</a></li>
                            <li><a href="#about.html">About</a></li>
                            <li><a href="#services.html">Services</a></li>
                            <li><a href="#contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <div class="container">
                <p>Copyright 2020.</p>
            </div>
        </footer>
        `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

const callContent = () => {
  var fragmentId = location.hash.substr(1);
  fetch(fragmentId)
    .then((res) => {
      const data = res.text().then((content) => {
        document.getElementById("app").innerHTML = content;
      });
    })
    .catch(() => alert("Error !"));
};

if (!location.hash) {
  location.hash = "#home.html";
}

callContent();

window.addEventListener("hashchange", callContent);
