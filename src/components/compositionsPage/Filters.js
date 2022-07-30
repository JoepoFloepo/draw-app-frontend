import React from 'react';
import classes from "./Filters.module.css";

const Filters = () => {


    return (
        <div className={classes.filters}>
            <h1>Filters</h1>
            <form className={classes.form}>
                <fieldset>
                    <label>Servers</label>
                    <div>
                        <input type="checkbox"/>
                        <label>Europe</label>
                    </div>
                </fieldset>
                <hr className={classes.hr}></hr>
                <fieldset>
                    <label>Servers</label>
                    <div>
                        <input type="checkbox"/>
                        <label>Europe</label>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Filters;