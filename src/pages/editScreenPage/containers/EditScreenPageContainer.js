import React from "react";
import {connect} from "react-redux";
import EditScreenPage from "../EditScreenPage";
import {setTimeFilter} from "../../../data/redux/common/commonActions";
import {editReportsActions} from "../../../data/redux/editReports/editReportActions";

const mapStateToProps = state => ({
    reportsList: state.reportsList.get("reports")?.toJS(),
    creators: state.reportsList.get("creators")?.toJS(),
    timeFilter: state.common.get('timeFilter').toJS(),
    title: state.reportsList.get('title'),
    color: state.reportsList.get('color'),
    description: state.reportsList.get('description'),
});

const mapDispatchToProps = {
    setTimeFilter,
    ...editReportsActions,
};

const EditScreenPageContainer = props => <EditScreenPage {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditScreenPageContainer);
