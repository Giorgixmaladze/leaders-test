def longest_consequtive(arr):
    arr_set = set(arr)
    max_len = 0
    for num in arr_set:
        if num -1 in arr_set:
            curr_num = num
            curr_len = 1
            while curr_num +1 in arr_set:
                curr_num +=1 
                curr_len += 1
            max_len = max(max_len,curr_len)
    return max_len

print(longest_consequtive([100, 4, 200, 1, 3, 2]))