import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return;
    }
}

export default connect()(LibraryList);  //connect() returns a function that we then pass LibraryList into as we invoke it
