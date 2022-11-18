import tkinter as tk
from tkinter.constants import *
from basewin import BaseWin


class HardApp(BaseWin):
    def __init__(self, master):
        super().__init__(master)
        self.title('Flag Quiz')
        self.resizable(FALSE, FALSE)
        self.make_widgets()

    def make_widgets(self):
        label = tk.Label(self, text="This is the Hard App", font=self.master.title_font)
        label.pack(side="top", fill="x", pady=10)