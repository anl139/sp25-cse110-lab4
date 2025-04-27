1. at line 9 it use the console to print within the terminal "values added: " result, in which result has the value of num1 + num2(10 + 10 = 20) so it prints values added: 20
2. at line 13 it uses the console to print within the terminal "final result: " result in which with result being a var it can be accessed outside its if statement so it prints final result: 20
3. Since it can be accessed anywhere within the function it can lead to naming conflicts since it is still defined beyond its block
4. since at line 9 it is still part of the if block let result is defined only in the if statement so it will print values added: 20
5. The code returns an error because let result defines result within the if block but not for the whole function so at line 13 result isn't defined so it would return and error that states that result is not defined
6. since with const you cant reassign the value line 9 throws an error as for result = num1 + num2 it would give a type error for assignment for constant variable
7. It still returns an error as at line 8 it threw an error and caused the program to stop running but even if it did run it would return result is not defined since const result is only defined within the if block
