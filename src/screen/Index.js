import React, { Component } from 'react';
import { inject } from 'mobx-react';

import Hello from '../component/Hello';

@inject("store")
export default class Index extends Component {
    render() {
        return (
            <div>
                <h1><Hello /></h1>
                <div><button onClick={() => this.props.store.appname = 'Kim'}>change</button></div>
            </div>
        );
    }
}