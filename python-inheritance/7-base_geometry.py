#!/usr/bin/python3
""" just a module with one class """


class BaseGeometry:
    """ BaseGeometry class"""

    def area(self):
        """ raise exeception """
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        """ validate value """
        if type(value) is not int:
            raise TypeError("{:s} must be an integer".format(name))
        if value <= 0:
            raise ValueError("{:s} must be greater than 0".format(name))
