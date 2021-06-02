//TODO:                     Primality Test

//Complexity O(n)
function isPrime(n) {
	if (n <= 1) {
		return false;
	}
	//check from 2 to n-1
	for (var i = 2; i < n; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(5));

//Complexity O(sqrt(n))
function isprime(n){
  if(n<=1) return false;
  if(n<= 3) return true;

  //middle Five numbers in below loop
  if(n%2 == 0 || n%3 == 0) return false;

  for(var i=5; i*i<=n; i=i+6){
    if()
  }
}