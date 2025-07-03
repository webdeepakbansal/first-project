 const box = document.getElementById("box");
 const time = document.getElementById("time");
 let startTime;
  box.addEventListener("click", () => {
    document.getElementById("box").style.backgroundColor = "green";
     if (!startTime) {
      startTime = Date.now();
      time.innerText = "Timer started...";
    } else {
      const endTime = Date.now();
      const seconds = ((endTime - startTime) / 1000).toFixed(2);
      result.innerText = `You clicked after ${seconds} seconds.`;
      startTime = null; // Reset for next click
    }
    // Generate random top and left positions
    const newTop = Math.floor(Math.random() * (window.innerHeight - 100));
    const newLeft = Math.floor(Math.random() * (window.innerWidth - 100));

    // Move the box to new position
    box.style.top = newTop + "px";
    box.style.left = newLeft + "px";

}
  );
