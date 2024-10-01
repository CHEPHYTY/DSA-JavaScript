```
    const findSum = (n)=>{
        let sum =0;
        for(let i =0;i<n;i++){
            sum = sum +i;
        }
        return sum;
    }
```

### In the above code

- at the line 2 there is 1 operation
- at the line 3 there is $1+3*(n+1) = 6n$ operation.
- at the line 4 there is $4*n$ operation
- at the line 6 there is 2 operation

### which is

- $T = 1+6n+4+4n+2$
- $T = 10n+7$

#### $Time Complexity = O(n)$

<img src ="../assets/time_complexity_linear.png" alt = "linear time complexity">
