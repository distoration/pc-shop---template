        /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
            }





 
        function typing() {

                var i = 0;
                var txt = 'created by dist'; 
                /* The text */
                var speed = 30; /* The speed/duration of the effect in milliseconds */
                
                function typeWriter() {
                    if (i < txt.length) {
                    document.getElementById("demo-1").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                    }}  typeWriter() 

                    typing1()
                }




            function typing1() {  
        
                var app = document.getElementById('app');

                var typewriter = new Typewriter(app, {
                    loop: true
                });
                
                typewriter.typeString('Welcome in our shop!')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('You can buy great PC here!')
                    .pauseFor(2500)
                    .deleteChars(7)
                    .typeString('<strong>real great</strong>')
                    .pauseFor(2500)
                    .start();
                }  