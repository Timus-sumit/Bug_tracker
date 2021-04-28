import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import {connect} from 'react-redux';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

  class Graph extends React.Component {
    constructor(props){
        super(props)
        this.state={
            chartConfigs:{
                type: "column2d", 
                width: "500", 
                height: "400", 
                dataFormat: "json", 
                dataSource: {
                
                chart: {
                    
                    caption: this.props.caption,
                    
                    subCaption: "",
                    
                    xAxisName: this.props.axis.x,
                  
                    yAxisName: this.props.axis.y,
                    numberSuffix: "",
                    
                    theme: "fusion"
                },
                data: this.props.data==='priority'?this.findPriorityData():this.findStatusData()
                }
            }
        }
    } 
    
    findPriorityData=()=>{
        var data = {low:0,medium:0,high:0};
        this.props.tickets.forEach((ticket)=>{
            if(ticket.priority==='low'){
                data.low++;
            }
            else if(ticket.priority==='medium'){
                data.medium++;
            }
            else{
                data.high++;
            }
        })

        const labeledData = [
            {
                label : "low",
                value : data.low
            },
            {
                label : "medium",
                value : data.medium
            },
            {
                label : "high",
                value : data.high
            }
        ]

        return labeledData;
    }

    findStatusData=()=>{
        var data = {new:0,open:0,inProgress:0,resolved:0,moreInfo:0};
        this.props.tickets.forEach((ticket)=>{
            switch(ticket.status){
                case 'New':
                    data.new++;
                    break;
                case 'Open':
                    data.open++;
                    break;
                case 'In Progress':
                    data.inProgress++;
                    break;
                case 'Resolved':
                    data.resolved++;
                    break;
                case 'Needs More Info':
                    data.moreInfo++;
                    break;
                default:
                    return;
            }
        })

        const labeledData = [
            {
                label : "New",
                value : data.new
            },
            {
                label : "Open",
                value : data.open
            },
            {
                label : "In Progress",
                value : data.inProgress
            },
            {
                label : "Resolved",
                value : data.resolved
            },
            {
                label : "Needs More Info",
                value : data.moreInfo
            }
        ]

        return labeledData;
    }

    render() {
      return (<ReactFC {...this.state.chartConfigs} />);
    }
  }
  
  const mapStateToProps = (state)=>{
    return{
        
        tickets:state.tickets

    }
}

export default connect(mapStateToProps)(Graph)