import React, { Component } from 'react';
import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateItem()
  } 

  updateItem(){
    const { itemId, getData, getImageUrl } = this.props

    if(!itemId) {
      return ;
    }

    getData(itemId)
    .then((item) => {
      this.setState({ 
        item,
        image: getImageUrl(item) 
      })
    })

  }
  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }
  render() {

    if (!this.state.item) {
      return <span>Select a person from the list</span>
    }
    const { item, image } = this.state
    const { name } = item

    return (
      <div className="item-details card">
        <img className="item-image"
          src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { 
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item })
            })
             }
          </ul>
        </div>
      </div>
    )
  }
}
