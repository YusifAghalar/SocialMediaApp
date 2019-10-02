import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment_counter,decrement_counter } from "./testActions";
import { Button } from 'semantic-ui-react';
import {openModal} from '../Modal/modalActions'



const mapState=(state)=>({
    data:state.test.data
})
const actions={
    increment_counter,
    decrement_counter,
    openModal
}
 class TestArea extends Component {


     render() {
        const {data,increment_counter,decrement_counter,openModal}=this.props
        return (
            <div>
              <h1>Test Component  {this.props.data}</h1>
              <Button positive content="Increment"  onClick={increment_counter}/>
              <Button negative content="Decrement" onClick={decrement_counter}/>
              <Button content="Open Modal"  color='teal'
               onClick={()=>openModal('TestModal')}/>
              

            </div>
        )
    }
}

export default connect(mapState,actions)(TestArea)
