import "./styles.css";

const loginfld = document.querySelector("#login_fld"),
  passfld = document.querySelector("#pass_fld"),
  submitbtn = document.querySelector("button[type='submit']"),
  regex = {
    login: "fish",
    pass: "sticks",
    //pass: "."
  };

let debounceTimeout;

loginfld.addEventListener("input", (el) => validateLogin(el));
passfld.addEventListener("input", (el) => validatePass(el));
submitbtn.addEventListener("click", (ev) => submitForm(ev));

function validateLogin(el) {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout((t) => {
    let valid = loginfld.value.match(regex.login);
    if (valid === null) {
      loginfld.removeAttribute("valid");
      loginfld.setAttribute("invalid", "");
    } else {
      loginfld.removeAttribute("invalid");
      loginfld.setAttribute("valid", "");
    }
    enableSubmitBtn();
  }, 1000);
}

function validatePass(el) {
  let valid = passfld.value.match(regex.pass);
  if (valid === null) {
    passfld.removeAttribute("valid");
    passfld.setAttribute("invalid", "");
  } else {
    passfld.removeAttribute("invalid");
    passfld.setAttribute("valid", "");
  }

  enableSubmitBtn();
}

function enableSubmitBtn() {
  let loginvalid = loginfld.hasAttribute("valid"),
    passvalid = passfld.hasAttribute("valid");

  if (loginvalid && passvalid) {
    submitbtn.removeAttribute("disabled");
  } else {
    submitbtn.setAttribute("disabled", "");
  }
}

function submitForm(el) {
  el.preventDefault();
  console.log("success");
  function loadIframe() {
    const iframe = document.createElement("iframe");
    iframe.src = "homepage.html";
    const removeDiv = document.getElementById("app");
    removeDiv.remove();
    iframe.width = "100vw";
    iframe.height = "100vw";
    document.body.appendChild(iframe);
    window.scrollTo(0, document.body.scrollHeight);
  }

  loadIframe(); // Call the function to load the iframe
}
