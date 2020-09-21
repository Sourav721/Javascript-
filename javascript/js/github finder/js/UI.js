class UI{
    constructor(){
        this.profile=document.querySelector("#profile");
        this.repos = document.querySelector("#repos");
    }
    showprofile(user){
        
         
        this.clearAlert();
       // console.log(user.repos_url);
        this.profile.innerHTML=
        `<div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid"src="${user.avatar_url}" alt="">
                <a href="${user.html_url}" target="_blank"class="btn btn-primary btn-block mb-4>View Profile</a>
            </div>
            <div class="col-md-9">
    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
    <span class="badge badge-success">Followers: ${user.followers}</span>
    <span class="badge badge-info">Following: ${user.following}</span>
</br></br>
<ul class="list-group">
    <li calss="list-group-item">Company:${user.company}</li>
    <li calss="list-group-item">Website/Blog:${user.blog}</li>
    <li calss="list-group-item">Location:${user.location}</li>
    <li calss="list-group-item">Member Scince:${user.created_at}</li>
</ul>
</div>
        </div>
    </div>`;

    }
    
    clearProfile(){
        this.profile.innerHTML='';
    }
    showAlert(message,classname){
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement('div');
        div.className = classname;
        div.appendChild(document.createTextNode(message));
        let container=document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div,search);

    }
    clearAlert(){
        let currentAlert = document.querySelector('.alert');
       // console.log(currentAlert);
        if(currentAlert){
            currentAlert.remove();
        }
    }
}