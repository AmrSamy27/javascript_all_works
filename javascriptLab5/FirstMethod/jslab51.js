let userIdListCheck =[];
let getUserAndRender =  (renderUserId, fn) => {
    const URL = `https://reqres.in/api/users/${renderUserId}`;
    const METHOD = 'GET';
    let xhr = new XMLHttpRequest();
    xhr.open(METHOD, URL);
    xhr.send();
    xhr.onerror = (err) => {
        console.error(err);
    }
    xhr.onload = (res) => {
        if(xhr.status == 200){
            const RES = JSON.parse(xhr.response);
            document.getElementById('ParentDiv').setAttribute('style','display:none;');
             return fn(RES.data);
        }
    }
}

let deleteUserAndRender =  (deleteUserId) => {
    const URL = `https://reqres.in/api/users/${deleteUserId}`;
    const METHOD = 'DELETE';
    let xhr = new XMLHttpRequest();
    xhr.open(METHOD, URL);
    xhr.send();
    xhr.onerror = (err) => {
        console.error(err);
    }
    xhr.onload = (res) => {
        if(xhr.status == 204){   
            let checkElementExixt = document.getElementById(`DIV${deleteUserId}`);
              document.getElementById(`DIV${deleteUserId}`).remove();
              setTimeout(function(){ alert(`user number ${deleteUserId} has been successfully deleted`); }, 1000); 
            }
    }
}

let getUsersAndRender =  (renderUsers) => {
    const URL = 'https://reqres.in/api/users';
    const METHOD = 'GET';
    let xhr = new XMLHttpRequest();
    xhr.open(METHOD, URL);
    xhr.send();
    xhr.onerror = (err) => {
        console.error(err);
    }
    xhr.onload = (res) => {
        if(xhr.status == 200){
            const RES = JSON.parse(xhr.response);
              return renderUsers(RES);
        }
    }
}

let renderUsersTOHTml= (users) => {    
    
        let usersUrl=users.data;
        let parentDiv =document.createElement('div');
            parentDiv.setAttribute('id',`ParentDiv`);
    for (let i = 0; i < usersUrl.length; i++) {
        const DIV = document.createElement('div');
              DIV.setAttribute('id',`DIV${usersUrl[i].id}`);
        const IMG = new Image();
        const viewButton = document.createElement('button');
        const deleteButton = document.createElement('button');
              viewButton.innerHTML = 'view';
              deleteButton.innerHTML = 'delete';  
              viewButton.setAttribute('onclick',`viewData(${usersUrl[i].id})`);
              deleteButton.setAttribute('onclick',`deleteData(${usersUrl[i].id})`);
              IMG.src = usersUrl[i].avatar;
              DIV.appendChild(IMG);
              DIV.appendChild(viewButton);
              DIV.appendChild(deleteButton);
              parentDiv.appendChild(DIV);
        
    }
             parentDiv.innerHTML += `<a href="jslab51.html">1</a>`+" ";
             parentDiv.innerHTML += `<a href="userspage2.html">2</a>`;
             document.body.appendChild(parentDiv);
             

}

 getUsersAndRender(renderUsersTOHTml);

function viewData(id) {
          if(!userIdListCheck.includes(id)){
              userIdListCheck.push(id);
              const userData = document.createElement('div');
               userData.setAttribute('id',`userData${id}`);
               getUserAndRender(id, (user) =>{
                userData.innerHTML += user.id + ' '+user.email+' '+user.first_name;
                  const backButton=document.createElement('button');
                  backButton.setAttribute('id','back');
                  backButton.innerHTML = 'back';
                  backButton.setAttribute('onclick',`backData(${id})`);
                  userData.appendChild(backButton);
                  document.body.appendChild(userData);
        });
    }else{
        document.getElementById(`userData${id}`).style.display = 'block';
        document.getElementById('ParentDiv').style.display ='none';
    }
}

function deleteData(id) {
    let check=confirm('are you sure you want to delete this user ?');
    if(check){
        deleteUserAndRender(id);
    }else{
        return;
    }
}

function backData(id){
    document.getElementById('ParentDiv').style.display ='block';
    document.getElementById(`userData${id}`).style.display = 'none';
};
