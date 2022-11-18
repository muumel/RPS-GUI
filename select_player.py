import tkinter.messagebox
from pathlib import Path
from tkinter import Tk, Canvas, Entry, Text, Button, PhotoImage
from tkinter import font as tkfont
from game.basewin import BaseWin
from playing import PlayScreen

class SelectPlayerScreen(BaseWin):
    def __init__(self, master):
        super().__init__(master)
        self.player1_var = tkinter.StringVar()
        self.player2_var = tkinter.StringVar()
        self.OUTPUT_PATH = Path(__file__).parent
        self.ASSETS_PATH = self.OUTPUT_PATH / Path(r"select_players_page\build\assets\frame0")
        self.title('Rock-Paper-Scissor Game')
        self.geometry("860x560")
        self.configure(bg="#FFFFFF")
        self.make_widgets()
        self.resizable(False, False)

    def relative_to_assets(self, path: str) -> Path:
        return self.ASSETS_PATH / Path(path)

    def startplay(self):
        player1 = self.player1_var.get()
        player2 = self.player2_var.get()
        print(player1, player2)
        if player1 == player2:
            self.player1_var.set('')
            self.player2_var.set('')
            tkinter.messagebox.showinfo('Error', "Please don't use the same name")
        elif player1 == ('') or player2 == (''):
            tkinter.messagebox.showinfo("Error", "Please fill all the name")
        else:
            print("ready")
            self.destroy()
            self.app = PlayScreen(self.master, player1, player2)

    def make_widgets(self):
        self.canvas = Canvas(
            self,
            bg="#FFFFFF",
            height=560,
            width=860,
            bd=0,
            highlightthickness=0,
            relief="ridge"
        )

        self.canvas.place(x=0, y=0)
        self.canvas.create_text(
            288.8696594238281,
            69.0,
            anchor="nw",
            text="Selects players",
            fill="#A44CD3",
            font=("Poppins SemiBold", 36 * -1)
        )

        self.canvas.create_text(
            198.446044921875,
            163.42974853515625,
            anchor="nw",
            text="Player 1",
            fill="#969494",
            font=("Poppins Regular", 18 * -1)
        )

        self.canvas.create_text(
            200.7352294921875,
            288.7637634277344,
            anchor="nw",
            text="Player 2",
            fill="#969494",
            font=("Poppins Regular", 18 * -1)
        )

        self.entry_image_1 = PhotoImage(
            file=self.relative_to_assets("entry_1.png"))
        self.entry_bg_1 = self.canvas.create_image(
            428.79734802246094,
            228.3859405517578,
            image=self.entry_image_1
        )
        self.entry_1 = Entry(self,
            bd=0,
            bg="#F1F1F1",
            fg="#000716",
            highlightthickness=0,
            textvariable=self.player1_var
        )
        self.entry_1.place(
            x=200.7352352142334,
            y=198.34011840820312,
            width=456.1242256164551,
            height=58.091644287109375
        )

        self.entry_image_2 = PhotoImage(
            file=self.relative_to_assets("entry_2.png"))
        self.entry_bg_2 = self.canvas.create_image(
            431.08653259277344,
            353.71995544433594,
            image=self.entry_image_2,
        )
        self.entry_2 = Entry(self,
            bd=0,
            bg="#F1F1F1",
            fg="#000716",
            highlightthickness=0,
            textvariable=self.player2_var
        )
        self.entry_2.place(
            x=203.0244197845459,
            y=323.67413330078125,
            width=456.1242256164551,
            height=58.091644287109375
        )

        self.button_image_1 = PhotoImage(
            file=self.relative_to_assets("button_1.png"))
        self.button_1 = Button(self,
            image=self.button_image_1,
            borderwidth=0,
            highlightthickness=0,
            command=self.startplay,
            relief="flat"
        )
        self.button_1.place(
            x=278.5682373046875,
            y=429.5498962402344,
            width=303.31976318359375,
            height=61.808555603027344
        )
