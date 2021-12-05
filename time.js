setInterval(timeFunction, 100);
        function timeFunction() 
        {
            let date = new Date();

            let s = date.getSeconds();
            let m = date.getMinutes();
            let h = date.getHours();
            am_pm = "AM";
            
            
  
            if (h >= 12) 
            {
                h -= 12;
                am_pm = "PM";
            }
            if (h == 0)
             {
                hr = 12;
                am_pm = "AM";
            }
  
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
  
            let currentClock = h + ":" 
                + m + ":" + s + am_pm;
  
            document.getElementById("time").innerHTML = currentClock;
        }
  
        timeFunction();