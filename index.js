$(document).ready(()=>{
    const storedVal = {
        "project" : {
            "isOn" : false
        },
        "project1" : {
            "isOn" : false
        },
        "isBlack" : document.cookie != '' ? Boolean(Number(document.cookie)) : true
    }
    const cssGlobalBlack = {
        // "--base-color":"linear-gradient(to left top, #333333, #333333, #343434, #343434, #343434, #353535, #373637, #383738, #3b3a3a, #3e3c3d, #403f3f, #434242)",
        "--base-color":"#353535",
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
    };
    const cssGlobalWhite = {
        "--base-color":"#f0eaff",
        "--text":"#595959",
        "--varela":" 'Varela Round', sans-serif",
        "--poppins":" 'Poppins', sans-serif",
        "--sub-h1":"#8685EF",
        "--head-side":"#f0eaff",
        "--each-content":"#f0eaff",
        "--desc-and-real-content":"#e5e5e5",
        "--arrow-wrapper":"#FAF8FF",
        "--box-shadow":" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        "--border-top":"#8685EF",
        "--arrow":" #8685EF"
    };
    if(!storedVal.isBlack){
        $(":root").css(cssGlobalWhite)
    }
    $('.arrow-wrapper').click(function(){
        
        if(!storedVal[this.id]["isOn"]){
            $(this).siblings(".real-content").toggle();
            $(".arrow").css({
                "transform":"rotate(180deg) translateY(-50%)",
            });
            storedVal[this.id]["isOn"] = true;
        }else{
            $(".arrow").css({
                "transform":"rotate(360deg)",
            });
            $(this).siblings(".real-content").toggle();
            storedVal[this.id]["isOn"] = false;
        }
    })
    $("#adjust-right").click(function(){
        if(storedVal.isBlack){
            $(":root").css(cssGlobalWhite)
            storedVal.isBlack = false;
            document.cookie = 0;
        }else{
            $(":root").css(cssGlobalBlack)
            storedVal.isBlack = true;
            document.cookie = 1;
        }
    })
});