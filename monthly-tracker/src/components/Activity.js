
function Activity(props) {
    function daysInMonth(){
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        return new Date(year, month, 0).getDate();
    }
    function alldays(days){
        let day = []
        for (let i = 1; i <= days; i++) {
            day.push(i);
        }
        return day;
    }

    if(props.data !== ""){
    var activity = Object.keys(props.data);
    } else {
        activity = ['code'];
    }
    var month = new Date().toLocaleString('default', { month: 'long' })
    return(
        <div className="">
            {
                activity.map(ele => (
                    <div key={ele} className="row shadow-lg p-3 mb-5 bg-body rounded mt-5">
                        <div className="col-3 d-flex align-items-center justify-content-center bg-light">
                            <div>
                                <p className="fw-bold fs-2">{ele}</p>
                                <p className="bg-primary rounded text-light fw-bold p-1">{month}</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="d-flex align-items-center flex-wrap">
                                {alldays(daysInMonth()).map((d,i) => (<p key={d}  className={props.data[ele].includes(d) ? "primary fw-bold":"light fw-bold"} onClick={()=>props.handelclick(ele,d)}>{d}</p>))}
                            </div>
                        </div> 
                        <div className="col-1">
                            <span className="position" onClick={() => props.handelDelete(ele)}>X</span>
                        </div>
                    </div>        
                ))
            }
        </div>
    )
}

export default Activity;