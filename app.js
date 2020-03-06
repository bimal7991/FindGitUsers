
//search input
const serchusers=document.getElementById('serchUsers');
//init UI
const ui=new UI;


//init GitHub
const github=new GitHub;
//search input event listener
serchusers.addEventListener('keyup',(e)=>{
    //get input text
    const userText=e.target.value;
    if(userText !=='')
    {
       // console.log(userText);
        //make a http call
        github.getUser(userText)
        .then(data =>{
            console.log(data);

           if(data.profile.message ==='Not Found')
           {
               //show alert
               ui.showalert('User Not Found','alert alert-danger');
           }
           else{
               //show profile
             ui.showprofile(data.profile);
             ui.showrepos(data.repos);

           }
        });       

    }
    else{
        //clearProfile
        ui.clearprofile();
    }

})