function myFunction(){
    var length1=parseInt(document.getElementById('length1').value);
    var length2=parseInt(document.getElementById('length2').value);
    var length3=parseInt(document.getElementById('length3').value);
       if(length1==length2 && length1==length3){
        document.getElementById('final').innerHTML = "THIS IS AN EQUILATERAL TRIANGLE";
           }
           else if(length2==length1 || length2==length3 || length3==length1){
               document.getElementById('final').innerHTML = "THIS IS AN ISOSCELES TRIANGLE";
        }
        else if(length2 + length1>length3 || length3 + length1>length2 || length3 + length2>length1){
            document.getElementById('final').innerHTML = "THIS IS A SCALENE TRIANGLE";
        }
        else if(length2+length1<length3 || length3+length1<length2 || length3+length2>!length1){
            document.getElementById('final').innerHTML = "THIS IS NOT A TRIANGLE";
        }
       }
    