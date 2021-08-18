import { useState } from "react";
import './image.css'

function Images() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="containerr my-3 mr-4">

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <img src="https://source.unsplash.com/250x250/?Laptop" className="big-img within" alt="..." style={{ 'border': '1.5px solid black', 'padding': '10px', 'width': 'inherit' }} />
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <img src="https://source.unsplash.com/250x250/?LAptoP" className="big-img within" alt="..." style={{ 'border': '1.5px solid black', 'padding': '10px', 'width': 'inherit' }} />
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <img src="https://source.unsplash.com/250x250/?LAPtop" className="big-img within" alt="..." style={{ 'border': '1.5px solid black', 'padding': '10px', 'width': 'inherit' }} />
                </div>

                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    <img src="https://source.unsplash.com/250x250/?LAPTop" className="big-img within" alt="..." style={{ 'border': '1.5px solid black', 'padding': '10px', 'width': 'inherit' }} />
                </div>
            </div>
            <div className="bloc-tabs">
                <div className="row my-3 py-2">
                    <div className="col-2">
                        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                            <img src="https://source.unsplash.com/250x250/?Laptop"
                                className="small-img within"
                                alt="..."
                            />
                        </button>
                    </div>
                    <div className="col-2">
                        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                            <img
                                src="https://source.unsplash.com/250x250/?LAptoP"
                                className="small-img within"
                                alt="..."
                            />
                        </button>
                    </div>
                    <div className="col-2">
                        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                            <img
                                src="https://source.unsplash.com/250x250/?LAPtop"
                                className="small-img within"
                                alt="..."
                            />
                        </button>
                    </div>
                    <div className="col-2">
                        <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                            <img
                                src="https://source.unsplash.com/250x250/?LAPTop"
                                className="small-img within"
                                alt="..."
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Images;