const Contact = ()=>{
    return(
        <section className="content-page">
            <span className="eyebrow">Contact</span>
            <h1>Need help with your classes?</h1>
            <p>Send a message and the support team will get back to you.</p>

            <form className="contact-form">
                <label>
                    Name
                    <input type="text" placeholder="Your name" />
                </label>
                <label>
                    Message
                    <textarea rows="5" placeholder="Write your message"></textarea>
                </label>
                <button className="primary-button" type="button">Send message</button>
            </form>
        </section>
    )
}
export default Contact
