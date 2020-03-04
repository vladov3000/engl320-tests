# This script is used for converting the texts to a JSON string that can be copy pasted into ../src/app-src/texts.json
# Note: cannot take input from python shell, so run using "python3 format_text.py" from command line

import subprocess


def convert_to_single():
    """
    Interactive program where user inputs multi line string.

    :return: the content as one line with escape characters included
    """

    # Get mutiline input
    print("Paste your content and press enter. Press Ctrl-D or Command-D to convert it to one-line.")
    contents = []
    while True:
        try:
            line = input()
        except EOFError:
            break
        contents.append(line)

    print('\n')

    # Print one-line string containing escape characters
    text = repr('\n'.join(contents))
    print("Content has been converted.")
    return text[1:len(text) - 1]


def main():
    """
    Keeps repeating convert_to_single until done, printing the output every time.
    Raises EOFerror if run in python shell.
    """
    cont = True
    output = ''

    while cont:
        output += convert_to_single()
        print("Output:\n", output)
        try:
            cont = input("Continue [y/N]?").lower() != 'n'
        except EOFError:
            raise EOFError("Please run from terminal using \"python3 format_text.py\"")


if __name__ == "__main__":
    main()
