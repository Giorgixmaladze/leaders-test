def sum_of_positive(arr):
    sum = 0
    for i in arr:
        if i > 0:
            sum += i
    return sum

print(sum_of_positive([1, -4, 7, 12]))
print(sum_of_positive([-1, -2, -3, -4]))
print(sum_of_positive([]))