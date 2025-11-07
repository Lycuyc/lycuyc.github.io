function solveQuadratic() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let outputElement = document.getElementById('output');
    
    let result = "";
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result = "Ошибка: Введите числовые значения для a, b и c.";
        outputElement.innerText = result;
        return;
    }

    result += `Дано квадратное уравнение: ${a}x² + ${b}x + ${c} = 0\n`;

    if (a === 0) {
        result += "Ошибка: Коэффициент 'a' не может быть равен нулю для квадратного уравнения.";
        outputElement.innerText = result;
        return;
    }

    let D = b * b - 4 * a * c;
    result += "Шаг 1: Вычисляем дискриминант (D):\n";
    result += `D = b² - 4ac\n`;
    result += `D = (${b})² - 4 * (${a}) * (${c})\n`;
    result += `D = ${b*b} - ${4 * a * c}\n`;
    result += `D = ${D.toFixed(4)}\n\n`;

    result += "Шаг 2: Анализ дискриминанта:\n";

    if (D > 0) {
        result += `Так как D > 0, уравнение имеет 2 различных действительных корня (est 2 kornya).\n`;
        result += `Используем формулу корней: x₁,₂ = (-b ± √D) / (2a)\n\n`;
            
        let sqrtD = Math.sqrt(D);
        let x1 = (-b + sqrtD) / (2 * a);
        let x2 = (-b - sqrtD) / (2 * a);
            
        result += `Вычисление x₁:\n`;
        result += `x₁ = (-(${b}) + √${D.toFixed(4)}) / (2 * ${a})\n`;
        result += `x₁ = (${-b} + ${sqrtD.toFixed(4)}) / ${2 * a}\n`;
        result += `x₁ = ${x1.toFixed(4)}\n\n`;
        
        result += `Вычисление x₂:\n`;
        result += `x₂ = (-(${b}) - √${D.toFixed(4)}) / (2 * ${a})\n`;
        result += `x₂ = (${-b} - ${sqrtD.toFixed(4)}) / ${2 * a}\n`;
        result += `x₂ = ${x2.toFixed(4)}\n\n`;
        
        result += `аутпут "est 2 kornya"\n`;
        result += `аутпут x1 = ${x1.toFixed(4)}\n`;
        result += `аутпут x2 = ${x2.toFixed(4)}`; 
        
    } else if (D === 0) {
        result += `Так как D = 0, уравнение имеет 1 действительный корень (edinstvenniy koren).\n`;
        result += `Используем формулу корня: x = -b / (2a)\n\n`;
            
        let x = (-b) / (2 * a);
            
        result += `Вычисление x:\n`;
        result += `x = -(${b}) / (2 * ${a})\n`;
        result += `x = ${-b} / ${2 * a}\n`;
        result += `x = ${x.toFixed(4)}\n\n`;
        
        result += `аутпут "edinstvenniy koren"\n`;
        result += `аутпут x = ${x.toFixed(4)}`;
        
    } else { 
        result += `Так как D < 0, уравнение не имеет действительных корней (net korney).\n\n`;
        result += "аутпут \"net korney\" (Нет действительных корней)";
    }
    
    outputElement.innerText = result;
}

}
