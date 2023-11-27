const tabLinks = document.getElementsByClassName("tab-links");

const tabContents = document.getElementsByClassName("tab-content");

const opentab = (tabname) => {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active");
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove("active");
  }

  event.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("active");
};

const sidemenu = document.getElementById("sidemenu");

const openMenu = () => {
  sidemenu.style.right = "0";
};

const closeMenu = () => {
  sidemenu.style.right = "-250px";
};

const showMoreWork = () => {
  const hiddenWork = document.getElementsByClassName("more-work");
  hiddenWork[0].style.display = "grid";
};

const msg = document.getElementById("msg");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMrX8y6W4Jr505Z6tjvVlQYraYS0y8THianiiiatXD6t5u9SKu1ASyCEisbgWv8l8Brw/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Your response is submitted successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
