const socialLinkAdd = document.querySelector(".add-social-link");
const form = document.querySelector(".form-container");

// adding course work space
const courseworkAdd = document.querySelector(".add-additional-coursework");
const form2 = document.querySelector(".form-container2");


const skillAdd = document.querySelector(".add-addMore-skills");
const form3 = document.querySelector(".form-container3");

// CONNECTING THE FORM WITH THE TEMPLATE FROM HERE !!!!!!!!!!

const firstNameInput = document.querySelector("#firstname_input");
const firstNameOutput = document.querySelector("#firstname_output");

const lastnameInput = document.querySelector("#lastname_input");
const lastnameOutput = document.querySelector("#lastname_output");

const phoneInput = document.querySelector("#phone_input");
const phoneOutput = document.querySelector("#phone_output");

const emailInput = document.querySelector("#email_input");
const emailOutput = document.querySelector("#email_output");

const jobTitleInput = document.querySelector("#jobTitle_input");
const jobTitleOutput = document.querySelector("#jobTitle_output");

const interestInput = document.querySelector("#interest_input");
const interestOutput = document.querySelector("#interest_output");

const addrInput = document.querySelector("#addr_input");
const addrOutput = document.querySelector("#addr_output");

const cityInput = document.querySelector("#city_input");
const cityOutput = document.querySelector("#city_output");

const pcodeInput = document.querySelector("#pcode_input");
const pcodeOutput = document.querySelector("#pcode_output");

const sttInput = document.querySelector("#stt_input");
const sttOutput = document.querySelector("#stt_output");

const cntryInput = document.querySelector("#cntry_input");
const cntryOutput = document.querySelector("#cntry_output");

const schlInput = document.querySelector("#schl_input");
const schlOutput = document.querySelector("#schl_output");

const lctInput = document.querySelector("#lct_input");
const lctOutput = document.querySelector("#lct_output");

const degInput = document.querySelector("#deg_input");
const degOutput = document.querySelector("#deg_output");

const fldInput = document.querySelector("#fld_input");
const fldOutput = document.querySelector("#fld_output");

const grdInput = document.querySelector("#grd_input");
const grdOutput = document.querySelector("#grd_output");

const sclwbstInput = document.querySelector("#sclwbst_input");
const sclwbstoutput = document.querySelector("#sclwbst_output");

const sclLinkInput = document.querySelector("#sclLink_input");
const sclLinkoutput = document.querySelector("#sclLink_output");

const skll1Input = document.querySelector("#skl_input1");
const skill1output = document.querySelector("#skl_output1");

const sklLvlInput1 = document.querySelector("#sklLvl_input1");
const sklLvloutput1 = document.querySelector("#sklLvl_output1");

const jbttlInput1 = document.querySelector("#jbttl_input1");
const jbttloutput1 = document.querySelector("#jbttl_output1");


const empInput = document.querySelector("#emp_input");
const empoutput = document.querySelector("#emp_output");

const city2Input = document.querySelector("#city2_input");
const city2output = document.querySelector("#city2_output");

const cntry2Input = document.querySelector("#cntry2_input");
const cntry2output = document.querySelector("#cntry2_output");


city2Input.addEventListener("input", (event) => {
  city2output.textContent = event.target.value;
});

cntry2Input.addEventListener("input", (event) => {
  cntry2output.textContent = event.target.value;
});



empInput.addEventListener("input", (event) => {
  empoutput.textContent = event.target.value;
});


jbttlInput1.addEventListener("input", (event) => {
  jbttloutput1.textContent = event.target.value;
});


skll1Input.addEventListener("input", (event) => {
  skill1output.textContent = event.target.value;
});

sklLvlInput1.addEventListener("input", (event) => {
  sklLvloutput1.textContent = event.target.value;
});



firstNameInput.addEventListener("input", (event) => {
  firstNameOutput.textContent = event.target.value;
});

lastnameInput.addEventListener("input", (event) => {
  lastnameOutput.textContent = event.target.value;
});

phoneInput.addEventListener("input",(event) => {
  phoneOutput.textContent = event.target.value;
});

emailInput.addEventListener("input",(event) => {
  emailOutput.textContent = event.target.value;
});

jobTitleInput.addEventListener("input",(event) => {
  jobTitleOutput.textContent = event.target.value;
});

interestInput.addEventListener("input",(event) => {
  interestOutput.textContent = event.target.value;
});

addrInput.addEventListener("input",(event) => {
  addrOutput.textContent = event.target.value;
});

cityInput.addEventListener("input",(event) => {
  cityOutput.textContent = event.target.value;
});

//n
pcodeInput.addEventListener("input",(event) => {
  pcodeOutput.textContent = event.target.value;
});

sttInput.addEventListener("input",(event) => {
  sttOutput.textContent = event.target.value;
});

cntryInput.addEventListener("input",(event) => {
  cntryOutput.textContent = event.target.value;
});


schlInput.addEventListener("input",(event) => {
  schlOutput.textContent = event.target.value;
});

lctInput.addEventListener("input",(event) => {
  lctOutput.textContent = event.target.value;
});

degInput.addEventListener("input",(event) => {
  degOutput.textContent = event.target.value;
});

fldInput.addEventListener("input",(event) => {
  fldOutput.textContent = event.target.value;
});

grdInput.addEventListener("input",(event) => {
  grdOutput.textContent = event.target.value;
});


// sclwbstInput.addEventListener("input", (event) => {
//   sclwbstoutput.textContent = event.target.value;
// });


// sclLinkInput.addEventListener("input", (event) => {
//   sclLinkoutput.textContent = event.target.value;
// });








// id="sclLink_input"   id="sclwbst_input" 


socialLinkAdd.addEventListener("click", () => {
  const socialElements = `<div class="input-container2">
    <div class="input-wrapper">
      <label for="ste">Website</label><br />
      <input type="text" class="social-input" />
    </div>
    <div class="input-wrapper">
      <label for="cntry">Link</label><br />
      <input type="text" class="social-input" />
    </div>
    <button class="dlbtnclass" onclick="deleteSocialLink(event)">🗑️</button>
  </div>`;
  form.insertAdjacentHTML("beforeend", socialElements);
});


const deleteSocialLink = (event) => {
  event.preventDefault();
  event.target.parentNode.remove();
};

courseworkAdd.addEventListener("click", () => {
  const courseWorkElements = `<div class="input-container2">
  <div class="input-wrapper">
    <label>Add work here </label><br>
    <textarea name="txt-area" id="txt-area" cols="70" rows="6" class="input-wrapper" placeholder="e.g. Internships, certifications,ect "></textarea>
  </div>
  <button class="dlbtnclass" onclick="deleteCourseWork(event) style="height: 25px" ">🗑️</button>
</div>`;
  form2.insertAdjacentHTML("beforeend", courseWorkElements);
});

const deleteCourseWork = (event) => {
  event.preventDefault();
  event.target.parentNode.remove();
};




skillAdd.addEventListener("click",() => {
  const skillElement = `<div class="input-container3">
  <div class="input-wrapper">
    <label for="frstnm">Skill</label><br />
    <input type="text" class="input" id="" placeholder="e.g.Project Management,Online Marketing, Backend Developer" />
  </div>
  <div class="input-wrapper">
    <label for="lsttnm">Level</label><br />
    <select name="skills" id="skills" style="width: 200px; height: 27px; border: 1px black solid; border-radius: 5px;">
      <option value="novice">⚫⚪⚪⚪⚪-Novice</option>
      <option value="beginner">⚫⚫⚪⚪⚪-Beginner</option>
      <option value="skillfull">⚫⚫⚫⚪⚪-Skillfull</option>
      <option value="exp">⚫⚫⚫⚫⚪-Exprienced</option>
      <option value="expr">⚫⚫⚫⚫⚫-Expert</option>
    </select>
  </div>
  <button class="dlbtnclass" onclick="deleteskill(event)">🗑️</button>
</div>`;
form3.insertAdjacentHTML("beforeend",skillElement);
});

const deleteskill = (event) => {
  event.preventDefault();
  event.target.parentNode.remove();
};













