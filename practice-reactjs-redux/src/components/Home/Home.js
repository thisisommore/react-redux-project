import React, {Fragment} from "react";
import InputChat from "./InputChat/InputChat";
import AppChats from "./AppChats/AppChats";
import './Home.scss'
export default function Home() {
    return (
        <Fragment>
            <InputChat/>
                <AppChats></AppChats>
            </Fragment>
    );
}
