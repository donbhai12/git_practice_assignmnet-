function Isprimer(prime) {
  let count = 0;
  for (let i = 1; i <= prime; i++) {
    if (prime % 2 == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

let result = Isprimer(13);
if (result == true) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}
