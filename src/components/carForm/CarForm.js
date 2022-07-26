import React from "react";
import classes from "./CarForm.module.css";
import {Grid} from "@mui/material";
import {Grid, TextField} from "@mui/material";

const CarForm = () =>{
    return(
        <div className={classes.CarForm}>
            <Grid container>
                <Grid item xs={12} className={classes.FormItem}>
                    <TextFiled label={"Name:"} variant={"filled"}></TextFiled>
                </Grid>
            </Grid>

        </div>
    );
}
export default CarForm;