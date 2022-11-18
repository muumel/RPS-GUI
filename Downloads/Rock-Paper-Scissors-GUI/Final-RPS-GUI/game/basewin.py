import tkinter as tk
from tkinter.constants import *


class BaseWin(tk.Toplevel):
    def __init__(self, master):
        super().__init__(master)
        self.protocol("WM_DELETE_WINDOW", self.on_close)

    def on_close(self):
        self.destroy()      # Destroy current window
        self.master.quit()  # Quit app.