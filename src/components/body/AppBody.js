
import React from "react";
import classes from "./AppBody.module.css";
import {Route, Routers} from "react-router-dom";
import CarList from "../carlist/CarList";

const AppBody = () =>{
    return(
        <div className={classes.AppBody}>
            <Routers>
                <Route path={"/"}></Route>
                <Route path={"/cars"} element={<CarList/>}></Route>

            </Routers>
        </div>
    );
}
export default AppBody;
