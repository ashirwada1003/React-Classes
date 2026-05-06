const Help = ()=>{
    return(
        <section className="content-page">
            <span className="eyebrow">Help</span>
            <h1>Frequently asked questions</h1>

            <div className="faq-list">
                <article>
                    <h3>Where do users go after login?</h3>
                    <p>They land on the dashboard, where progress and tasks are visible.</p>
                </article>
                <article>
                    <h3>Where should new pages be added?</h3>
                    <p>Add page components inside src/pages and connect them in App.jsx.</p>
                </article>
                <article>
                    <h3>Where should shared UI live?</h3>
                    <p>Place reusable layout pieces inside src/Components.</p>
                </article>
            </div>
        </section>
    )
}
export default Help
