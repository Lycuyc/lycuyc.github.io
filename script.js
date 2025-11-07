function solveQuadratic() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let outputElement = document.getElementById('output');
    
    let result = "";
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result = "Ошибка: Введите числовые значения для a, b и c.";
        outputElement.innerHTML = result;
        return;
    }

    // Здесь можно использовать <br> для HTML-вывода
    result += `Дано квадратное уравнение: ${a}x² + ${b}x + ${c} = 0<br>`;

    if (a === 0) {
        result += "Ошибка: Коэффициент 'a' не может быть равен нулю для квадратного уравнения.";
        outputElement.innerHTML = result;
        return;
    }

    let D = b * b - 4 * a * c;
    
    // Используем <b> для жирного шрифта и <br> для переноса строк
    result += `<br><b>Шаг 1: Вычисляем дискриминант (D):</b><br>`;
    result += `Формула: D = b² - 4ac<br>`;
    result += `Подстановка: D = (${b})² - 4 * (${a}) * (${c})<br>`;
    result += `Расчет: D = ${b*b} - ${4 * a * c}<br>`;
    result += `<b>D = ${D.toFixed(4)}</b><br>`;

    result += `<br><b>Шаг 2: Анализ дискриминанта и нахождение корней:</b><br>`;

    if (D > 0) {
        result += `Так как D > 0, уравнение имеет <b>2 различных действительных корня</b>.<br>`;
        result += `Формула корней: x₁,₂ = (-b ± √D) / (2a)<br><br>`;
            
        let sqrtD = Math.sqrt(D);
        let x1 = (-b + sqrtD) / (2 * a);
        let x2 = (-b - sqrtD) / (2 * a);
            
        result += `Корень x₁:<br>`;
        result += `x₁ = (-(${b}) + √${D.toFixed(4)}) / (2 * ${a})<br>`;
        result += `x₁ = (${-b} + ${sqrtD.toFixed(4)}) / ${2 * a}<br>`;
        result += `<b>x₁ = ${x1.toFixed(4)}</b><br><br>`;
        
        result += `Корень x₂:<br>`;
        result += `x₂ = (-(${b}) - √${D.toFixed(4)}) / (2 * ${a})<br>`;
        result += `x₂ = (${-b} - ${sqrtD.toFixed(4)}) / ${2 * a}<br>`;
        result += `<b>x₂ = ${x2.toFixed(4)}</b><br><br>`;
        
        result += `--- <br>аутпут "est 2 kornya"<br>`;
        result += `аутпут x1 = ${x1.toFixed(4)}<br>`;
        result += `аутпут x2 = ${x2.toFixed(4)}`; 
        
    } else if (D === 0) {
        result += `Так как D = 0, уравнение имеет <b>1 действительный корень</b>.<br>`;
        result += `Формула корня: x = -b / (2a)<br><br>`;
            
        let x = (-b) / (2 * a);
            
        result += `Корень x:<br>`;
        result += `x = -(${b}) / (2 * ${a})<br>`;
        result += `x = ${-b} / ${2 * a}<br>`;
        result += `<b>x = ${x.toFixed(4)}</b><br><br>`;
        
        result += `--- <br>аутпут "edinstvenniy koren"<br>`;
        result += `аутпут x = ${x.toFixed(4)}`;
        
    } else { 
        result += `Так как D < 0, уравнение <b>не имеет действительных корней</b>.<br><br>`;
        result += "--- <br>аутпут \"net korney\" (Нет действительных корней)";
    }
    
    // ГЛАВНОЕ ИЗМЕНЕНИЕ: Используем innerHTML для обработки HTML-тегов
    outputElement.innerHTML = result;
}
