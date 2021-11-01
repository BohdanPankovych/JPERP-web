import React from "react";
import {connect} from "react-redux";
import Root from '../Root'
import {CommonActions} from "../../../data/redux/common/commonActions";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  ...CommonActions,
};

const RootContainer = props => <Root {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
