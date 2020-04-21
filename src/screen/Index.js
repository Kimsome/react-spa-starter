import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter, Link } from 'react-router-dom';

import Hello from '../component/Hello';

@withRouter
@inject("store")
@observer
export default class Index extends Component {
    render() {
        return (
            <div>
                <h1><Hello /></h1>
                <div><button onClick={() => this.props.store.appname += 'Kim'}>change</button></div>
                <div><span onClick={() => this.props.history.push("/login")}>Login</span></div>
            </div>
        );
    }
}