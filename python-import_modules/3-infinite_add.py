#!/usr/bin/python3
if __name__ == "__main__":
    import sys


values = sys.argv
number = len(values)
i = 1
summ = 0
if number == 1:
    print("{:d}".format(summ))
elif number == 2:
    print("{:d}".format(int(values[1])))
elif number > 2:
    while i < number:
        summ = summ + int(values[i])
        i = i + 1
    print("{:d}".format(summ))
