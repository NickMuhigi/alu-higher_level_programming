#!/usr/bin/python3
if __name__ == "__main__":
    import sys


values = sys.argv
number = len(values)
i = 1
if number == 1:
    print("0 arguments.")
elif number == 2:
    print("1 argument:")
    print("1: {}".format(values[1]))
elif number > 2:
    print("{:d} arguments:".format(number-1))
    while i < number:
        print("{:d}: {}".format((i), values[i]))
        i = i + 1
