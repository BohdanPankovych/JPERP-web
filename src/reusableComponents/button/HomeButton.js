import React, {memo} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    homeButtonBlock: {
        position: "absolute",
        top: 15,
        right: 15,
    },
    homeButton: {
        padding: 5
    }
}))

const HomeButton = () => {
    const classes = useStyles();

    return (
        <div className={classes.homeButtonBlock}>
            <Button
                href="https://main.kidslog.jp/staff"
                className={classes.homeButton}
                variant="contained"
                color="primary"
            >
                ホームへ戻る
            </Button>
        </div>
    )
};

export default memo(HomeButton);