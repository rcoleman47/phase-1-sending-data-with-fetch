// Add your code here
function submitData(userName, uEmail){
  return callFetch(userName, uEmail)
}

function callFetch(userName,uEmail){
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: uEmail,
    })
  })
  .then(resp=>resp.json())
  .then(data=>{
    const body = document.querySelector('body')
    const li = document.createElement("li")
    li.textContent = data.id
    body.append(li)
  })
  .catch((error)=>{
    const body = document.querySelector('body')
    const div = document.createElement("li")
    div.textContent = error
    body.append(div)
  })
}


submitData("my name", "my email")
