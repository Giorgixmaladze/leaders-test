def anagrams(st1,st2):
    return sorted(st1) == sorted(st2)


print(anagrams("listen","silent"))
print(anagrams("hello","world"))
print(anagrams("triangle","integral"))