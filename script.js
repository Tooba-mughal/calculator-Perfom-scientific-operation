// Basic Calculator
function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        // Replace '^' with 'Math.pow' syntax
        let expression = document.getElementById('display').value.replace(/\^/g, ',');
        expression = expression.replace('Math.pow(', 'Math.pow(');
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid Expression');
        clearDisplay();
    }
}

// Multiplication Table
function generateTable() {
    const number = document.getElementById('tableInput').value;
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}<br>`;
    }
    document.getElementById('tableResult').innerHTML = result;
}

// Matrix Operations
function parseMatrix(input) {
    return input.trim().split('\n').map(row => row.split(',').map(Number));
}

function addMatrices() {
    const matrix1 = parseMatrix(document.getElementById('matrix1').value);
    const matrix2 = parseMatrix(document.getElementById('matrix2').value);
    const result = matrix1.map((row, i) =>
        row.map((val, j) => val + (matrix2[i] ? matrix2[i][j] : 0))
    );
    document.getElementById('matrixResult').innerText = result.map(row => row.join(', ')).join('\n');
}

function multiplyMatrices() {
    const matrix1 = parseMatrix(document.getElementById('matrix1').value);
    const matrix2 = parseMatrix(document.getElementById('matrix2').value);
    const result = matrix1.map(row => 
        matrix2[0].map((_, j) => 
            row.reduce((sum, val, i) => sum + val * (matrix2[i][j] || 0), 0)
        )
    );
    document.getElementById('matrixResult').innerText = result.map(row => row.join(', ')).join('\n');
}

// Limit Calculation
function calculateLimit() {
    const expression = document.getElementById('limitExpression').value;
    const point = Number(document.getElementById('limitPoint').value);
    try {
        const f = new Function('x', `return ${expression};`);
        const limit = f(point);
        document.getElementById('limitResult').innerText = `Limit as x -> ${point}: ${limit}`;
    } catch (error) {
        alert('Invalid Expression');
    }
}
