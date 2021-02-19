import React, { Component } from "react";
import axios from "axios";
import "../styles/loading.css";

class IndexPage extends Component {
  state = {
    cryptosID: null,
  };
  componentDidMount() {
    axios
      .get("https://api.coingecko.com/api/v3/global")
      .then((reponseFromAPI) => {
        // console.log(reponseFromAPI.data.data.active_cryptocurrencies);
        this.setState({ cryptosID: reponseFromAPI.data });
      });
  }

  render() {
    if (!this.state.cryptosID)
      return (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    else
      return (
        <div>
          <div>
            <h1>Crypto portfolio</h1>
          </div>
          <div>
            <p>
              Active cryptocurrencies:{" "}
              {this.state.cryptosID.data.active_cryptocurrencies}
            </p>
            <p>Markets: {this.state.cryptosID.data.markets}</p>
            <p>
              Bitcoin dominace:{" "}
              {this.state.cryptosID.data.market_cap_percentage.btc} %
            </p>
          </div>
        </div>
      );
  }
}
export default IndexPage;

//mapper en faisant Object.keys(tonObjet.description).map(key => )
//accèder à la valeur avec tonObject.description[key] dans le map
