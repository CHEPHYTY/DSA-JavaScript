```javascript
const print = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log("i = " + i + ",j = " + j);
    }
    console.log("End of inner loop");
  }
  console.log("End of outer loop");
};
```

```bash
i = 1,j = 1
i = 1,j = 2
i = 1,j = 3
End of inner loop
i = 2,j = 1
i = 2,j = 2
i = 2,j = 3
End of inner loop
i = 3,j = 1
i = 3,j = 2
i = 3,j = 3
End of inner loop
End of outer loop
```

### In the above code

- At the 2nd line $1+3n+3+3n = 6n+4$ operations.
- At the 3rd line $n(1+3n+3+3n) = 6n^2$ operations.
- At the 4th line $n^2(1+1+1) = 3n^2$ operations.
- At the 6th line $n(1) = n$ operations.
- At the 8th line 1 operation.

#### Which is

- $T = 6n+4+6n^2+4n+3n^2+n+1$
- $T = 9n^2+11n+5$

#### $Time Complexity = O(n^2)$
