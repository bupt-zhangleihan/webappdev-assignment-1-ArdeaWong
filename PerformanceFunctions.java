public class PerformanceFunctions {

    // 函数1：返回两个整数的和
    public static int add(int a, int b) {
        return a + b;
    }

    // 函数2：返回两个浮点数的乘积
    public static double multiply(double a, double b) {
        return a * b;
    }

    // 函数3：返回字符串的长度
    public static int getStringLength(String str) {
        return str.length();
    }

    // 函数4：不返回任何内容，仅输出参数的平方
    public static void printSquare(int num) {
        int square = num * num;
        System.out.println("The square of " + num + " is: " + square);
    }

    // 函数5：带有默认值的参数，返回两个整数的差，默认为0
    public static int subtract(int a, int b) {
        return a - b;
    }

    public static void main(String[] args) {
        int sum = add(5, 7);
        System.out.println("Sum: " + sum);

        double product = multiply(2.5, 4.2);
        System.out.println("Product: " + product);

        String str = "Hello, World!";
        int length = getStringLength(str);
        System.out.println("Length of the string: " + length);

        printSquare(6);

        int difference = subtract(10, 3);
        System.out.println("Difference: " + difference);
    }
}