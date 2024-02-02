import { useState } from "react"

function Agecalculator(){
    const [date,setdate]=useState("")
    const [month,setmonth]=useState("")
    const [year,setyear]=useState("")
    const [resultyr,setresultyr]=useState("")
    const [resultmonth,setresultmonth]=useState("")
    const [resultdate,setresultdate]=useState("")
    function dateinput(e){
        setdate(e.target.value)
    }
    function monthinput(e){
        setmonth(e.target.value)
    }
    function yearinput(e){
        setyear(e.target.value)
    }
    function showresult(){
        let currentDate=new Date()
        let curryear=currentDate.getFullYear()
        let currmonth=currentDate.getMonth()+1
        let currdate=currentDate.getDate()
        setresultyr(curryear-year)
        setresultmonth(Math.abs(currmonth-month))
        setresultdate(Math.abs(currdate-date))
    }
    return(<>
        <div className="container">
            <div className="box">
            <input type="text" className="date" placeholder="date" onChange={dateinput}></input>
            <input type="text" className="month" placeholder="month" onChange={monthinput}></input>
            <input type="text" className="year" placeholder="year" onChange={yearinput}></input>
            </div>
            <button className="btn" onClick={showresult}>click</button>
            <h1>{resultyr} year</h1>
            <h1>{resultmonth} month</h1>
            <h1>{resultdate} day</h1>
        </div>
    </>)
}
export default Agecalculator