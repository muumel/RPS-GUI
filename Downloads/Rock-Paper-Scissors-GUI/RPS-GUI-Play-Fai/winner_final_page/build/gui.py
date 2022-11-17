
# This file was generated by the Tkinter Designer by Parth Jadhav
# https://github.com/ParthJadhav/Tkinter-Designer


from pathlib import Path

# from tkinter import *
# Explicit imports to satisfy Flake8
from tkinter import Tk, Canvas, Entry, Text, Button, PhotoImage


OUTPUT_PATH = Path(__file__).parent
ASSETS_PATH = OUTPUT_PATH / Path(r"C:\Users\melau\OneDrive\Desktop\Rock-Paper-Scissors-GUI\winner_final_page\build\assets\frame0")


def relative_to_assets(path: str) -> Path:
    return ASSETS_PATH / Path(path)


window = Tk()

window.geometry("860x560")
window.configure(bg = "#FFFFFF")


canvas = Canvas(
    window,
    bg = "#FFFFFF",
    height = 560,
    width = 860,
    bd = 0,
    highlightthickness = 0,
    relief = "ridge"
)

canvas.place(x = 0, y = 0)
canvas.create_text(
    361.529541015625,
    69.0,
    anchor="nw",
    text="Player 1",
    fill="#000000",
    font=("Poppins SemiBold", 36 * -1)
)

canvas.create_text(
    355.8472595214844,
    189.46438598632812,
    anchor="nw",
    text="2-1",
    fill="#000000",
    font=("Poppins SemiBold", 98 * -1)
)

canvas.create_text(
    306.9796447753906,
    123.54989624023438,
    anchor="nw",
    text="is the winner!",
    fill="#A44CD3",
    font=("Poppins SemiBold", 36 * -1)
)

button_image_1 = PhotoImage(
    file=relative_to_assets("button_1.png"))
button_1 = Button(
    image=button_image_1,
    borderwidth=0,
    highlightthickness=0,
    command=lambda: print("button_1 clicked"),
    relief="flat"
)
button_1.place(
    x=280.2729187011719,
    y=430.3930969238281,
    width=301.1609191894531,
    height=61.368621826171875
)

button_image_2 = PhotoImage(
    file=relative_to_assets("button_2.png"))
button_2 = Button(
    image=button_image_2,
    borderwidth=0,
    highlightthickness=0,
    command=lambda: print("button_2 clicked"),
    relief="flat"
)
button_2.place(
    x=278.0,
    y=350.8411560058594,
    width=301.160888671875,
    height=61.368621826171875
)
window.resizable(False, False)
window.mainloop()
