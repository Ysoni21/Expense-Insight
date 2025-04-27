document.getElementById('calculate').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const duration = parseFloat(document.getElementById('duration').value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(duration)) {
        const simpleInterest = (principal * rate * duration) / 100;
        document.getElementById('result').innerText = `Simple Interest: ₹ ${simpleInterest.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid values';
    }
});
