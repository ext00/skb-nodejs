var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.get('/2a', function (req, res) {
	const sum = sumTwoElement(req.query.a,req.query.b).toString();
  	res.send(sum);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function isDigit(n) {
	return (typeof n === 'number' || typeof n === 'string') && isFinite(n);

}

function getDigitFromAll(n){
	if (isDigit(n))
		return n;
	else
		return 0;		
}

function sumTwoElement(a, b){
	return 1*getDigitFromAll(a) + 1*getDigitFromAll(b);
}
