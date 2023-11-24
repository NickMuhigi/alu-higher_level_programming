#!/usr/bin/python3
"""
Module that defines a Square class
"""

Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """
    Represents a Square, a specific type of Rectangle
    """

    def __init__(self, size):
        """
        Initializes a Square instance with a given size.
        Args:
            size (int): The size of the square.
        """
        super().__init__(size, size)


if __name__ == "__main__":
    """
    Test cases
    """
    s = Square(5)

    print("Module documentation:", __doc__)
    print("Class documentation:", Square.__doc__)
    print("Directory of Square:", dir(s))
    print("Is Square a subclass of Rectangle:", issubclass(Square, Rectangle))

    try:
        invalid_square = Square("13")
    except TypeError as e:
        print("Error creating a Square with invalid size:", e)

    s = Square(13)
    print("Area of the square:", s.area())
    print("Width of the square:", s.width)
    print("Height of the square:", s.height)
