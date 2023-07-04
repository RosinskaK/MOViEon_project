
function BarNavigation () {

    return (
        <div className="nav-main-container">
            <div className="nav-left-icons">
                <h1 className="nav-logo">MOV<span>i</span>E<span>on</span></h1>
                <button className="nav-left-icon">Strona głowna</button>
                <button className="nav-left-icon">Moja lista</button>
            </div>
            <div className="nav-right-icons">
                <button className="nav-btn-search">Wyszukiwarka</button>
                <h3 className="nav-hello">Hello!</h3>
            </div>
        </div>
    );
}

export default BarNavigation;