import Footer from "../home/Footer";
import NavBar from "../home/NavBar";

export default function Contract({ id }) {

    return (
        <div className="p-5 bg-image" id="home">
            <NavBar />

            I'm working `{id}`


            <Footer />
        </div>
    )
}