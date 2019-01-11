import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light pl-4 pr-4">
                <a className="navbar-brand" href="/">
                <img src="https://brassandbooks.com.ng/wp-content/uploads/2018/06/20637914_1613534125372587_9078681752289139231_n.jpg" width="30" height="30" class="d-inline-block align-top" alt="logo"/>
                    Brass and Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Financial Plans</a>
                                <a className="dropdown-item" href="/">Business Plans</a>
                                <a className="dropdown-item" href="/">Capital Raising</a>
                                <a className="dropdown-item" href="/">Virtual Accounting</a>
                                <a className="dropdown-item" href="/">Financial Analysis</a>
                                <a className="dropdown-item" href="/">Investment Management</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Invest
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Bond Fund</a>
                                <a className="dropdown-item" href="/">Growth Fund</a>
                                <a className="dropdown-item" href="/">Agro Fund</a>
                                <a className="dropdown-item" href="/">Premium Fund</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}
