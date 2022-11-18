import tkinter.messagebox
from pathlib import Path
from tkinter import Tk, Canvas, Entry, Text, Button, PhotoImage
from tkinter import font as tkfont
from game.basewin import BaseWin
import cv2
import PIL.Image, PIL.ImageTk
import play
import time
import datetime as dt
import argparse
from game.basewin import BaseWin
import tkinter


class LandingScreen(BaseWin):
    def __init__(self, master):
        super().__init__(master)
        self.OUTPUT_PATH = Path(__file__).parent
        self.ASSETS_PATH = self.OUTPUT_PATH / Path(r"landing_page\build\assets\frame0")
        self.title('Rock-Paper-Scissor Game')
        self.geometry("860x560")
        self.configure(bg="#FFFFFF")
        self.make_widgets()
        self.resizable(False, False)

    def relative_to_assets(self, path: str) -> Path:
        return self.ASSETS_PATH / Path(path)

    def nextpage(self):
        self.destroy()
        self.app = SelectPlayerScreen(self.master)

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
            172.55397033691406,
            59.99999999999994,
            anchor="nw",
            text="Rock-Paper-Scissors Game",
            fill="#A44CD3",
            font=("Poppins", 36 * -1)
        )

        self.canvas.create_text(
            168.0,
            119.20162963867182,
            anchor="nw",
            text="Playing Rock-Paper-Scissors Game by clicking Start Game button",
            fill="#969494",
            font=("Poppins", 15 * -1)
        )

        self.canvas.create_rectangle(
            226.63238525390625,
            170.43380737304682,
            633.0743408203125,
            412.36352539062494,
            fill="#FFFFFF",
            outline="")

        self.image_image_1 = PhotoImage(
            file=self.relative_to_assets("image_1.png"))
        self.image_1 = self.canvas.create_image(
            429.63238525390625,
            284.6028442382812,
            image=self.image_image_1
        )

        self.canvas.create_rectangle(
            279.0030517578125,
            438.5488891601562,
            580.70361328125,
            500.02749633789057,
            fill="#FFFFFF",
            outline="")

        self.button_image_1 = PhotoImage(
            file=self.relative_to_assets("button_1.png"))
        self.button_1 = Button(self,
            image=self.button_image_1,
            borderwidth=0,
            highlightthickness=0,
            command=self.nextpage,
            relief="flat"
        )
        self.button_1.place(
            x=281.280029296875,
            y=440.8258972167968,
            width=297.1466064453125,
            height=56.924652099609375
        )

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

class WinnerFinalScreen(BaseWin):
    def __init__(self, master, player1_name, player2_name, player1_score, player2_score):
        super().__init__(master)
        self.player1_name = player1_name
        self.player2_name = player2_name
        self.winner_name = player1_name if player1_score > player2_score else player2_name
        self.OUTPUT_PATH = Path(__file__).parent
        self.ASSETS_PATH = self.OUTPUT_PATH / Path(r"winner_final_page\build\assets\frame0")
        self.geometry("860x560")
        self.configure(bg="#FFFFFF")
        self.title('Rock-Paper-Scissor Game')
        self.geometry("860x560")
        self.configure(bg="#FFFFFF")
        self.make_widgets(player1_score, player2_score)
        self.resizable(False, False)

    def relative_to_assets(self, path: str) -> Path:
        return self.ASSETS_PATH / Path(path)

    def playagain(self):
        self.destroy()
        self.app = PlayScreen(self.master, self.player1_name, self.player2_name)

    def newgame(self):
        self.destroy()
        self.app = SelectPlayerScreen(self.master)

    def make_widgets(self,  player1_score, player2_score):
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
            361.529541015625,
            69.0,
            anchor="nw",
            text=self.winner_name,
            fill="#000000",
            font=("Poppins SemiBold", 36 * -1)
        )

        self.canvas.create_text(
            355.8472595214844,
            189.46438598632812,
            anchor="nw",
            text=f'{player1_score} - {player2_score}',
            fill="#000000",
            font=("Poppins SemiBold", 98 * -1)
        )

        self.canvas.create_text(
            306.9796447753906,
            123.54989624023438,
            anchor="nw",
            text="is the winner!",
            fill="#A44CD3",
            font=("Poppins SemiBold", 36 * -1)
        )

        self.button_image_1 = PhotoImage(
            file=self.relative_to_assets("button_1.png"))
        self.button_1 = Button(self,
            image=self.button_image_1,
            borderwidth=0,
            highlightthickness=0,
            command=self.newgame,
            relief="flat"
        )
        self.button_1.place(
            x=280.2729187011719,
            y=430.3930969238281,
            width=301.1609191894531,
            height=61.368621826171875
        )

        self.button_image_2 = PhotoImage(
            file=self.relative_to_assets("button_2.png"))
        self.button_2 = Button(self,
            image=self.button_image_2,
            borderwidth=0,
            highlightthickness=0,
            command=self.playagain,
            relief="flat"
        )
        self.button_2.place(
            x=278.0,
            y=350.8411560058594,
            width=301.160888671875,
            height=61.368621826171875
        )

class PlayScreen(BaseWin):
    def __init__(self, master, player1, player2, video_source=0):
        super().__init__(master)
        self.player1_name = player1
        self.player2_name = player2
        self.title('Rock-Paper-Scissor Game')
        self.geometry("860x560")
        self.configure(bg="#FFFFFF")

        self.round = 0
        self.video_source = video_source
        self.ok = False
        self.vid = VideoCapture(self.video_source)

        self.canvas1 = tkinter.Canvas(
            self,
            bg="#FFFFFF",
            height=560,
            width=860,
            bd=0,
            highlightthickness=0,
            relief="ridge"
        )

        self.canvas1.place(x=0, y=0)
        self.round_text = self.canvas1.create_text(
            356.0,
            51.0,
            anchor="nw",
            text=f"Round {self.round + 1}",
            fill="#A44CD3",
            font=("Poppins SemiBold", 36 * -1)
        )

        self.canvas1.create_text(
            124.0,
            105.20773315429688,
            anchor="nw",
            text=player1,
            fill="#000000",
            font=("Poppins SemiBold", 22 * -1)
        )

        self.canvas1.create_text(
            649.9918212890625,
            105.20773315429688,
            anchor="nw",
            text=player2,
            fill="#000000",
            font=("Poppins SemiBold", 22 * -1)
        )

        self.canvas1.create_rectangle(
            124.0,
            187.87167358398438,
            735.4867553710938,
            507.2036437988281,
            fill="#F1F1F1",
            outline="")

        self.info_text = self.canvas1.create_text(
            265.68023681640625,
            320.3605041503906,
            anchor="nw",
            text="Please press 'Enter' and be ready to \ndo your gestures in 3 seconds",
            fill="#A44CD3",
            font=("Poppins Regular", 18 * -1),
            tags='info_text'
        )
        self.canvas1.create_text(
            665.84521484375,
            139.17919921875,
            anchor="nw",
            text="WIN :",
            fill="#000000",
            font=("Poppins Regular", 18 * -1)
        )

        self.score_text_p2 = self.canvas1.create_text(
            713.971435546875,
            139.17919921875,
            anchor="nw",
            text="0",
            fill="#000000",
            font=("Poppins Regular", 18 * -1)
        )

        self.canvas1.create_text(
            137.58856201171875,
            139.17919921875,
            anchor="nw",
            text="WIN :",
            fill="#000000",
            font=("Poppins Regular", 18 * -1)
        )

        self.score_text_p1 = self.canvas1.create_text(
            185.71484375,
            139.17919921875,
            anchor="nw",
            text="0",
            fill="#000000",
            font=("Poppins Regular", 18 * -1)
        )

        self.canvas1.pack()
        self.check = True
        self.timer = ElapsedTimeClock(self, self.vid, self.canvas1, self.info_text, self.round_text,
                                      self.score_text_p1, self.score_text_p2, player1, player2)
        self.inner_canvas = tkinter.Canvas(self.canvas1, width=int(735.4867553710938 - 124),
                                      height=int(507.2036437988281 - 187.87167358398438))

        # Bind the Enter Key to the window
        self.bind('<Return>', self.show_camera_box)
        self.resizable(False, False)
        self.delay = 10
        self.update()

    def show_camera_box(self, event):
        if self.check:
            self.canvas1.create_window(429, 349, window=self.inner_canvas, tags='cam_win')
            self.ok = True
            end, score_player1, score_player2 = self.timer.start()
            if end:
                self.destroy()
                self.app = WinnerFinalScreen(self.master,self.player1_name,self.player2_name,score_player1,score_player2)
            self.check = False
            self.canvas1.itemconfig(self.info_text, text="Loading...")

        else:
            self.ok = False
            # self.timer.stop()
            self.check = True


    def snapshot(self):
        TIMER = int(3)
        prev = time.time()
        while TIMER >= 0:
            # Get a frame from the video source
            ret, frame = self.vid.get_frame()
            frame = cv2.flip(frame, 1)
            # current time
            cur = time.time()

            if cur - prev >= 1:
                prev = cur
                TIMER = TIMER - 1
        else:
            ret, frame = self.vid.get_frame()
            if ret:
                cv2.imwrite("screenshot.jpg",
                            cv2.cvtColor(frame, cv2.COLOR_RGB2BGR))
            self.ok = False
            self.timer.stop()

    def open_camera(self):
        self.ok = True
        self.timer.start()
        print("camera opened => Recording")

    def close_camera(self):
        self.ok = False
        self.timer.stop()
        print("camera closed => Not Recording")

    def update(self):

        # Get a frame from the video source
        ret, frame = self.vid.get_frame()
        frame = cv2.flip(frame, 1)
        if self.ok:
            self.vid.out.write(cv2.cvtColor(frame, cv2.COLOR_RGB2BGR))

        if ret:
            self.photo = PIL.ImageTk.PhotoImage(image=PIL.Image.fromarray(frame))
            self.inner_canvas.create_image(0, 0, image=self.photo, anchor=tkinter.NW)
        self.after(self.delay, self.update)

class VideoCapture:
    def __init__(self, video_source=0):
        # Open the video source
        self.vid = cv2.VideoCapture(video_source)
        if not self.vid.isOpened():
            raise ValueError("Unable to open video source", video_source)

        # Command Line Parser
        args = CommandLineParser().args

        # create videowriter

        # 1. Video Type
        VIDEO_TYPE = {
            'avi': cv2.VideoWriter_fourcc(*'XVID'),
            # 'mp4': cv2.VideoWriter_fourcc(*'H264'),
            'mp4': cv2.VideoWriter_fourcc(*'XVID'),
        }

        self.fourcc = VIDEO_TYPE[args.type[0]]

        # 2. Video Dimension
        STD_DIMENSIONS = {
            '480p': (640, 480),
            '720p': (1280, 720),
            '1080p': (1920, 1080),
            '4k': (3840, 2160),
        }
        res = STD_DIMENSIONS[args.res[0]]
        print(args.name, self.fourcc, res)
        self.out = cv2.VideoWriter(args.name[0] + '.' + args.type[0], self.fourcc, 10, res)

        # set video sourec width and height
        self.vid.set(3, res[0])
        self.vid.set(4, res[1])

        # Get video source width and height
        self.width, self.height = res

    # To get frames
    def get_frame(self):
        if self.vid.isOpened():
            ret, frame = self.vid.read()
            if ret:
                # Return a boolean success flag and the current frame converted to BGR
                return (ret, cv2.cvtColor(frame, cv2.COLOR_RGB2BGR))
            else:
                return (ret, None)
        else:
            return (ret, None)

    # Release the video source when the object is destroyed
    def __del__(self):
        if self.vid.isOpened():
            self.vid.release()
            self.out.release()
            cv2.destroyAllWindows()


class ElapsedTimeClock:
    def __init__(self, window, vid, canvas1, info_text, round_text, score_text_p1, score_text_p2,player1, player2):
        self.change_page = False
        self.player1_name = player1
        self.player2_name = player2
        self.score_player1 = 0
        self.score_player2= 0
        self.score_text_p1 = score_text_p1
        self.score_text_p2 = score_text_p2
        self.round_text = round_text
        self.round = 0
        self.window = window
        self.canvas1 = canvas1
        self.info_text = info_text
        self.T = tkinter.Label(self.window, text='Timer : 00', font=("Poppins Regular", 20, 'bold'), bg='white')
        canvas1.create_window(
            420,
            139.17919921875, window=self.T)

        self.elapsedTime = dt.datetime(1, 1, 1)
        self.running = 0
        self.lastTime = ''
        t = time.localtime()
        self.zeroTime = dt.timedelta(hours=t[3], minutes=t[4], seconds=t[5])
        # self.tick()
        self.vid2 = vid

    def tick(self):
        # get the current local time from the PC
        self.now = dt.datetime(1, 1, 1).now()
        self.elapsedTime = self.now - self.zeroTime
        self.time2 = self.elapsedTime.strftime('Timer : %S')
        # if time string has changed, update it
        if self.time2 != self.lastTime:
            self.lastTime = self.time2
            self.T.config(text=self.time2)
            print(self.time2.split(':')[-1])
        # calls itself every 200 milliseconds
        # to update the time display as needed
        # could use >200 ms, but display gets jerky
            if int(self.time2.split(':')[-1])%4==0 and int(self.time2.split(':')[-1])>0:
                ret, frame = self.vid2.get_frame()
                if ret:
                    cv2.imwrite("screenshot.jpg",
                                cv2.cvtColor(cv2.flip(frame,1), cv2.COLOR_RGB2BGR))
                    self.stop()
                    self.T.config(text='Capture!!!')
                    # Editted
                    self.canvas1.delete('cam_win')
                    success, is_end, winner, self.score_player1, self.score_player2 = play.play_in_round(self.score_player1, self.score_player2)
                    print(f'Round: {self.round}')
                    if is_end:
                        print('End!!')
                        self.change_page = True
                    if winner == 0:
                        self.canvas1.itemconfig(self.info_text,
                                                text="This round is Tie\nPress 'Enter' to play again in 3 seconds")
                    elif winner == 2:
                        self.canvas1.itemconfig(self.info_text,
                                                text="Hands not found.\nPress 'Enter' to play again in 3 seconds")
                    else:
                        self.round += 1
                        if winner == 1:
                            self.canvas1.itemconfig(self.info_text,
                                                    text=f"{self.player1_name} is the winner in this round!\nPress 'Enter' to continue in 3 seconds")
                        elif winner == -1:
                            self.canvas1.itemconfig(self.info_text,
                                                    text=f"{self.player2_name} is the winner in this round!\nPress 'Enter' to continue in 3 seconds")
                        if not is_end:
                            self.canvas1.itemconfig(self.round_text,
                                                    text=f'Round {self.round+1}')
                        self.canvas1.itemconfig(self.score_text_p1,
                                                text=self.score_player1)
                        self.canvas1.itemconfig(self.score_text_p2,
                                                text=self.score_player2)



                    # self.window.destroy()
                    # import winner_final_page.build.gui
                return 0
        self.updwin = self.T.after(100, self.tick)

    def start(self):
        if not self.running:
            # self.zeroTime = dt.datetime(1, 1, 1).now() - self.elapsedTime
            t = time.localtime()
            self.zeroTime = dt.timedelta(hours=t[3], minutes=t[4], seconds=t[5])
            self.elapsedTime = dt.datetime(1, 1, 1)
            if self.change_page:
                return True, self.score_player1, self.score_player2
            self.tick()
            self.running = 1


    def stop(self):
        if self.running:
            # self.T.after_cancel(self.updwin)
            # self.elapsedTime = dt.datetime(1, 1, 1).now() - self.zeroTime
            # self.time2 = self.elapsedTime
            # self.zeroTime = dt.datetime(1, 1, 1).now() - self.elapsedTime
            t = time.localtime()
            self.zeroTime = dt.timedelta(hours=t[3], minutes=t[4], seconds=t[5])
            self.elapsedTime = dt.datetime(1, 1, 1)
            self.running = 0


class CommandLineParser:

    def __init__(self):
        # Create object of the Argument Parser
        parser = argparse.ArgumentParser(description='Script to record videos')


        # Only values is supporting for the tag --type. So nargs will be '1' to get
        parser.add_argument('--type', nargs=1, default=['avi'], type=str,
                            help='Type of the video output: for now we have only AVI & MP4')

        # Only one values are going to accept for the tag --res. So nargs will be '1'
        parser.add_argument('--res', nargs=1, default=['480p'], type=str,
                            help='Resolution of the video output: for now we have 480p, 720p, 1080p & 4k')

        # Only one values are going to accept for the tag --name. So nargs will be '1'
        parser.add_argument('--name', nargs=1, default=['output'], type=str, help='Enter Output video title/name')

        # Parse the arguments and get all the values in the form of namespace.
        # Here args is of namespace and values will be accessed through tag names
        self.args = parser.parse_args()



