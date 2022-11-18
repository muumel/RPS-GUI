import tkinter as tk
from tkinter.constants import *
from tkinter import font as tkfont
from basewin import BaseWin
from easymode import EasyApp
from hardmode import HardApp


class SampleApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title('Flag Quiz')
        self.geometry('600x600')
        self.resizable(FALSE, FALSE)
        self.title_font = tkfont.Font(family='Helvetica', size=18, weight="bold")
        self.withdraw()  # Hide default root Tk window.
        startpage = TitleScreen(self.master)
        self.mainloop()


class TitleScreen(BaseWin):
    def __init__(self, master):
        super().__init__(master)
        self.make_widgets()

    def make_widgets(self):
        label = tk.Label(self, text="This is the Start Page", font=self.master.title_font)
        label.pack(side="top", fill="x", pady=10)

        self.easy = tk.Button(self, text="Easy Mode", font=('default', 20),
                              command=self.play_easy)
        self.hard = tk.Button(self, text="Easy Mode", font=('default', 20),
                              command=self.play_hard)
        self.easy.pack()
        self.hard.pack()

    def play_easy(self):
        self.destroy()
        self.app = EasyApp(self.master)

    def play_hard(self):
        self.destroy()
        self.app = HardApp(self.master)


if __name__ == '__main__':
    SampleApp()