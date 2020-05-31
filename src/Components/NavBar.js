import React from 'react'
import { Link } from 'react-router';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Tourex</Link>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar;