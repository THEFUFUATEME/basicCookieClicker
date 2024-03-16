let cookies = 0;
let clickMultiplier = 1;
let autoClickers = 0;
let grandmaCount = 0;
let farmCount = 0;
let reasearchFacility = 0;
let milkCount = 0;
let godCount = 0;
let achievements = {
  'First Click': false,
  'Click Master': false,
  'Grandma Lover': false,
  'Farm Owner': false,
  'Researcher': false,
  'Milk Enthusiast': false,
  'Reached GOD': false
};

function clickCookie() {
  cookies += clickMultiplier;
  checkAchievements();
  updateCookieCount();
}

function updateCookieCount() {
  document.getElementById("cookie-count").textContent = cookies;
}

function buyMultiplier() {
  if (cookies >= 10) {
    cookies -= 10;
    clickMultiplier++;
    updateCookieCount();
    checkAchievements();
  } else {
    alert("Not enough cookies!");
  }
}

function buyAutoClicker() {
  if (cookies >= 50) {
    cookies -= 50;
    autoClickers++;
    setInterval(autoClickCookies, 1);
    updateCookieCount();
    checkAchievements();
  } else {
    alert("Not enough cookies!");
  }
}

function buyGrandma() {
  if (cookies >= 100) {
    cookies -= 100;
    grandmaCount++;
    setInterval(autoClickGrandma, 1);
    updateCookieCount();
    checkAchievements();
  } else {
    alert("Not enough cookies!");
  }
}

function buyFarm() {
  if (cookies >= 500) {
    cookies -= 500;
    farmCount++;
    setInterval(autoClickFarm, 1);
    updateCookieCount();
    checkAchievements();
  } else {
    alert("Not enough cookies!");
  }
}

function buyReasearchFacility() {
    if (cookies >= 500000) {
      cookies -= 500000;
      reasearchFacilityCount++;
      setInterval(autoClickReasearchFacility, 10);
      updateCookieCount();
      checkAchievements();
    } else {
      alert("Not enough cookies!");
    }
  }

function buyMilk() {
  if (cookies >= 10000000) {
    cookies -= 10000000;
    milkCount++;
    clickMultiplier += 5;
    updateCookieCount();
    checkAchievements();
  } else {
    alert("Not enough cookies!");
  }
}

function buyGOD() {
    if (cookies >= 100000000000000000000) {
      cookies -= 10000000000000000000;
      godCount++;
      setInterval(autoClickFarm, 42069);
      updateCookieCount();
      checkAchievements();
    } else {
      alert("Not enough cookies!");
    }
  }

function autoClickCookies() {
  cookies += autoClickers;
  updateCookieCount();
}

function autoClickGrandma() {
  cookies += grandmaCount * 2;
  updateCookieCount();
}

function autoClickFarm() {
  cookies += farmCount * 5;
  updateCookieCount();
}

function autoClickReasearchFacility() {
    cookies += reasearchFacility * 10;
    updateCookieCount();
  }

  function autoClickGOD() {
    cookies += godCount * 42069;
    updateCookieCount();
  }

function checkAchievements() {
  if (!achievements['First Click'] && cookies >= 1) {
    alert("Congratulations! You clicked your first cookie!");
    achievements['First Click'] = true;
  }
  if (!achievements['Click Master'] && cookies >= 1000) {
    alert("Wow! You are a Click Master!");
    achievements['Click Master'] = true;
  }
  if (!achievements['Grandma Lover'] && grandmaCount >= 5) {
    alert("You have 5 grandmas! Grandma Lover achievement unlocked!");
    achievements['Grandma Lover'] = true;
  }
  if (!achievements['Farm Owner'] && farmCount >= 3) {
    alert("You own 3 farms! Farm Owner achievement unlocked!");
    achievements['Farm Owner'] = true;
  }
  if (!achievements['Reasearcher'] && reasearchFacilityCount >= 1) {
    alert("You are now a proud Researcher!");
    achievements['Researcher'] = true;
  }
  if (!achievements['Milk Enthusiast'] && milkCount >= 1) {
    alert("You bought milk! Milk Enthusiast achievement unlocked!");
    achievements['Milk Enthusiast'] = true;
  }
  if (!achievements['Reached GOD'] && godCount >= 1) {
    alert("You have reached GOD Level Cookie Making well done")
    achievements['Reached GOD'] = true;
  }
}