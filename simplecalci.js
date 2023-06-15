let calculations= localStorage.getItem('calculations')||'';
      function updateCalculation(input){
        if(input!==' = '){
          calculations+=input;
          //console.log(calculations);
        }
        else{
          calculations=eval(calculations);
          //console.log(calculations);
        }
        resultToDisplay();
        localStorage.setItem('calculations',calculations);
      }
      function resultToDisplay(){
        let displayResult=document.querySelector('.calculation');
        displayResult.innerHTML=calculations;
      }
      function clearbutton(){
        calculations='';
        //console.log(calculations);
        localStorage.removeItem('calculations');
        resultToDisplay();
      }