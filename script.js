console.log("testing");
let newEmailButton = document.getElementById("newEmailButton");
let emailValue = document.getElementById("emailValue").value;
let submit = document.getElementById("submit");
let detailEmailButton = document.getElementById("detailEmailButton");
let emailArray = [];
newEmailButton.addEventListener("click", (e) => {
  let newEmail = document.getElementById("newEmail");
  newEmail.innerHTML += ` <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="emailValue" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div> 
  <button type="submit" class="btn btn-primary" id="submit">Submit</button>
  </form>
  `;
e.preventDefault();
});
submit.addEventListener("click", (e) => {
  let emailValue = document.getElementById("emailValue").value;
  console.log(emailValue);
  emailArray.push(emailValue);
  console.log(emailArray);
  clear();
  e.preventDefault();
});

//show function
detailEmailButton.addEventListener("click", (e) => {
  clear();
  let tableBody = document.getElementById("tableBody");

emailArray.forEach((element)=>{
    let html = `<tr>
<th scope="col">${element}</th>
</tr>`;
    tableBody.innerHTML += html;
});

  e.preventDefault();
});

//clear function
const clear = () => {
  let emailValue = document.getElementById("emailValue");
  emailValue.value = " ";
  tableBody.innerHTML=null;
};
