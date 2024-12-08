def floor_sum(arr):
    sum = 0
    for i in arr:
        if i> 0:
            sum += int(i)
    return sum

print(floor_sum([1, -4, 7, 12]))
print(floor_sum([]))
print(floor_sum([-1.5, 2.7, -3.3, 4.8]))
print(floor_sum([-1, -2, -3]))
