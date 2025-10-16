
function find_solution() {
    
    const a = parseFloat(document.getElementById('coeff_a').value);
    const b = parseFloat(document.getElementById('coeff_b').value);
    const c = parseFloat(document.getElementById('coeff_c').value);

    const result_output = document.getElementById('result_output');
    let result_text = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result_text = "Please enter valid numbers for a, b, and c.";
        result_output.value = result_text;
        return;
    }

    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                result_text = "Infinite solutions"; 
            } else {
                result_text = "No solution"; 
            }
        } else {
            const x = -c / b;
            result_text = `x = ${x}`;
        }
    } else {
       
        const delta = b * b - 4 * a * c;

        if (delta > 0) {
           
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
           
            result_text = `x1=${x1.toFixed(4)} ; x2=${x2.toFixed(4)}`;
        } else if (delta === 0) {
           
            const x = -b / (2 * a);
            result_text = `x1 = x2 = ${x.toFixed(4)}`;
        } else {
          
            result_text = "No real solution";
        }
    }

   
    result_output.value = result_text;
}

function do_clear() {
    document.getElementById('coeff_a').value = "";
    document.getElementById('coeff_b').value = "";
    document.getElementById('coeff_c').value = "";
    document.getElementById('result_output').value = "";

    document.getElementById('coeff_a').focus();
}