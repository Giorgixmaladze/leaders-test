def intersection(arr1,arr2):
    l = []
    for i in arr2:
        if i in arr1:
            l.append(i)
    return l

print(intersection([1,2,3],[2,3,4]))
print(intersection([1,1,2],[1,3]))
print(intersection([],[1,2]))