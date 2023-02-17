const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  minimumFractionDigits: 0,
  //maximumFractionDigits: 0,
});

function first_formula() { 
  const deals = document.getElementById('field_deals').value || 0; 
  const loan = document.getElementById('field_loan_size').value || 0; 
  const bps = document.getElementById('field_bps').value || 0; 

  const result = parseInt(bps) * parseInt(loan) * parseInt(deals);
  
  document.getElementById('first_result').innerHTML = formatter.format(result); 
}