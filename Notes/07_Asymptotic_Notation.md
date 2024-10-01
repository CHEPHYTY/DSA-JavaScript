# Asymptotic Notation

- Asymptotic Notations are the mathematical tools used to describe the running time of an algorithm in terms of input size.

- Asymptotic Notations help us in determining -

  1. Best Case
  2. Average Case
  3. Worst Case

- There are three notations for performing runtime analysis of an algorithm
  1. Omega( Ω ) Notation
  2. Big O ( O ) Notation
  3. Theta ( θ ) Notation

### 1. Omega( Ω ) Notation

- It is the formal way to express the lower bound of an algorithm's running time.
- Lower bound means for any given input this notation determines best amount of time an algorithm can take to complete.
- **For Example**
  - If we say certain algorithm takes 100 sec as best amount of time. So, 100 sec will be lower bound of that algorithm. The algorithm can take more than 100 secs but it will not take less than 100 secs.

### 2. Big O ( O ) Notation

- It is the formal way to express the upper bound of an algorithm's running time.
- Upper bound means for any given input this notation determines longest amount of time an algorithm can take to complete.
- **For Example**
  - If we say certain algorithm takes 100 secs as longest amount of time. So, 100 secs will be upper bound of that algorithm.The algorithm can take less than 100 secs but it will not take more than 100 secs.

### 3. Theta ( θ ) Notation

- It is the formal way to express both the upper and lower bound of an algorithm's running time.
- By Lower and Upper bound means for any given input this notation determines average amount of time an algorithm can take to complete.

- **For Example**
  - If we run certain algorithm and it takes 100 secs for first run, 120 secs for second run, 110 for third run and so on. So, theta notations give an average of running time of that algorithm.
