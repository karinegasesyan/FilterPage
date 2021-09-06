import React from "react";

class NavCategories extends React.Component{
    render() {
        return(
                <nav className="nav-categories">
                    <h2>Categories</h2>
                    <ul className="nav-menu">
                        <li className='active'>
                            <a  onClick={e => this.onClick('Channels')}>
                                 Channels
                            </a>
                        </li>
                        <li>
                            <a  onClick={e => this.onClick('Dialer')}>
                                Dialer
                            </a>
                        </li>
                        <li>
                            <a  onClick={e => this.onClick('Optimization')}>
                                Optimization
                            </a>
                        </li>
                        <li>
                            <a  onClick={e => this.onClick('Reporting')}>
                                Reporting
                            </a>
                        </li>
                        <li>
                            <a  onClick={e => this.onClick('Voice Analytics')}>
                                Voice Analytics
                            </a>
                        </li>
                    </ul>
                </nav>
        )
    }
    onClick = (value) => {
        this.props.onFilter(value);
    };
}
export default NavCategories;