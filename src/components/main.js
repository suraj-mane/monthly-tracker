import React from "react";
import Activity from "./Activity";

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            activity:"",
            activities:{},
        }
    }
    addActivity = (event) => {this.setState({activity:event.target.value})}

    handleSubmit = (event) => {
        event.preventDefault();
        let { activities, activity } = this.state;
        if (activity !== "") {
          activities[activity] = [];
          activity = "";
        }
        this.setState({ activities, activity });
        window.localStorage.setItem("activities",JSON.stringify(activities));
    } 
    handelclick = (ele,d) =>{
        let {activities} = this.state
        if(activities[ele].includes(d)){
            activities[ele] = activities[ele].filter((s) => s !== d)
        } else {
            activities[ele] = activities[ele].concat(d);
        }
        this.setState({activities})
        window.localStorage.setItem("activities",JSON.stringify(activities));
    }
    handelDelete = (ele) =>{
        let {activities} = this.state;
        delete activities[ele];
        this.setState({activities}); 
        window.localStorage.setItem("activities",JSON.stringify(activities));
    }
    render(){
        var a = window.localStorage.getItem("activities");
        var activities = JSON.parse(a);
        return(
            <div className=".container-xxl">
                <div className="p-5 text-center w-75 m-auto">
                    <h1 className="pb-4 text-primary">Monthly Activity Tracker!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control w-50 d-inline" placeholder="Type something" value={this.state.activity} onChange={this.addActivity} />
                        <button className="btn btn-primary d-inline ms-2">Add Activity</button>
                    </form>
                    <Activity data={activities} handelclick={this.handelclick} handelDelete={this.handelDelete} />
                </div>
            </div>
        )
    }

}

export default Main;