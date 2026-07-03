import "./Newsletter.css";

function Newsletter(){

    return(

        <section className="newsletter">

            <h2>Subscribe To Newsletter</h2>

            <p>Get the latest healthcare updates.</p>

            <div className="newsletter-box">

                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <button>Subscribe</button>

            </div>

        </section>

    )

}

export default Newsletter;