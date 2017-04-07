import React from 'react';
import { connect } from 'react-redux';
import { increment, setInit } from '../actions';

class Buttons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initial: ''
        }

        this.onChangeInit = this.onChangeInit.bind(this); 
    }
    
    render() {
        return (
            <div>
                <button type="button"
                        onClick={ this.props.onIncrement }>
                        Add
                </button>
                <input type="text" placeholder="Enter a number here" value={ this.state.initial } onChange={this.onChangeInit}></input>
            </div>
        );
    }

    onChangeInit(e) {

        if(isNaN(e.target.value))
            return;

        this.setState({ initial: e.target.value });

        if(e.target.value=='') {
            this.setState({ initial: '0' });
        } 

        this.props.onUpdateInit(parseInt(e.target.value));

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onUpdateInit: (value) => dispatch(setInit(value))
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;

