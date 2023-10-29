function calcularInversa() {
    var str = '';
    
    // Obtenemos los valores ingresados por el usuario
    var a11 = parseFloat(document.getElementById("a11").value);
    str += a11 + " ";
    var a12 = parseFloat(document.getElementById("a12").value);
    str += a12 + " ";
    var a13 = parseFloat(document.getElementById("a13").value);
    str += a13 + "\n";
    var a21 = parseFloat(document.getElementById("a21").value);
    str += a21 + " ";
    var a22 = parseFloat(document.getElementById("a22").value);
    str += a22 + " ";
    var a23 = parseFloat(document.getElementById("a23").value);
    str += a23 + "\n";
    var a31 = parseFloat(document.getElementById("a31").value);
    str += a31 + " ";
    var a32 = parseFloat(document.getElementById("a32").value);
    str += a32 + " ";
    var a33 = parseFloat(document.getElementById("a33").value);
    str += a33 + "\n\n";
    
    var inputMatrix = [[a11, a12, a13], [a21, a22, a23], [a31, a32, a33]];
    var row = inputMatrix.length;
    
    // Creamos la matriz identidad
    var identityMatrix = [ [1, 0, 0], [0, 1, 0], [0, 0, 1] ];
    var inverseMatrix = identityMatrix.slice();
    
    // Mostramos la matriz ingresada
    str += "Matriz ingresada:\n";
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < row; j++) {
        str += inputMatrix[i][j] + " ";
      }
      str += "\n";
    }
    str += "\n";
    
    // Convertimos la matriz a una matriz triangular superior
    for (var i = 0; i < row; i++) {
      // Normalizamos la fila
      var rowMultiplier = 1 / inputMatrix[i][i];
      for (var j = i; j < row; j++) {
        inputMatrix[i][j] = inputMatrix[i][j] * rowMultiplier;
        inverseMatrix[i][j] = inverseMatrix[i][j] * rowMultiplier;
      }
  
      // Realizamos operaciones de fila sobre las filas por debajo de la fila actual
      for (var j = i + 1; j < row; j++) {
        var rowMultiplier = inputMatrix[j][i] / inputMatrix[i][i];
        for (var k = i; k < row; k++) {
          inputMatrix[j][k] = inputMatrix[j][k] - (inputMatrix[i][k] * rowMultiplier);
          inverseMatrix[j][k] = inverseMatrix[j][k] - (inverseMatrix[i][k] * rowMultiplier);
        }
      }
    }
    
    // Mostramos la matriz triangular superior
    str += "Matriz triangular superior:\n";
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < row; j++) {
        str += inputMatrix[i][j] + " ";
      }
      str += "\n";
    }
    str += "\n";
    
    // Convertimos la matriz triangular superior a una matriz diagonal
    for (var i = row - 1; i >= 0; i--) {
      for (var j = i - 1; j >=0; j--) {
        var rowMultiplier = inputMatrix[j][i] / inputMatrix[i][i];
        for (var k = 0; k < row; k++) {
          inputMatrix[j][k] = inputMatrix[j][k] - (inputMatrix[i][k] * rowMultiplier);
          inverseMatrix[j][k] = inverseMatrix[j][k] - (inverseMatrix[i][k] * rowMultiplier);
        }
      }
    }
    
    // Mostramos la matriz diagonal
    str += "Matriz diagonal:\n";
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < row; j++) {
        str += inputMatrix[i][j] + " ";
      }
      str += "\n";
    }
    str += "\n";
    
    // Convertimos la matriz diagonal a la matriz identidad
    for (var i = 0; i < row; i++) {
      var rowMultiplier = 1 / inputMatrix[i][i];
      for (var j = 0; j < row; j++) {
        inputMatrix[i][j] = inputMatrix[i][j] * rowMultiplier;
        inverseMatrix[i][j] = inverseMatrix[i][j] * rowMultiplier;
      }
    }
    
    // Mostramos la matriz inversa
    str += "Matriz inversa:\n";
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < row; j++) {
        str += inverseMatrix[i][j] + " ";
      }
      str += "\n";
    }
    
    // Mostramos los resultados en el área de texto
    document.getElementById("inversa").value = str;
  }
