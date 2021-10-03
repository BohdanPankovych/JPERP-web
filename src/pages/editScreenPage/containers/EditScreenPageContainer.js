import React from "react";
import {connect} from "react-redux";
import EditScreenPage from "../EditScreenPage";
import {setTimeFilter} from "../../../data/redux/common/commonActions";
import {setEditReportsData} from "../../../data/redux/editReports/editReportActions";

const mapStateToProps = state => ({
    reportsList: state.reportsList.get("reports")?.toJS(),
    timeFilter: state.common.get('timeFilter').toJS(),
});

const mapDispatchToProps = {
    setTimeFilter,
    setEditReportsData
};

const EditScreenPageContainer = props => <EditScreenPage {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditScreenPageContainer);
