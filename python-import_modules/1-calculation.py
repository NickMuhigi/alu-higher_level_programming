#!/usr/bin/python3
if __name__ == "__main__":
    import calculator_1 as extra


a = 10
b = 5
num1 = extra.add(a, b)
num2 = extra.sub(a, b)
num3 = extra.mul(a, b)
num4 = extra.div(a, b)
print("{:d} + {:d} = {:d}".format(a, b, num1))
print("{:d} - {:d} = {:d}".format(a, b, num2))
print("{:d} * {:d} = {:d}".format(a, b, num3))
print("{:d} / {:d} = {:d}".format(a, b, num4))
