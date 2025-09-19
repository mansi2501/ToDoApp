import logo from "../logo.svg"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/todo">To Do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Photo Gallary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/form">From validation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lazy">Lazy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;