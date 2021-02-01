import React from "react";

export default class PropertyHeader extends React.Component {
  render() {
    return (
      <div className="px-4 xl:px-8">
        <h3 className="text-gray-900 text-xl">{this.props.title}</h3>
        <p className="text-gray-600">{this.props.description}</p>
      </div>
    );
  }
}