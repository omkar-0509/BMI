document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
  
    let category = '';
    let imgSrc = '';
  
    if (bmi < 18.5) {
      category = 'Underweight';
      imgSrc = '4.png';
    } else if (bmi < 25) {
      category = 'Healthy';
      imgSrc = '2.jpeg';
    } else if (bmi < 30) {
      category = 'Overweight';
      imgSrc = '3.jpeg';
    } else {
      category = 'Obese';
      imgSrc = '5.jpeg';
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Your BMI is <strong>${bmi}</strong></p>
      <p>Category: <strong>${category}</strong></p>
      <img src="${imgSrc}" alt="${category} icon" />
    `;
  });
  