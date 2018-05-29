import React, { Component } from 'react';
import { Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
 } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItems extends Component {
    componentWillUpdate() { //this method is called before the component is about to render
        LayoutAnimation.spring();
    }
/*    renderDescription() {
        const { library, selectedLibraryId } = this.props;
        if(library.id === selectedLibraryId) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    */

   renderDescription() {
    const { library, expanded } = this.props;
    if(expanded) {
        return (
            <CardSection>
                <Text style={{flex:1}}>
                    {library.description}
                </Text>
            </CardSection>
        );
    }
}
    render () {
        const { titleStyle } = styles;
        const { id, title } =this.props.library;

         return(
            <TouchableWithoutFeedback
            onPress = {() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                        {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};
/*
const mapStatetoProps = (state) => {
    return { selectedLibraryId: state.selectedLibraryId }
}
*/
const styles ={
    titleStyle: {
        fontSize:18,
    paddingLeft : 15
    }
    };

const mapStatetoProps = (state, ownProps) => {
const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
}


export default connect(mapStatetoProps, actions )(ListItems);

//if we dont want mapStateto Props we pass null as he first argument
//the 2nd argument are the actions will be passed to the Component method as props
