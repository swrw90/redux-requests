import React from 'react';
import ReactDOM from 'react-dom';

import "./css/index.css";

import ColorContatiner from "./containers/color-container.js"

class App extends React.Component {
    render() {
        return (
            <div>
                <ColorContatiner />
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"))