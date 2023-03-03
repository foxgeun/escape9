
      
var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var code = document.getElementById('code');

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        timer = duration;
      }
      if(timer === 0) {
        clearInterval(interval);
        display.textContent = "시간종료!";
      }
    }, 1000);
  }
  
  window.onload = function () {
    /* 기본값 10(분)입니다. */
    var minutes = 60;
  
    var fiveMinutes = (60 * minutes) - 1,
      display = document.querySelector('#MyTimer');
    startTimer(fiveMinutes, display);
  };
      const hint_Code = "555";
      const hint_Message = "경비원 옷에서 찾아보세요";
  
login.onclick = ()=>{

    if(code.value == "1h13"){
      window.location.href = 'result.html';
        return false; 
    }
    
    else if(code.value == "1r25"){
      window.open('result3.html', 'window_name', 'width=430, height=500, location=no, status=no, scrollbars=yes')
      return false;  
    }
    else if(code.value == "1s27"){
      window.open('result4.html', 'window_name', 'width=430, height=500, location=no, status=no, scrollbars=yes')
      return false;  
    }
    else if(code.value == "1j38"){
      window.open('result5.html', 'window_name', 'width=430, height=500, location=no, status=no, scrollbars=yes')
      return false;  
    }
    else if(code.value == "1k34"){
      window.open('result6.html', 'window_name', 'width=430, height=500, location=no, status=no, scrollbars=yes')
      return false;  
    }
    
    else{
        alert("힌트코드를 다시 입력해주세요.")
        return false; 
    }

    

      function showHint(event) {
        const codeInput = event.target;
        const hintElement = codeInput.nextElementSibling;

        if (codeInput.value === hint_Code) {
          hintElement.textContent = hint_Message;
        } else {
          hintElement.textContent = "";
        }
      }

      function handleLogin(event) {
        event.preventDefault();
        const codeInput = document.getElementById("code");
        const hintElement = codeInput.nextElementSibling;

        if (codeInput.value === hint_Code) {
          hintElement.textContent = hint_Message;
        } else {
          hintElement.textContent = "";
        }

        codeInput.value = "";
      }
}