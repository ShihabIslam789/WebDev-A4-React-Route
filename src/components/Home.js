import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/905/666/494/background-render-fon-bitcoin-bitcoin-hd-wallpaper-preview.jpg"
          alt="bank"
        />
        <div id="container">
          <h1 className="title font-link">Bank of React</h1>

          <Link id="st" className="font-link" to="/userProfile">
            User Profile
          </Link>
          <Link id="st" className="font-link" to="/login">
            Login
          </Link>
          <Link id="st" className="font-link" to="/debits">
            Debits
          </Link>
          <Link id="st" className="font-link" to="/credits">
            Credits
          </Link>
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
      </div>
    );
  }
}

export default Home;