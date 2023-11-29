#!/usr/bin/python3
""" triangle module importing geometry """


BaseGeometry = __import__("7-base_geometry").BaseGeometry


class Rectangle(BaseGeometry):
    """ rectange class inherit from Base geometry """

    def __init__(self, width, height):
        """ init class """
        self.integer_validator("width", width)
        self.__width = width
        self.integer_validator("height", height)
        self.__height = height
