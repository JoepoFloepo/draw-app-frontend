import React from 'react';
import classes from "./CompositionsPage.module.css";
import CompositionPreview from "../components/compositionsPage/CompositionPreview";
import Filters from "../components/compositionsPage/Filters";
import SearchBar from "../components/compositionsPage/SearchBar";

const DUMMY_COMPOSITIONS = [{
    name: "A nice composition",
    creator: "Joep",
    date_created: "22-4-2022"
}, {
    name: "composition number 2",
    creator: "Emma",
    date_created: "21-2-2022"
}, {
    name: "A stupid composition",
    creator: "Gerard",
    date_created: "2-2-2022"
}, {
    name: "Another composition",
    creator: "Joep",
    date_created: "22-4-2021"
}, {
    name: "composition 1",
    creator: "Julia",
    date_created: "3-12-2020"
}, {
    name: "compo",
    creator: "Darth vader",
    date_created: "2-4-2021"
}, {
    name: "Componoso",
    creator: "Jannes",
    date_created: "2-1-2022"
}, {
    name: "composition",
    creator: "Saul",
    date_created: "21-2-2022"
}, {
    name: "cool composition",
    creator: "Aard",
    date_created: "3-12-2021"
},


]

const CompositionsPage = () => {

    return (
        <div className={classes.page}>
            <SearchBar/>
            <div className={classes.content}>
                <Filters/>
                <div className={classes.compositions}>
                    {
                        DUMMY_COMPOSITIONS.map((composition) => (
                                <CompositionPreview compositionName={composition.name} creatorName={composition.creator}
                                                    creationDate={composition.date_created}></CompositionPreview>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
    /*    TODO set global rem with font-size*/
};

export default CompositionsPage;