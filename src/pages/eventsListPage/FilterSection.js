import React, {memo, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import EasyReportPageSelect from "../../reusableComponents/eventsListPageSelects/EventsListPageSelects";
import years from "../../data/constants/Year";
import jpMonths from "../../data/constants/JpMonths";
import LocalisedDatePicker from "../editScreenPage/editScreenPageComponents/LocalisedDatePicker";
import {connect} from "react-redux";
import {setDay, setGroup, setMonth, setOffset, setYear, updateFilterProps} from "../../data/redux/common/commonActions";
import {dateToD} from "../../data/helpers/timeHelper";

const useStyles = makeStyles(theme => ({
  selects: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    },
    flexDirection: "column",
    marginTop: 20,
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
  deleteBtn: {
    width: '130px',
    height: '30px',
    background: '#FF0000',
    color: 'white',
    border: '1px solid #FF0000',
    borderRadius: '5px',
    fontSize: '12px',
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
  reportBlock: {
    marginTop: '40px',
    width: "165px",
    [theme.breakpoints.up("md")]: {
      marginTop: '20px',
      display: "block",
    },
  },
  selectTitle: {
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.up("md")]: {
      marginRight: 20,
    },
  },
}));

const FilterSection = ({gardenGroups, group, year, month, updateFilterProps}) => {
  const classes = useStyles();
  const [daySelect, setDaySelect] = useState('');
  const [disableDay, setDisableDay] = useState(true)

  useEffect(() => {
    if (daySelect) {
      updateFilterProps({offset: 0, day: dateToD(daySelect)})
    }
  }, [daySelect]);

  useEffect(() => {
    if (year && month) {
      setDisableDay(false)
    } else {
      setDisableDay(true)
    }
  }, [year, month, daySelect]);

  const handleGroupChange = group => {
    updateFilterProps({group, offset: 0})
    setDaySelect(null);
  };

  const handleYearChange = year => {
    updateFilterProps({year, offset: 0})
  };

  const handleMonthChange = month => {
    updateFilterProps({month, day: null, offset: 0});
    setDaySelect(null);
  };

  return (
    <div className={classes.selects}>
      <EasyReportPageSelect title={'組'} options={gardenGroups} value={group} setValue={handleGroupChange}/>
      <EasyReportPageSelect title={'年'} options={years} value={year} setValue={handleYearChange}/>
      <EasyReportPageSelect title={'月'} options={jpMonths} value={month}
                            setValue={handleMonthChange}/>

      <div>
        <LocalisedDatePicker
          disable={disableDay}
          format={'dd'}
          value={daySelect ? daySelect : month && year ? `${year}/${month}` : null}
          onChange={setDaySelect}
        />
        <span className={classes.selectTitle}>日</span>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    gardenGroups: state.eventsList.get("groups"),
    group: state.common.getIn(["filterProps", "group"]),
    year: state.common.getIn(["filterProps", "year"]),
    month: state.common.getIn(["filterProps", "month"]),
    offset: state.common.getIn(["filterProps", "offset"])
  }),
  {updateFilterProps, setGroup, setYear, setMonth, setDay, setOffset})
(memo(FilterSection));