#!/usr/bin/python3
"""
Module that defines a Square class
"""

Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """
    Square class that inherits from Rectangle
    """

    def __init__(self, size):
        """
        Initializes a Square instance with a given size.
        Args:
            size (int): The size of the square.
        """
        super().__init__(size, size)
