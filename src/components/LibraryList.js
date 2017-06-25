import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return;
    }
}

const mapToStateProps = state => {
    // Whatever is returned here is passed as a prop named 'libraries',
    // with a value of state.libraries to LibraryList
    return { libraries: state.libraries };
};

// connect() returns a function that we then pass LibraryList into as we invoke it
export default connect(mapToStateProps)(LibraryList);
