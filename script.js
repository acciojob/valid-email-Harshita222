function validEmail(str) {
  //your JS code here.
	const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Test the input string against the pattern and return the result
    return pattern.test(str);

}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
