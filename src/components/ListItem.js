import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';  

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        console.log(this.props);

        return (
            <CardSection>
                <Text style={titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(null, actions)(ListItem);
//connect(1st param = mapStateToProps, 2nd parameter does two things,
// 1) dispatches actions returned from action creator functions, 2)
