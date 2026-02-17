src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"
   
    //  <!-- Setup and start animation! -->
        var typed = new Typed('#element', {
        strings: ['Video Editor','Web Designer','Web Developer'],
        typeSpeed: 50,
        });
     

        function toggleMenu(){
        const nav=document.getElementById("navLinks");
        const icon=document.getElementById("menuIcon");

        nav.classList.toggle("show");

        if(nav.classList.contains("show")){
        icon.classList.replace("fa-bars","fa-xmark");
        }else{
        icon.classList.replace("fa-xmark","fa-bars");
        }
        }



        function opentab(tabname,event){
            let tablinks = document.getElementsByClassName("tab-links");
            let tabcontents = document.getElementsByClassName("tab-contents");
                for(let tablink of tablinks){
                    tablink.classList.remove("active-link");
                }
                for( let tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
                }
                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab");
        }

