import React from "react";
import { connect } from "react-redux";

class ViewOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { offer_id } = this.props.match.params;
  }
  /*  fetch(`https://api.twitter.com/user/${handle}`).then((user) => {
      this.setState(() => ({ user }));
    });
  } */

  render() {
    return <div>{/* JSX Code here */}</div>;
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(ViewOffer);
