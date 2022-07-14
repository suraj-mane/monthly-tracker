import React from "react";
import Activity from "./Activity";

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            activity:"",
            activities: [],
        }
    }
    addActivity = (event) => {this.setState({activity:event.target.value})};
    MonthOfDays = () =>{ return Array(30).fill().map((_,i )=> { return {day:i+1, isSelecte:false}})};
    handleSubmit = (event) => {
        event.preventDefault();
        let activity = [{
            name:this.state.activity,
            days: [...this.MonthOfDays()],
            month: new Date().toLocaleString('default', { month: 'long' })
        }]
        this.setState({activities:activity});
        this.setState({activity:" "});
        window.localStorage.setItem("activities",JSON.stringify(this.state.activities));
    } 
    handelSelectDay = (activity, dayIndex) => {
        let {activities} = this.state;
         activities.forEach((ele, i) => {
            if(ele.name === activity){
                ele.days.forEach((day) => {
                    if(day.day === dayIndex){
                        day.isSelecte = !day.isSelecte;
                    }
                } )
            }
         });
        this.setState({activities:activities});
        window.localStorage.setItem("activities",JSON.stringify(this.state.activities));
    }
    handelDeleteActivity = (index) => {
        let {activities} = this.state;
        if(index){
            activities = activities.splice(index,1);
            this.setState({activities: activities});
        }
        console.log(activities)
        window.localStorage.setItem("activities",JSON.stringify(this.state.activities));
    }
    render(){
        let a = localStorage.getItem("activites");
        console.log(a);
        return(
            <div className=".container-xxl">
                <div className="p-5 text-center w-75 m-auto">
                    <h1 className="pb-4 text-primary">Monthly Activity Tracker!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control w-50 d-inline" placeholder="Type something" value={this.state.activity} onChange={this.addActivity} />
                        <button className="btn btn-primary d-inline ms-2">Add Activity</button>
                    </form>
                    <Activity activities={this.state.activities} handelSelectDay={this.handelSelectDay} handelDeleteActivity={this.handelDeleteActivity}/>
                </div>
            </div>
        )
    }

}

export default Main;