import React, {memo} from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontendRoutes";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  reportBlock: {
    marginTop: '40px',
    width: "165px",
    [theme.breakpoints.up("md")]: {
      marginTop: '20px',
      display: "block",
    },
  },
  editReportBtn: {
    width: '146',
    height: '25px',
    fontSize: '0.75rem',
    [theme.breakpoints.up("sm")]: {
      height: '30px',
      fontSize: '0.875rem',
    },
  },
  fourReports: {
    color: '#FF0000',
    fontSize: '10px',
    padding: "5px 14px ",
    [theme.breakpoints.up("sm")]: {
      marginRight: '12px',
      padding: "5px 10px ",
    },
  },
}));

const ReportButtonSection = ({disableBtn}) => {
  const classes = useStyles();

  return (
    <div className={classes.reportBlock}>
      {/*<p className={classes.fourReports}>※一度に選べるレポートは4点までです。</p>*/}
      <Button component={Link} to={FrontendRoutes.EDIT_REPORTS} className={classes.editReportBtn}
              disabled={disableBtn} variant="contained" color="primary">
        作成
      </Button>
      {disableBtn ? (<div className={classes.fourReports}>※一度に選べるレポートは4点までです。</div>) : null}
    </div>
  )
}

export default memo(ReportButtonSection);