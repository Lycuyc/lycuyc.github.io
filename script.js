function solveQuadratic() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let outputElement = document.getElementById('output');
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        outputElement.innerText = "Ошибка: Введите числовые значения для a, b и c.";
        return;
    }

    if (a === 0) {
        outputElement.innerText = "Ошибка: Коэффициент 'a' не может быть равен нулю для квадратного уравнения.";
        return;
    }

    let D = b * b - 4 * a * c;
    
    let result = "";

    if (D >= 0) {
        
        if (D > 0) {
            result += "аутпут \"est 2 kornya\"\n";
            
            let sqrtD = Math.sqrt(D);
            let x = (-b + sqrtD) / (2 * a);
            let x1 = (-b - sqrtD) / (2 * a);
            
            result += `аутпут x = ${x.toFixed(4)}\n`;
            result += `аутпут x1 = ${x1.toFixed(4)}`;
            
        } else {
            result += "аутпут \"edinstvenniy koren\"\n";
            
            let x = (-b) / (2 * a);
            
            result += `аутпут x = ${x.toFixed(4)}`;
        }
        
    } else {
        result = "аутпут \"net korney\" (Нет действительных корней)";
    }
    
    outputElement.innerText = result;
}
