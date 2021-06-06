//c10 Student Activity

var s1, s2, s3, s4;
var marks = [99, 100, 83, 84, 96];
var numbers = [1, 2, 3, 4, 5];
var sprites = [];




function findNum(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;

}

function sqnum(a) {
  for (var i = 0; i < a.length; i++) {
    a[i] *= a[i];
  }
  return(a);
}

function setup() {
  createCanvas(400, 400);
  var sub = findNum(marks, 4);
  var x = sqnum(numbers);
  console.log(x);
  if (sub == -1) {
    console.log("Number not found");
  }
  else {
    console.log("Number found at " + (sub + 1))
  }




}
function draw() {

  background(100, 200, 50);
  drawSprites();

}





