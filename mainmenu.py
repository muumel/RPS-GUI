import tkinter
from select_player import SelectPlayerScreen


class SampleApp(tkinter.Tk):
    def __init__(self):
        super().__init__()
        self.withdraw()  # Hide default root Tk window.
        startpage = SelectPlayerScreen(self.master)
        self.mainloop()


if __name__ == '__main__':
    SampleApp()