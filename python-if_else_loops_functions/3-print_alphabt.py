#!/usr/bin/python3
for i in range(ord('a'), ord('z')+1):
    ante = chr(i)
    if ante not in "qe":
        print("{:s}".format(ante), end="")
