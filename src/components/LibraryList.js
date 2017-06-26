import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    
    renderRow(library) {
        return <ListItem library={library}/>;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapToStateProps = state => {
    // Whatever is returned here is passed as a prop named 'libraries',
    // with a value of state.libraries to LibraryList
    return { libraries: state.libraries };
};

// connect() returns a function that we then pass LibraryList into as we invoke it
export default connect(mapToStateProps)(LibraryList);
