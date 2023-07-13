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
function showBandTooltip() {
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
function getCookie(cName) {
  let name = cName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      result = c.substring(name.length, c.length);
      console.log(`>>> [Sys.cookies]: cookies '${cName}' returned`);
      return result;
    }
  }
  return null;
}
function setCookie(cName, cValue, cPath = "/") {
  if (getCookie(cName) != null) {
    document.cookie = `${cName}=${cValue}; path=${cPath};`;
    console.log(`>>> [Sys.cookies]: cookies '${cName}' is updated`);
  } else {
    document.cookie = `${cName}=${cValue}; path=${cPath};`;
    console.log(`>>> [Sys.cookies]: cookies '${cName}' is created`);
  }
}
function deleteCookie(cName, cPath = "/") {
  if (getCookie(cName) != null) {
    document.cookie = `${cName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${cPath};`;
    console.log(`>>> [Sys.cookies]: cookies '${cName}' deleted`);
  } else {
    console.log(`>>> [Sys.cookies]: cookies '${cName}' not found!`);
  }
}
function defineLang(lang = "en") {
  setCookie("displayLang", lang, "/displayLang");
}
function changeLangView() {
  // change display langauge to defined (desired) language by user
  const settingElement = document.getElementById("html-tag");
  const THcon = document.getElementsByTagName("th-con");
  const ENcon = document.getElementsByTagName("en-con");
  const ZHcon = document.getElementsByTagName("zh-con");
  const langList = [THcon, ENcon, ZHcon];
  const size = () => {
    let max = 0;
    for (let i = 0; i < langList.length; ++i) {
      if (langList[i].length > max) {
        max = langList[i].length;
      }
    }
    return max;
  }; // get biggest size
  console.log(`>>> [Sys.displayLang]: biggest content amount = ${size()}`);
  let initialLang = "";
  let success = false;
  // set the desired lang at the head first

  initialLang = settingElement.getAttribute("lang");
  if (getCookie("displayLang") == null) {
    defineLang("en"); // if user is not set their prefer display lang then reset to default display lang (EN)
  }
  settingElement.setAttribute("lang", getCookie("displayLang"));

  // read the desired lang from the head and change them
  for (let i = 0; i < size(); ++i) {
    if (settingElement.getAttribute("lang") == "th") {
      // EN to TH
      try {
        // prevent out of index err or other err
        THcon[i].style.display = "block";
        ENcon[i].style.display = "none";
        if (
          THcon[i].style.display == "block" &&
          ENcon[i].style.display == "none"
        ) {
          success = true;
        }
      } catch (error) {
        console.log(error);
      }
    } else if (settingElement.getAttribute("lang") == "en") {
      // TH to EN
      try {
        // prevent out of index err or other err
        THcon[i].style.display = "none";
        ENcon[i].style.display = "block";
        if (
          ENcon[i].style.display == "block" &&
          THcon[i].style.display == "none"
        ) {
          success = true;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(
        ">>> [Sys.displayLang]: desired language is not yet available!"
      );
    }
  }
  // if lang is successfully changed
  if (success == true) {
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
