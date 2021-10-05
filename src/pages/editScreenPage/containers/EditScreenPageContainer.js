import React from "react";
import {connect} from "react-redux";
import EditScreenPage from "../EditScreenPage";
import {setTimeFilter} from "../../../data/redux/common/commonActions";
import {editReportsActions} from "../../../data/redux/editReports/editReportActions";
import {setSelectedEvents} from "../../../data/redux/selectedEvents/selectedEventsActions";

const mapStateToProps = state => ({
    reportsList: state.reportsList.get("reports")?.toJS(),
    selectCreator: state.reportsList.get("selectCreator"),
    creators: state.reportsList.get("creators")?.toJS(),
    timeFilter: state.common.get('timeFilter').toJS(),
    title: state.reportsList.get('title'),
    color: state.reportsList.get('color'),
    description: state.reportsList.get('description'),
    selectedEvents: state.selectedEvents.get('selects')?.toJS(),

});

const mapDispatchToProps = {
    setTimeFilter,
    setSelectedEvents,
    ...editReportsActions,
};

const EditScreenPageContainer = props => <EditScreenPage {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditScreenPageContainer);
