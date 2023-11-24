#!/usr/bin/python3
def magic_string(times=[0]):
    times[0] += 1
    return "BestSchool" + (", BestSchool" * (times[0] - 1))

# Test case 1
print(magic_string())

# Test case 2
print(magic_string())
print(magic_string())

# Test case 3
for i in range(30):
    print(magic_string())
