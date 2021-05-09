console.log("testing");
let newEmailButton = document.getElementById("newEmailButton");
//let emailValue = document.getElementById("emailValue").value;
let submit = document.getElementById("0submit");
let detailEmailButton = document.getElementById("detailEmailButton");
let emailArray = [];
let i = 0;
newEmailButton.addEventListener("click", (e) => {
  addEmail();
  e.preventDefault();
});
//add email
function addEmail() {
  i++;
  let newEmail = document.getElementById("newEmail");
  newEmail.innerHTML += ` <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="emailValue${i}" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div> 
  <button type="submit" class="btn btn-primary" id="${i}submit" onclick="submitFunc(event,this.id)" >Submit</button>
  </form>
  `;
}

function submitFunc(e, ind) {
  console.log(i);
  ind = ind.charAt(0);

  let emailValue = document.getElementById(`emailValue${ind}`).value;

  emailArray.push(emailValue);
  console.log(emailArray);
  clear(ind);
  e.preventDefault();
}

//show function
detailEmailButton.addEventListener("click", (e) => {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = null;
  emailArray.forEach((element) => {
    if (element != "") {
      let html = `<tr>
    <th scope="col">${element}</th>
    </tr>`;
      tableBody.innerHTML += html;
    }
  });

  e.preventDefault();
});

const clear = (ind) => {
  let emailValue = document.getElementById(`emailValue${ind}`);
  emailValue.value = " ";
};
