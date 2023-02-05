import React, { memo, useEffect, useState } from 'react'
import image1 from './hamburger.jpg'
import image2 from './tablesetting2.jpg'
import image3 from './tablesetting.jpg'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
function HomePage() {
    const [data, setData] = useState("");
    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        setTimeout(() => {
            window.location = "/login";
        }, 1000)
        toast.success('You are successfully logout.', {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    useEffect(() => {
        var name = Cookies.get("name")
        setData(name)
    }, [])
    return (
        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

            <div className="w3-top">
                <div className="w3-bar w3-white w3-padding w3-card" style={{ letterSpacing: "4px" }}>
                    <a href="#home" className="w3-bar-item w3-button">Gourmet au Catering</a>
                    <div className="w3-right w3-hide-small">
                        <a href="#about" className="w3-bar-item w3-button">About</a>
                        <a href="#menu" className="w3-bar-item w3-button">Menu</a>
                        <a className="w3-bar-item w3-button"><strong>{data?.name}</strong></a>
                        <button onClick={logout} type="button" className="w3-bar-item w3-button">
                            <span className="glyphicon glyphicon-log-out"></span> Log out
                        </button>
                    </div>
                </div>
            </div>

            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: "1600px", minWidth: "500px" }} id="home">
                <img className="w3-image" src={image1} alt="Hamburger Catering" width="1600" height="800" />
                <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                    <h1 className="w3-xxlarge">Le Catering</h1>
                </div>
            </header>

            <div className="w3-content" style={{ maxWidth: "1100px" }}>
                <div className="w3-row w3-padding-64" id="about">
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <img src={image2} className="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750" />
                    </div>

                    <div className="w3-col m6 w3-padding-large">
                        <h1 className="w3-center">About Catering</h1><br />
                        <h5 className="w3-center">Tradition since 1889</h5>
                        <p className="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
                        <p className="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <hr></hr>
            <div className="w3-row w3-padding-64" id="menu">
                <div className="w3-col l6 w3-padding-large">
                    <h1 className="w3-center">Our Menu</h1><br />
                    <h4>Bread Basket</h4>
                    <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />

                    <h4>Honey Almond Granola with Fruits</h4>
                    <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />

                    <h4>Belgian Waffle</h4>
                    <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />

                    <h4>Scrambled eggs</h4>
                    <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />

                    <h4>Blueberry Pancakes</h4>
                    <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
                </div>

                <div className="w3-col l6 w3-padding-large">
                    <img src={image3} className="w3-round w3-image w3-opacity-min" alt="Menu" style={{ width: "50%" }} />
                </div>
            </div>
            <ToastContainer />
        </div>
    )

}
export default HomePage
