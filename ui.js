class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }

    // display the profile 
    showprofile(user)
    {
     this.profile.innerHTML=`
     <div class="card card-body mb-3">
     <div class="row">
         <div class="col-md-3">
             <img src="${user.avatar_url}" alt="" class="img-fluid mb-4">
             <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>

         </div>
         <div class="col-md-9">
             <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
             <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
             <span class="badge badge-success">Followers: ${user.followers}</span>
             <span class="badge badge-info">Following: ${user.following}</span>
             <br><br>
             <ul class="list-group">
                 <li class="list-group-item">Company: ${user.company}</li>
                 <li class="list-group-item">Website/blog: ${user.blog}</li>
                 <li class="list-group-item">Location: ${user.location}</li>
                 <li class="list-group-item">Member Since: ${user.created_at}</li>

             </ul>
         </div>
     </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
     `;
    }

    //show repos
    showrepos(repos)
    {
        let output='';
        repos.forEach(function(repo){
            output +=`
            <div class="card card-body mb-2">
              <div class="row">
                  <div class="col-md-6">
                      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  </div>
                  <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                </div>
              </div>
            
            </div>
            
            `;
        })
        document.getElementById('repos').innerHTML=output;
    }

//show alert message when user is not found

    showalert(message,clasname)
    {
        this.clearAlert();
      const div=document.createElement('div');
      div.className=clasname;
      div.appendChild(document.createTextNode(message));
      const searchcontainer=document.querySelector('.serchContainer');
      const search=document.querySelector('.search');
      searchcontainer.insertBefore(div,search);

      //remove alert after 3 sec
    setTimeout(() => {
        this.clearAlert();
        
    },3000);
     
    }

   //clear Aleart
   clearAlert()
   {
       const alert=document.querySelector('.alert');
       if(alert)
       {
           alert.remove();
       }
   }


    //clear profile
    clearprofile()
    {
        this.profile.innerHTML='';
    }
}