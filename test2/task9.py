def non_prime(start,end):
    non_primes =[]
    primes = []
    for num in range(start,end+1):
        if num > 1:
            for i in range(1,num +1):
                if num % i == 0:
                    non_primes.append(num)
                else:
                    primes.append(num)
    return list(set(non_primes))

print(non_prime(10,20))
print(non_prime(1,10))
print(non_prime(20,30))
print(non_prime(24,25))
print(non_prime(1,1))
