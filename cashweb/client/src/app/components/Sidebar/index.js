import React from 'react';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uiElementsCollapsed: true,
            chartsElementsCollapsed: true,
            multiLevelDropdownCollapsed: true,
            thirdLevelDropdownCollapsed: true,
            samplePagesCollapsed: true,
        };
    }

    render() {
        return (
            <nav className="mr-5" role="navigation">
                <div className="">
                    <ul className="nav flex-column">
                        <li className="nav-item sidebar-search">
                            <div className="input-group custom-search-form">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search..."
                                />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </span>
                            </div>
                            {/* <!-- /input-group --> */}
                        </li>
                        <li className="nav-item">
                            <a href="index.html"><i className="nav-link fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                        <li className="nav-item">
                            <a href="tables.html"><i className="fa fa-table fa-fw"></i> Tables</a>
                        </li>
                        <li className="nav-item">
                            <a href="forms.html"><i className="fa fa-edit fa-fw"></i> Forms</a>
                        </li>
                        <li className="nav-item">
                            <a href="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="panels-wells.html">Panels and Wells</a>
                                </li>
                                <li>
                                    <a href="buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="notifications.html">Notifications</a>
                                </li>
                                <li>
                                    <a href="typography.html">Typography</a>
                                </li>
                                <li>
                                    <a href="icons.html"> Icons</a>
                                </li>
                                <li>
                                    <a href="grid.html">Grid</a>
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                        <li className="nav-item">
                            <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level <span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level">
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                    </ul>
                                    {/* <!-- /.nav-third-level --> */}
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
