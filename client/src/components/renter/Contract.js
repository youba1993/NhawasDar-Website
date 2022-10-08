import Footer from "../home/Footer";
import NavBar from "../home/NavBar";
import Toast from 'react-bootstrap/Toast';
export default function Contract() {
    
    const house = {
        id: 1,
        house_type: "Apartment",
        adress: "Alger",
        price: 1400
    }

    return (
        <div className="p-5 bg-image" id="home">
            <NavBar />
            <br/>
            <Toast>
                <Toast.Header closeButton={false}>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">House id : {house.id}</strong>
                </Toast.Header>
                <Toast.Body>you requested renting this {house.house_type} located at {house.adress} for the price of {house.price} $/month.</Toast.Body>
            </Toast>
            <br/>
            <Footer />
        </div>
    )
}