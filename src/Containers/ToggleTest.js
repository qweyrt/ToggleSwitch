import React, { useState } from "react";
import ToggleSwitch from "../Components/ToggleSwitch.js";

export default function ToggleTest() {
    let [list1, setList1] = useState(false);
    let [list2, setList2] = useState(false);
    let [list3, setList3] = useState(false);
    let [list4, setList4] = useState(false);

return (
    <div>
        <div>
            <ToggleSwitch
                id="list1"
                checked={list1}
                onChange={setList1}
            />
        </div>
        <div>
            <ToggleSwitch
                id="list2"
                
                checked={list2}
                onChange={setList2}
            />
        </div>
        <div>
            <ToggleSwitch
                id="list3"
                
                checked={list3}
                onChange={setList3}
            />
        </div>
        <div>
            <ToggleSwitch
                id="list4"
                
                checked={list4}
                onChange={setList4}
            />
        </div>
    </div>
);
}