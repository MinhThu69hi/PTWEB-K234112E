function calc_max() {
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);
    const c = parseFloat(document.getElementById('numC').value);
    const result_td = document.getElementById('result');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result_td.value = "Vui lòng nhập số hợp lệ cho a, b, và c.";
        return;
    }
    const result = Math.max(a, b, c);
    result_td.value = result;
}

function calc_min() {
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);
    const c = parseFloat(document.getElementById('numC').value);
    const result_td = document.getElementById('result');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result_td.value = "Vui lòng nhập số hợp lệ cho a, b, và c.";
        return;
    }
    const result = Math.min(a, b, c);
    result_td.value = result;
}
function calc_sin() {
    const a = parseFloat(document.getElementById('numA').value);
    const result_td = document.getElementById('result');

    if (isNaN(a)) {
        result_td.value = "Vui lòng nhập số hợp lệ cho a.";
        return;
    }
    const result = Math.sin(a); 
    result_td.value = result;
}

function calc_cos() {
    const a = parseFloat(document.getElementById('numA').value);
    const result_td = document.getElementById('result');

    if (isNaN(a)) {
        result_td.value = "Vui lòng nhập số hợp lệ cho a.";
        return;
    }
    const result = Math.cos(a); 
    result_td.value = result;
}
function calc_pow() {
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);
    const result_td = document.getElementById('result');

    if (isNaN(a) || isNaN(b)) {
        result_td.value = "Vui lòng nhập số hợp lệ cho a và b.";
        return;
    }
    const result = Math.pow(a, b);

    if (!isFinite(result)) {
         result_td.value = 'Error: Result is too large';
    } else {
         result_td.value = result;
    }
}