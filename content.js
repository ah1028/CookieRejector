function autoReject(){
    const rejectTexts = ["decline", "reject", "disagree", "decline"];
    const buttonList = document.querySelectorAll("button");

    for (let btn of buttonList){
        let txt = btn.textContent.trim().toLowerCase();
        const valid = rejectTexts.some(text => txt.includes(text.toLowerCase()))
        if (valid){
            btn.click();
            console.log("rejected");
            break;
        }
    }

    // If can't find a reject, try options -> Save

}

window.addEventListener("load", autoReject);