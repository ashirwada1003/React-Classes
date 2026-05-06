const About = ()=>{
    return(
        <section className="content-page">
            <span className="eyebrow">About</span>
            <h1>A simple learning management project</h1>
            <p>
                ClassHub is a clean React project structure for practicing routing,
                forms, validation, layouts, and dashboard-style pages.
            </p>

            <div className="info-grid">
                <article className="feature-card">
                    <h3>Organized pages</h3>
                    <p>Each major screen lives inside the pages folder.</p>
                </article>
                <article className="feature-card">
                    <h3>Reusable layout</h3>
                    <p>The header, footer, and shared styles keep the app consistent.</p>
                </article>
            </div>
        </section>
    )
}
export default About
