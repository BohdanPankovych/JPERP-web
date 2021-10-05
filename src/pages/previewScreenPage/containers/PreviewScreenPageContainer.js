import React from "react";
import {connect} from "react-redux";
import {setTimeFilter} from "../../../data/redux/common/commonActions";
import {editReportsActions} from "../../../data/redux/editReports/editReportActions";
import {setSelectedEvents} from "../../../data/redux/selectedEvents/selectedEventsActions";
import PreviewScreenPage from "../PreviewScreenPage";

const mapStateToProps = state => ({
    selectCreator: state.reportsList.get("selectCreator"),
    timeFilter: state.common.get('timeFilter'),
    title: state.reportsList.get('title'),
    color: state.reportsList.get('color'),
    description: state.reportsList.get('description'),
    selectCreator: state.reportsList.get('selectCreator'),
    selectedEvents: state.selectedEvents.get('selects')?.toJS(),
});

const mapDispatchToProps = {
    setTimeFilter,
    setSelectedEvents,
    ...editReportsActions,
};

const PreviewScreenPageContainer = props => <PreviewScreenPage {...props} />;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewScreenPageContainer);
