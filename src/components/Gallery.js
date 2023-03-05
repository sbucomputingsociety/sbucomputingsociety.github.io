import NavBar from './NavBar';
import Footer from './Footer';

function EventPage(props) {
    return (
        <div className="App">
            <NavBar></NavBar>

            {/* upcoming events */}
            <h2 className="event-page-title">Gallery</h2>
            <hr className="solid"></hr>
            <Footer></Footer>
        </div>
    )
}

export default EventPage;
