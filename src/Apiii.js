import React, { Component } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

class apiii extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:50123/api/product")
      .then(res => res.json())
      .then(
        json => {
          this.setState({
            isLoaded: true,
            products: json
          });
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      );
  }
  DeleteProduct = (item, url) => {
    console.log(item);
    fetch(url + "?ID=" + item, {
      mode: "cors",
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.products.ID)
    })
      .then(Response => {
        console.log(Response);
        this.componentDidMount();
      })

      .catch(error => {
        console.log(error);
      });
  };

  render() {
    var { isLoaded, products } = this.state;

    return (
      <div>
        {this.componentDidMount()}

        <p> Product List</p>
        <Link to="/PostForm"> ADD</Link>

        {products.map(product => (
          <tr key={product.ID}>
            <th> ID {product.ID} </th>
            <td> , </td>
            <td> Name {product.name} </td>
            <td>Price{product.price}</td>

            <td>description{product.description}</td>
            <button
              type="simpleQuery"
              onClick={() =>
                this.DeleteProduct(
                  product.ID,
                  "http://localhost:50123/api/product"
                )
              }
            >
              Delete
            </button>

            <Link to="/Up">ubdete</Link>
          </tr>
        ))}
      </div>
    );
  }
}
export default apiii;
