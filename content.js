function autoReject(){
    const rejectTexts = ["decline", "reject", "disagree", "decline"];
    const buttonList = document.querySelectorAll("button");

    for (let btn of buttonList){
        let txt = btn.textContent.trim().toLowerCase();
        let name = btn.name.toLowerCase();
        if (rejectTexts.includes(txt) || rejectTexts.includes(name)){
            btn.click();
            console.log("rejected");
            break;
        }
    }
}

window.addEventListener("load", autoReject);