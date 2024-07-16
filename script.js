
let countNumText = document.getElementById("count");
let bgImg =  document.getElementsByClassName("fireWork");
countNumText.innerHTML = "10"

setTimeout(() => {
        countNumText.innerText = "9";  
        setTimeout(() => {
            countNumText.innerText = "8";  
            setTimeout(() => {
                countNumText.innerText = "7";  
                setTimeout(() => {
                    countNumText.innerText = "6";  
                    setTimeout(() => {
                        countNumText.innerText = "5";  
                        setTimeout(() => {
                            countNumText.innerText = "4";  
                            setTimeout(() => {
                                countNumText.innerText = "3";
                                setTimeout(() => {
                                    countNumText.innerText = "2"; 
                                    setTimeout(() => {
                                        countNumText.innerText = "1";  
                                        setTimeout(() => {
                                        
                                          
                                            countNumText.style.cssText = "font-size:50px;color: #e6a2b8;-webkit-text-stroke-width: 2.5px;-webkit-text-stroke-color: #039BE5;";
                                            countNumText.innerText = "Happy Indenpendence day";  
                                            bgImg[0].style.cssText = "display:block;"
                                        },1000)
                                    },1000) 
                                },1000)  
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)

