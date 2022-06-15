// Creem un cookie pentru a stoca faptul ca primul buton a fost apasat
setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (60 * 1000)); //cookie-ul expira intr-un minut
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";

}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
}


document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".btn").style.display = "none";
    document.querySelector(".S-btn").style.display = "block";
    setCookie("cookie", true, 30);
})

cookieMessage = () => {
    if(!getCookie("cookie"))    {
        document.querySelector(".btn").style.display = "block";
        document.querySelector(".S-btn").style.display = "block";
    } else {
        document.querySelector(".btn").style.display = "none";
        document.querySelector(".S-btn").style.display = "block";
    }
}

window.addEventListener("load", cookieMessage);