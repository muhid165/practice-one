const socialLinkAdd = document.querySelector(".add-social-link");
const form = document.querySelector(".form-container");

// adding course work space
const courseworkAdd = document.querySelector(".add-additional-coursework");
const form2 = document.querySelector(".form-container2");


const skillAdd = document.querySelector(".add-addMore-skills");
const form3 = document.querySelector(".form-container3");

const firstNameInput = document.querySelector("#firstname_input");
const firstNameOutput = document.querySelector("#firstname_output");

const lastnameInput = document.querySelector("#lastname_input");
const lastnameOutput = document.querySelector("#lastname_output");

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

firstNameInput.addEventListener("input", (event) => {
  firstNameOutput.textContent = event.target.value;
});

lastnameInput.addEventListener("input", (event) => {
  lastnameOutput.textContent = event.target.value;
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







