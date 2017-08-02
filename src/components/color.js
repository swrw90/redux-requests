import React from "react";

class Color extends React.Component {
    render() {
        return (
            <div className="box" style={{ backgroundColor: this.props.color }}>
                <button>Color</button>
            </div>
        )
    }
}

export default Color;