$(document).ready(()=>{
    const storedVal = {
        "project" : {
            "isOn" : false
        },
        "not-decided-yet" : {
            "isOn" : false
        },
    }
    console.log("done");
    $('.arrow-wrapper').click(function(){
        
        if(!storedVal[this.id]["isOn"]){
            $(":root").css({
                "--base-color":"linear-gradient(to left top, #333333, #333333, #343434, #343434, #343434, #353535, #373637, #383738, #3b3a3a, #3e3c3d, #403f3f, #434242)",
                "--text" :"#eee",
                "--varela" : "'Varela Round', sans-serif",
                "--poppins": "'Poppins', sans-serif",
                "--sub-h1" :"#B19DAF",
                "--head-side":"#353535",
                "--each-content":"#454545",
                "--desc-and-real-content":"#3f3f3f",
                "--arrow-wrapper": "#333333" ,
                "--box-shadow" : "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
                "--border-top":"#eee",
                "--arrow": "#eee"
            })
            storedVal[this.id]["isOn"] = true;
        }else{
            console.log("now off");
        }
    })
});