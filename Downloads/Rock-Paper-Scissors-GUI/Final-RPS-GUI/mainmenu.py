import tkinter
from screens import LandingScreen

class SampleApp(tkinter.Tk):
    def __init__(self):
        super().__init__()
        self.withdraw() # Hide default root Tk window.
        startpage = LandingScreen(self.master)
        # startpage = WinnerFinalScreen(self.master,'f','w',2,1)
        self.mainloop()

if __name__ == '__main__':
    SampleApp()