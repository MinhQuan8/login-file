function Quit(event) {
  event.preventDefault();
  let x=confirm("Thằng lòn này mày muốn thoát phải không?");
  if (x) {
window.location="https://minhquan8.github.io/adminlogin/"; } else{
    alert("Địu móe vậy cũng bấm!");
  }
}
