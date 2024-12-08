def missing_number(arr):
    res = 0
    l = []
    
    if len(arr) <=1:
        return []
    arr = sorted(arr)
    for i in range(arr[0],arr[-1]+1):
        l.append(i)

        
    for x in l:
        if x not in arr:
            res = x
    return res


print(missing_number([1,2,4,5]))
print(missing_number([3, 5, 6, 1, 2]))
print(missing_number([2]))
        