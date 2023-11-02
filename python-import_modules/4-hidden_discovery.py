#!/usr/bin/python3
if __name__ == "__main__":
    import hidden_4 as extra


for x in dir(extra):
    if x[0:2] != "__":
        print("{:s}".format(x))
