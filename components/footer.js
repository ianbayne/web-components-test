const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
  <style>
    footer {
      align-items: center;
      background-color: #dfdfe2;
      bottom: 0;
      display: flex;
      height: 60px;
      justify-content: space-between;
      left: 0;
      list-style: none;
      padding: 0 10px;
      position: fixed;
      width: 100%;
    }
    
    ul li {
      display: inline;
      list-style: none;
    }
    
    a {
      color: inherit;
      margin: 0 15px;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
  </style>

  <footer>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </footer>
`

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);