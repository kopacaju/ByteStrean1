// cookies.js - Centrálna správa cookies

// Nastavenie cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Získanie hodnoty konkrétnej cookie
  function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
  
  // Vymazanie konkrétnej cookie
  function deleteCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
  }
  
  // Príklad použitia
  setCookie("user", "Jakub", 7); // Nastaví cookie "user" s hodnotou "Jakub" na 7 dní
  console.log(getCookie("user")); // Vypíše hodnotu cookie "user"
  deleteCookie("user"); // Vymaže cookie "user"
  