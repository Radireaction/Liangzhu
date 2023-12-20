window.onload=()=>{
    var ps = document.querySelectorAll(".nav_bac>p")
        for (let i = 0; i < ps.length; i++) {
            const element = ps[i];
            element.addEventListener("animationend",()=>{
               element.style.opacity=1
            })
        }

        var ps1 = document.querySelectorAll("#bac_3>p")
        for (let i = 0; i < ps1.length; i++) {
            const element = ps1[i];
            element.addEventListener("animationend",()=>{
               element.style.opacity=1
            })
        }

        var ps2 = document.querySelectorAll(".b4>.cc")
        for (let i = 0; i < ps2.length; i++) {
            const element = ps2[i];
            element.addEventListener("animationend",()=>{
               element.style.opacity=1
            })
        }
        var dd = document.querySelectorAll("#bac_5>.dd")
        for (let i = 0; i < dd.length; i++) {
            const element = dd[i];
            element.addEventListener("animationend",()=>{
               element.style.opacity=1
            })
        }
}
function moveOther(){
    var urlParams = new URLSearchParams(window.location.search);
    var i = parseInt(urlParams.get('i'));
    location.href = "https://radireaction.github.io/Liangzhu/index4.html?i=" + (i||1);
}
