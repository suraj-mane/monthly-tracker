
function Activity(props) {
    return(
        <div>
            {
                props.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="row shadow-lg p-3 mb-5 bg-body rounded mt-5">
                        <div className="col-3 d-flex align-items-center justify-content-center bg-light">
                            <div>
                                <p className="fw-bold fs-2">{activity.name}</p>
                                <p className="bg-primary rounded text-light fw-bold p-1">{activity.month}</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="d-flex align-items-center flex-wrap">
                                {
                                    activity.days.map((day,dayIndex)=>(<p key={dayIndex} className={day.isSelecte ? "primary":"light"} onClick={() => props.handelSelectDay(activity.name,day.day)}>{day.day}</p>))
                                }
                            </div>
                        </div> 
                        <div className="col-1">
                            <span className="position" onClick={() => props.handelDeleteActivity(activityIndex)}>X</span>
                        </div>
                    </div> 
                ))
            }
        </div>       
    )
}

export default Activity;