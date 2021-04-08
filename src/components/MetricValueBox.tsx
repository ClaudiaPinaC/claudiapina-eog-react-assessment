import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

export default (props : any) => {
    return props.display.value.length !== 0 ? <MetricValueBox props={props}/> : null;
}

const getNewMeasurementData = (state:any) => {
    const getNewMeasurementValues = state.metricsMeasurements.getMultipleMeasurements;
    return getNewMeasurementValues;
}

const MetricValueBox = (props : any) => {
    let displayList = props.props.dispaly.value;
    const getNerMeasurementDatas = useSelector(getNewMeasurementData);
    let newData = getNerMeasurementDatas.getMultipleMeasurements;
    let list = [];
    for(let i=0; i < newData.length; i++){
        let data = newData[i].measurements.slice(-1)[0];
        if(displayList.includes(data.metric)) list.push(data);
    }

    return (
        <div>
          <Grid columns="equal" divided>
            {list
              ? list.map(a => {
                  return (
                    <Grid.Column key={a.metric} style={{ margin: '20px' }}>
                      <Segment>
                        {a.metric} : <h2>{a.value}</h2><p>{a.unit}</p>
                      </Segment>
                    </Grid.Column>
                  );
                })
              : null}
          </Grid>
        </div>
      );
}