window.onload = function () {
    //https://www.youtube.com/watch?v=5UyRWPKVMqs
    //Add all numbers from 1 to input number & get sum
    // getSum(4) = 10; getSum(5) = 15, etc. Expect positive int 1-1000
    const sumOutput = document.getElementById("sumOutput");
    const sumInput = document.getElementById("sumInput");
    const sumValuesButton = document.getElementById("sum-btn");

    function getSum(numToSum) {
      var sum = 0;
      for(let i = 0; i < numToSum; i++){
        sum += numToSum - i
      }
      return sum
    }
    sumValuesButton.addEventListener("click", (event) => {
      var numToSum = sumInput.value;
      sumInput.value = "";
      var sum = getSum(numToSum);
      sumOutput.innerHTML = "Sum of all numbers from " + numToSum + " to 1: " + sum.toString()
    })

/**************************************************************************************************************/
    //https://www.youtube.com/watch?v=Giosc0kZU1M
    //Create function that takes input & returns number of matchsticks need to create house 
    //  1 house (6)   2 houses (11)   3 houses (16)   87 houses (436)
    //  /_\           /_\/_\            /_\/_\/_\
    //  |_|           |_|_|             |_ |_| _|
    const houseInput = document.getElementById("houseInput");
    const houseOutput = document.getElementById("houseOutput");
    var matchStickButton = document.getElementById("matchStickButton");

    function ComputeWalls(numHouses) {
      var walls = (numHouses * 6) - (numHouses - 1);
      return walls;
    }
    matchStickButton.addEventListener("click", (event) =>{        
      var numHouses = houseInput.value;
      houseInput.value = "";
      numWalls = ComputeWalls(numHouses);
      houseOutput.innerHTML = numHouses + " Houses Require: " + numWalls.toString() + " matchsticks";
    })

/**************************************************************************************************************/
    counterText = document.getElementById("counter");
    decreaseBtn = document.getElementById("decrease-btn");
    resetBtn = document.getElementById("reset-btn");
    increaseBtn = document.getElementById("increase-btn");
    counter = 0;

    decreaseBtn.addEventListener("click", (event) => {
      counter--;
      setCounterValue()
    })
    resetBtn.addEventListener("click", (event) => {
      counter = 0;
      setCounterValue()
    })
    increaseBtn.addEventListener("click", (event) => {
      counter++;
      setCounterValue()
    })
    function setCounterValue() {
        if(counter < 0){
            counterText.style.color = "red";
        } else if(counter == 0){
            counterText.style.color = "black";
        } else{
            counterText.style.color = "green";
        }
        counterText.innerHTML = counter;
    }

/**************************************************************************************************************/
  const stopwatchStart = document.getElementById("stopwatch-start-btn");
  const stopwatchStop = document.getElementById("stopwatch-stop-btn");
  const stopwatchReset = document.getElementById("stopwatch-reset-btn");

  var secondsElement = document.getElementById("stopwatch-seconds");
  var tensElement = document.getElementById("stopwatch-tens-place");
  var seconds = 00;
  var tens = 00;
  var interval;

  stopwatchStart.addEventListener("click", (event) =>{
      clearInterval(interval); // Cancels timed/repeating action from SetInterval
      interval = setInterval(updateTimer, 10); // Call function at set interval (1000ms = 1sec)
  })
  stopwatchStop.addEventListener("click", (event) =>{
      clearInterval(interval);
  })
  stopwatchReset.addEventListener("click", (event) =>{
      clearInterval(interval);
      tens = "00";
      seconds = "00";
      secondsElement.innerHTML = seconds;
      tensElement.innerHTML = tens;
  })
  function updateTimer() {
      tens++;
      if(tens <= 9){
          tensElement.innerHTML = "0" + tens;
        }        
        if (tens > 9){
          tensElement.innerHTML = tens;
        } 
        if (tens > 99) {
          seconds++;
          secondsElement.innerHTML = "0" + seconds;
          tens = 0;
          tensElement.innerHTML = "0" + 0;
        }
        if (seconds > 9){
          secondsElement.innerHTML = seconds;
        }
  }
}