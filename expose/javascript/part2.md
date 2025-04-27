1. with I being a var it is defined within the entire function in which i increments three times( for the three prices) so it will print 3
2. with discountedPrice also being a var it is defined within the entire function and its last assignment was 300 * 0.5 = 150 so it will print 150
3. with finalPrice also being a var it is defined within the entire function and its last assigment was Math.round(150 * 100)/100 = 150 so it will print 150
4. it will return an array since discounted is an array defined within the function and inside it will be the final price of each iteration so 
i = 0: 100 * 0.5 = 50 
i = 1:200 * 0.5 = 100 
i = 3: 300 * 0.5 = 150 
so it will return [50,100,150]
5. Since i is a let,its only defined in the for loop, so it will return an error stating that i is not defined
6. Since discountedPrice is a let,its only defined in the for loop, so it will return an error stating that discountedPrice is not defined
7. since finalPrice is defined outside of the loop and instead in the function the function can call it in which it will return its last assignment which was finalPrice = Math.round(150 * 100)/100 = 150 so it will print 150
8.since discounted is a let defined within the function and not a loop it can be called within the function in which it will return the array that contains the final price of each interation so it will return [50,100,150]
9. since let i causes i to be only defined at the for loop after the for loop ends i cant be called by the function so it will return an error stating that i is not defined.
10. since length is defined within the function and isnt reassigned a value line 12 will print the length of price as that was its intial assignment which from the function call price has three value so it will print 3.
11. it will return the array of discounted prices since will discounted is const it can still be mutable just not reassigned so it will return [50,100,150]
12.
- A.student.name
- B.student['grad year']
- C.student.greeting()
- D.student['Favorite Teacher'].name
- E.  student.courseload[0]
13.
- A.32 since '3' was first it turns 2 into '2' and adds the string to '3' making '32'
- B.1 since with - we cant minus strings so '3' is turned to 3 and 3-2 = 1
- C. 3 since null is converted to zero with 3 being int and operation is adding
- D. since 3 is a string null is converted to string 'null' so it returns '3null'
- E. since we are adding true is defined as 1( since true has a value of 1) so it becomes 1+3 = 4
- F. since we are adding false is given value 0 and null is given 0 as well so it returns 0+0 = 0
- G. with '3', undefined becomes a string 'undefined' so it returns '3undefined'
- H. it will return NaN since both arent integers for the minus operation so it returns NaN since we cant minus a string and undefined value
14.
- A. Returns true as with the comparison >  we compare numbers so '2' becomes 2 and 2>1 is true
- B. false since with both being a string it follows an alphabetical order in which '2' is less then '12' (since we count 1->12(increasing))
- C. True since there is a loose comparison in which we can convert '2' to be 2 and complete the equality
- D. false since this operation compares the operation as is and in this case they arent the same so its false
- E. false in this case true is assigned the value of 1 in which 1 == 2 is false
- F. True since boolean(2) will return true in which true === true is true since they are the same without the need of changing format of values
15. the == operator does a loose comparison in which it will change the values to match should the variables be different === on the other hand doesnt do that and just compares the values as is and sees if they are the same
16.
17. the result is that the function will return and array with values [2,4,6] since first the function creates a new const array which is intially empty, then with the for loop, values within the array given by the parameter
    are pushed into the array after they go through callback with is a function that multiplies the number by 2. so for the first iteration it gets array[0] which is 1 then multiplies it by 2 then pushes it
    into the newArray. By the end the function returns the newArray which has values [2,4,6],
18.
19.the output is these numbers in order 1 4 3 2 since with timeout we delayed the print of 2 by 1000 while having the others print with no delay so it first printed based on what was in first then after a 1000 delay printed 2
