function CurrentTime(){
    let time = new Date();

    return <h4 className="time">This is the Current date and time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h4>
}

export default CurrentTime;