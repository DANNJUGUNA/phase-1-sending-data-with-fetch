// Add your code here
function submitData(username,useremail){
 fetch(" http://localhost:3000/users",{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body:JSON.stringify({
      email:useremail,
      name:username
    })
  })
  .then(response=>response.json())
  .then()
  .catch((error)=>{
    alert("error message")
    console.log(error.message);
  });

}
submitData("dan","dan567@gmail.com")