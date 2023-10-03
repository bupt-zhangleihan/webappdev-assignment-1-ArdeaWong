class PerformanceFunctions {
    // 函数1：返回两个整数的和
    static add(a, b) {
      return a + b;
    }
  
    // 函数2：返回两个浮点数的乘积
    static multiply(a, b) {
      return a * b;
    }
  
    // 函数3：返回字符串的长度
    static getStringLength(str) {
      return str.length;
    }
  
    // 函数4：不返回任何内容，仅输出参数的平方
    static printSquare(num) {
      const square = num * num;
      console.log("The square of " + num + " is: " + square);
    }
  
    // 函数5：带有默认值的参数，返回两个整数的差，默认为0
    static subtract(a, b = 0) {
      return a - b;
    }
  }
  
  const sum = PerformanceFunctions.add(5, 7);
  console.log("Sum: " + sum);
  
  const product = PerformanceFunctions.multiply(2.5, 4.2);
  console.log("Product: " + product);
  
  const str = "Hello, World!";
  const length = PerformanceFunctions.getStringLength(str);
  console.log("Length of the string: " + length);
  
  PerformanceFunctions.printSquare(6);
  
  const difference = PerformanceFunctions.subtract(10, 3);
  console.log("Difference: " + difference);