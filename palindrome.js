function palindrom(str) {
   var newStr = str.replace(/[^a-zA-Z0-9]/g, "");
   var reversed = newStr.split("").reverse().join("");
   reversed = reversed.toLowerCase();
   newStr = newStr.toLowerCase();

   console.log(reversed + " " + newStr);
}
palindrom("almostomla Without65#");
