import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment_counter_async,decrement_counter_async } from "./testActions";
import { Button } from 'semantic-ui-react';
import {openModal} from '../Modal/modalActions'



const mapState=(state)=>({
    data:state.test.data,
    loading:state.async.loading
})
const actions={
    increment_counter_async,
    decrement_counter_async,
    openModal
}
 class TestArea extends Component {


     render() {
        const {data,increment_counter_async,decrement_counter_async,openModal,loading}=this.props
        return (
            <div>
              <h1>Test Component  {this.props.data}</h1>
              <Button positive content="Increment" loading={loading}  onClick={increment_counter_async}/>
              <Button negative content="Decrement" loading={loading}  onClick={decrement_counter_async}/>
              <Button content="Open Modal"  color='teal'
               onClick={()=>openModal('TestModal')}/>
              

            </div>
        )
    }
}

export default connect(mapState,actions)(TestArea)
