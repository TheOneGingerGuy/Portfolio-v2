class SiteHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
        <div class="headerLeft">
            <img src="../public/images/asset.png" alt="Portfolio Logo" class="logo">
            <h1>Ben's Digital Portfolio</h1>
        </div>
        <nav>
            <a href="/">Home</a>
            <a href="/skills">Skills</a>
            <a href="/projects">My Projects</a>
            <a href="/resume">Resume/Previous Work Experience</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>
    `;
                    
    }
}

class SiteFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
    <footer>
        <p>&copy; 2024 Ben's Digital Portfolio. All rights reserved.</p>
    </footer>
    `}
}
customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);