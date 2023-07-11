// lukecreated base scripts

function bandTooltip(hide = false) {
  const tooltip = bootstrap.Tooltip.getInstance("#band");
  tooltip.show();
  if (hide == true) {
    const tooltip = bootstrap.Tooltip.getInstance("#band");
    tooltip.hide();
  }
}
function cookiesNotice() {
  const cookies = document.getElementById("cookiesNotice");
  const toast = new bootstrap.Toast(cookies);
  toast.show();
}
function defaulter() {
  // enable global tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // deal with `#band` tooltip
  bandTooltip();
  setTimeout(bandTooltip, 4500, true); // set autohide
  // toast
  const cookiesNotice = document.getElementById("cookiesNotice");
  const toast = new bootstrap.Toast(cookiesNotice);
  toast.show();
}
function setLangView(language = "en") {
  const settingElement = document.getElementById("html-tag");
  const THcon = document.getElementsByTagName("th-con");
  const ENcon = document.getElementsByTagName("en-con");
  const size = THcon.length > ENcon.length ? THcon.length : ENcon.length; // get biggest size
  console.log(`biggest content amount: ${size}`);
  let initialLang = "";
  let success = false;
  if (settingElement.getAttribute("lang") == "en") {
    settingElement.setAttribute("lang", "th");
    initialLang = "en";
  } else {
    settingElement.setAttribute("lang", "en");
    initialLang = "th";
  }
  for (let i = 0; i < size; ++i) {
    if (settingElement.getAttribute("lang") == "th") {
      // EN to TH)
      try {
        // prevent out of index err or other err
        THcon[i].style.display = "block";
        ENcon[i].style.display = "none";
        if (
          THcon[i].style.display == "block" &&
          ENcon[i].style.display == "none" &&
          initialLang == "th"
        ) {
          success = true;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // TH to EN
      try {
        // prevent out of index err or other err
        THcon[i].style.display = "none";
        ENcon[i].style.display = "block";
        if (
          ENcon[i].style.display == "block" &&
          THcon[i].style.display == "none" &&
          initialLang == "en"
        ) {
          success = true;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  // if lang is successfully changed
  if (success === true) {
    switch (initialLang) {
      case "th": // from TH to EN
        alert("Language is successfully changed to ENG");
        break;
      case "en": // from EN to TH
        alert("เปลี่ยนเป็นภาษาไทยสำเร็จแล้ว");
        break;
      default:
        break;
    }
  }
}
