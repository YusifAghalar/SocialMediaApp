import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment_counter,decrement_counter } from "./testActions";
import { Button } from 'semantic-ui-react';



const mapState=(state)=>({
    data:state.test.data
})
const actions={
    increment_counter,
    decrement_counter
}
 class TestArea extends Component {


     render() {
        const {data,increment_counter,decrement_counter}=this.props
        return (
            <div>
              <h1>Test Component  {this.props.data}</h1>
              <Button positive content="Increment"  onClick={increment_counter}/>
              <Button negative content="Decrement" onClick={decrement_counter}/>

            </div>
        )
    }
}

export default connect(mapState,actions)(TestArea)
