import React from "react";
import Navigation from "./Navigation"
import Journal from "./Journal"
import JournalData from "./JournalData"

export default function App(){
    const journalElements = JournalData.map(journalelement => {
        return(
            < Journal
                key = {journalelement.id}
                {...journalelement}
            />
        )
    })

    return(
        <div>
            <Navigation/>
            <div>
                {journalElements}
            </div>
        </div>
    )
}