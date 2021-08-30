import { useState } from "react";
import './image.css'

function Images(url) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    console.log(url.data[0]);

    return (
        <div className="containerr my-3 mr-4">
            <div className="content-tabs" style={{'border': '1.5px solid black'}}>
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <img src={url.data[0]} className="big-img within img-fluid" alt="..." style={{'padding': '10px', 'width': 'inherit' }} />
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <img src={url.data[1]} className="big-img within img-fluid" alt="..." style={{'padding': '10px', 'width': 'inherit' }} />
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <img src={url.data[2]} className="big-img within img-fluid" alt="..." style={{'padding': '10px', 'width': 'inherit' }} />
                </div>

                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    <img src={url.data[3]} className="big-img within img-fluid" alt="..." style={{'padding': '10px', 'width': 'inherit' }} />
                </div>
            </div>
            <div className="bloc-tabs">
                <div className="row my-3 py-2">
                    <div className="col-2">
                        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                            <img src={url.data[0]}
                                className="small-img within"
                                alt="..."
                            />
                        </button>
                    </div>
                    <div className="col-2">
                        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                            <img
                                src={url.data[1]}
                                className="small-img within"
                                alt="..."
                            />
                        </button>
                    </div>
                    <div className="col-2">
                        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                            <img
                                src={url.data[2]}
                                className="small-img within"
                                alt="..."
                            />
                        </button>
                    </div>
                    <div className="col-2">
                        <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                            <img
                                src={url.data[3]}
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