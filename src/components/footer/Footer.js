import React from "react";

let url='';
const features = [
    {id: '1', fUrl: '', name: 'cool stuff'},
    {id: '2', fUrl: '', name: 'Random Features'},
    {id: '3', fUrl: '', name: 'cool stuff'},
    {id: '4', fUrl: '', name: 'cool stuff'},
    {id: '5', fUrl: '', name: 'cool stuff'},
    {id: '6', fUrl: '', name: 'cool stuff'},
]
const resources = [
    {id: '1', rUrl: '', name: 'Resource name'},
    {id: '2', rUrl: '', name: 'Resource'},
    {id: '3', rUrl: '', name: 'Another resource'},
    {id: '4', rUrl: '', name: 'Resource name'},
]
const about = [
    {id: '1', aUrl: '', name: 'Team'},
    {id: '2', aUrl: '', name: 'Services'},
    {id: '3', aUrl: '', name: 'Privacy'},
    {id: '4', aUrl: '', name: 'snxb'},
]

const Footer = () => {
    return (
        <React.Fragment>
            <div className="containerr" style={{backgroundColor: 'rgb(68,88,99)', color: 'white' }}>
        <footer className=" py-5">
            <div className="row">
                <div className="col-12 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img"
                        viewBox="0 0 24 24">
                        <title>Product</title>
                        <circle cx="12" cy="12" r="10" />
                        <path
                            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
                    </svg>
                    <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        {features.map(item => (
                             <li><a className="link-secondary" href={item.fUrl}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                    {resources.map(item => (
                             <li><a className="link-secondary" href={item.rUrl}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                    {resources.map(item => (
                             <li><a className="link-secondary" href={item.rUrl}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                    {about.map(item => (
                             <li><a className="link-secondary" href={item.aUrl}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="back">
                <a href={url}>Back to top <i className="fa fa-angle-double-up"></i></a>
            </p>
        </footer>
    </div>

        </React.Fragment>
    )
}
export default Footer;