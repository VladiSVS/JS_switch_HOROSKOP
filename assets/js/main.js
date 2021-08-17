document.getElementById("astroCard").style.display = "none"

function showHoroskop() {
    document.getElementById("astroCard").style.display = "block"
    let a = document.getElementById("info").value
    switch (a) {
        case "Mar":
        case "mar":
            document.getElementById("astroImg").src = "assets/img/icon_aries.png"
            document.getElementById("astroName").innerHTML = "ARIES"
            document.getElementById("astroText").innerHTML = "oday your patience might be tested when one or more of your projects gets put on hold by someone…"
            break;
        case "Apr":
        case "apr":
            document.getElementById("astroImg").src = "assets/img/icon_taurus.png"
            document.getElementById("astroName").innerHTML = "TAURUS"
            document.getElementById("astroText").innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
            break;
        case "May":
        case "mya":
            document.getElementById("astroImg").src = "assets/img/icon_gemini.png"
            document.getElementById("astroName").innerHTML = "GEMINI"
            document.getElementById("astroText").innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
            break;
        case "Jun":
        case "jun":
            document.getElementById("astroImg").src = "assets/img/icon_cancer.png"
            document.getElementById("astroName").innerHTML = "CANCER"
            document.getElementById("astroText").innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…"
            break;
        case "Jul":
        case "jul":
            document.getElementById("astroImg").src = "assets/img/icon_leo.png"
            document.getElementById("astroName").innerHTML = "LEO"
            document.getElementById("astroText").innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
            break;
        case "Aug":
        case "aug":
            document.getElementById("astroImg").src = "assets/img/icon_virgo.png"
            document.getElementById("astroName").innerHTML = "VIRGO"
            document.getElementById("astroText").innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
            break;
        case "Sep":
        case "sep":
            document.getElementById("astroImg").src = "assets/img/icon_libra.png"
            document.getElementById("astroName").innerHTML = "LIBRA"
            document.getElementById("astroText").innerHTML = "Pick a cultural event that's coming up and get some tickets for it today."
            break;
        case "Oct":
        case "oct":
            document.getElementById("astroImg").src = "assets/img/icon_scorpio.png"
            document.getElementById("astroName").innerHTML = "SCORPIO"
            document.getElementById("astroText").innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
            break;
        case "Nov":
        case "nov":
            document.getElementById("astroImg").src = "assets/img/icon_sagittarius.png"
            document.getElementById("astroName").innerHTML = "SAGITTARIUS"
            document.getElementById("astroText").innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
            break;
        case "Dec":
        case "dec":
            document.getElementById("astroImg").src = "assets/img/icon_capricorn.png"
            document.getElementById("astroName").innerHTML = "CAPRICORN"
            document.getElementById("astroText").innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity. "
            break;
        case "Jan":
        case "jan":
            document.getElementById("astroImg").src = "assets/img/icon_aquarius.png"
            document.getElementById("astroName").innerHTML = "AQUARIUS"
            document.getElementById("astroText").innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
            break;
        case "Feb":
        case "feb":
            document.getElementById("astroImg").src = "assets/img/icon_pisces.png"
            document.getElementById("astroName").innerHTML = "PISCES"
            document.getElementById("astroText").innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
            break;
        default:
            document.getElementById("astroName").innerHTML = "NOT FOUND"
            break;
    }
}