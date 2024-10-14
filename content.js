function autoReject(){
    const rejectTexts = ["decline", "reject", "disagree", "decline", "options", "essential"];
    const buttonList = document.querySelectorAll("button");
    let rejected = false;

    for (let btn of buttonList){
        let txt = btn.textContent.trim().toLowerCase();
        const valid = rejectTexts.some(text => txt.includes(text.toLowerCase()))
        if (valid){
            btn.click();
            console.log("rejected");
            rejected = true;
            break;
        }
    }
/*
    if (!rejected){
        const buttonList1 = document.querySelectorAll("button");
        console.log(buttonList1);
        for (let btn of buttonList1){
            let txt = btn.textContent.trim().toLowerCase();
            console.log(txt);
            /*if (txt == "options"){
                btn.click();
                console.log("options");
                rejected = true;
                break;
            }
        }
    }*/

}

window.addEventListener("load", autoReject);