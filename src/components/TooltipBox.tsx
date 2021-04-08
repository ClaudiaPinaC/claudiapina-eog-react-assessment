import React from "react";

var timeMoment = require("moment");

let style = {
    width: '170px',
    height: 'auto',
    backgroundColor: 'white',
    paddingLeft: '10px'
}

export default (props : any) => {
    return <TooltipBox props={props} />;
}

const TooltipBox = (props : any) => {
    if(props.props.tooltipInfo === null || props.props.tooltipInfo.length === 0){
        return null;
    }
    let time = timeMoment(parseInt(props.props.tooltipInfo.activePayload[0].payload.name)).format("lll");
    return(
        <div style={{position:'absolute', left:'65%', top: 400, fontSize:'20px', opacity:'.7'}}>
            {time}
            <div style={style}>
                {
                    props.props.tooltipInfo.activePayload.map( (a : any) => {
                        return(
                            <p key={a.dataKey} style={{margin:'2px', fontSize:'13px'}}>
                                {a.dataKey}: {a.value}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    );
};