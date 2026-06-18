const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    const icon = darkBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    else{

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});
