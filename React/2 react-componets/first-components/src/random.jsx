function Random(){

    let  number = Math.random() * 10 ;
    return <h2 style={{'background-color' : '#776691'}}>Random number is {Math.round(number)}</h2>
}

export default Random;