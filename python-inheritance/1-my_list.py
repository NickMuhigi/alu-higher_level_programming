#!/usr/bin/python3
""" using no module """


class MyList(list):
    """ my list class """

    def print_sorted(self):
        """ function prints list in sorted order """
        print(sorted(self))
