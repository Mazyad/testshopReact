import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";

class Up extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      ID: ""
    };
  }

  UHandler = (item, url) => {
    //preventDefault();
    console.log(this.state);
    fetch(url + "?ID=" + item, {
      mode: "cors",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  submitHandler = e => {
    e.preventDefault();

    axios
      .post("http://localhost:50123/api/product", this.state)
      .then(Response => {
        console.log(Response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { name, description, price, ID } = this.state;
    return (
      <div>
        <Link to="/"> List </Link>
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
              <label>name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <div>
              <label>description</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>
            <div>
              <label>price</label>
              <input
                type="text"
                name="price"
                value={price}
                onChange={e => this.setState({ price: e.target.value })}
              />
            </div>
          </form>
        </div>
        <div>
          <label>Id</label>
          <input
            type="text"
            name="ID"
            value={ID}
            onChange={e => this.setState({ ID: e.target.value })}
          />
        </div>
        <div>
          <Link
            onClick={() =>
              this.UHandler(this.state.ID, "http://localhost:50123/api/product")
            }
            to="/"
          >
            Here
          </Link>
        </div>
      </div>
    );
  }
}

export default Up;
