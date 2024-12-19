
document.querySelector('.cross').style.display = 'none';//the cross does not visible at normal time
document.querySelector('.hamburger').addEventListener("click" , ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        // document.querySelector('.ham').style.display='none';     // this is main 
        // document.querySelector('.cross').style.display='inline';

        document.querySelector('.ham').style.display='none';       // after adding the time delay to cross action
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline'
        }, 300);
    }
});
