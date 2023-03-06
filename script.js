// alert("UggUBuggaGummibeer");
        // confirm("Vil du lave lektier");
        // document.write("Hej Verden");
        // document.addEventListener("click",function(){
        //     alert("Hej der")
        // });

        document.querySelector("#link").addEventListener("click",function(){
            alert("Hej der")
        });

        function skift() {
            document.querySelector('#ti').className='skift';
        }

        function normal() {
            document.querySelector('#ti').className='normal';
        }

        function rød() {
            document.querySelector('#tolv').style.backgroundColor='red';
        }
        function grøn() {
            document.querySelector('#tolv').style.backgroundColor='green';
        }
        function blå() {
            document.querySelector('#tolv').style.backgroundColor='blue';
        }
        function hvid() {
            document.querySelector('#tolv').style.backgroundColor='white';
        }