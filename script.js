function myFunction(){
    var length1=parseInt(document.getElementById('length1').value);
    var length2=parseInt(document.getElementById('length2').value);
    var length3=parseInt(document.getElementById('length3').value);
      
      if(length1<=0 || length2<=0 || length3<=0){
          document.getElementById("come").innerText="INVALID INPUT!";
      }
      else if(length1 + length2<=length3 || length1 + length3<=length2 || length2 + length3<=length1){
          document.getElementById("come").innerText="NOT A TRIANGLE!";
      }
       else if(length1 === length2 && length2===length3 && length1===length3){
           document.getElementById("come").innerText="EQUILATERAL TRIANGLE!-all sides are equal";
       }
       else if(length1 == length2 && length1 !==length3 || length2 == length3 && length1 !==length3 || length1==length3 && length1 !==length2){
        document.getElementById("come").innerText="ISOSCELES TRIANGLE!-two sides are equal!"
    }
    else if (length1 !==length2 !==length3){
        document.getElementById("come").innerText="SCALENE TRIANGLE!.all sides are not equal!"
    }
};

function myAnswer(){
    var ANSWER=parseInt(document.getElementById('answer').value);

    if(ANSWER===24){
        document.getElementById("good").innerHTML="WELL DONE!";
    }
    else if(ANSWER >24 || ANSWER<24){
        document.getElementById("good").innerHTML="KEEP TRYING!";
    }
};