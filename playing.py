import cv2
import PIL.Image, PIL.ImageTk
from pathlib import Path
import time
import datetime as dt
import argparse
from game.basewin import BaseWin
import tkinter

class PlayScreen(BaseWin):
    def __init__(self, master, player1, player2, video_source=0):
        super().__init__(master)
        # self.player1_var = tkinter.StringVar()
        # self.player2_var = tkinter.StringVar()
        # self.OUTPUT_PATH = Path(__file__).parent
        # self.ASSETS_PATH = self.OUTPUT_PATH / Path(r"select_players_page\build\assets\frame0")
        self.title('Rock-Paper-Scissor Game')
        self.geometry("860x560")
        self.configure(bg="#FFFFFF")
        # self.make_widgets()
        # self.resizable(False, False)


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
        self.canvas1.create_text(
            356.0,
            51.0,
            anchor="nw",
            text="Round 2",
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

        self.canvas1.create_text(
            265.68023681640625,
            320.3605041503906,
            anchor="nw",
            text="Please press ‘Enter’ and be ready to \ndo your gestures in 3 seconds",
            fill="#A44CD3",
            font=("Poppins Regular", 18 * -1)
        )

        self.canvas1.create_text(
            665.84521484375,
            139.17919921875,
            anchor="nw",
            text="WIN :",
            fill="#000000",
            font=("Poppins Regular", 18 * -1)
        )

        self.canvas1.create_text(
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

        self.canvas1.create_text(
            185.71484375,
            139.17919921875,
            anchor="nw",
            text="1",
            fill="#000000",
            font=("Poppins Regular", 18 * -1)
        )

        self.canvas1.pack()
        self.timer = ElapsedTimeClock(self, self.vid, self.canvas1)

        self.inner_canvas = tkinter.Canvas(self.canvas1, width=int(735.4867553710938 - 124),
                                      height=int(507.2036437988281 - 187.87167358398438))

        # Bind the Enter Key to the window
        self.check = True
        self.bind('<Return>', self.show_camera_box)
        self.resizable(False, False)
        self.delay = 10
        self.update()
        self.mainloop()

    def show_camera_box(self, event):
        if self.check:
            self.canvas1.create_window(429, 349, window=self.inner_canvas, tags='cam_win')
            self.ok = True
            self.timer.start()
            self.check = False
        else:
            self.canvas1.delete('cam_win')
            self.ok = False
            self.timer.stop()
            self.check = True


    def snapshot(self):
        TIMER = int(3)
        prev = time.time()
        while TIMER >= 0:
            # Get a frame from the video source
            ret, frame = self.vid.get_frame()

            # current time
            cur = time.time()

            if cur - prev >= 1:
                prev = cur
                TIMER = TIMER - 1
        else:
            ret, frame = self.vid.get_frame()
            if ret:
                cv2.imwrite("frame-" + time.strftime("%d-%m-%Y-%H-%M-%S") + ".jpg",
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
    def __init__(self, window, vid, canvas1):
        self.window = window
        self.T = tkinter.Label(self.window, text='Timer : 00', font=("Poppins Regular", 20, 'bold'), bg='white')
        canvas1.create_window(
            420,
            139.17919921875, window=self.T)

        self.elapsedTime = dt.datetime(1, 1, 1)
        self.running = 0
        self.lastTime = ''
        t = time.localtime()
        self.zeroTime = dt.timedelta(hours=t[3], minutes=t[4], seconds=t[5])
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
            # print(self.time2.split(':')[-1])
        # calls itself every 200 milliseconds
        # to update the time display as needed
        # could use >200 ms, but display gets jerky
            if int(self.time2.split(':')[-1])%4==0 and int(self.time2.split(':')[-1])>0:
                ret, frame = self.vid2.get_frame()
                if ret:
                    cv2.imwrite("frame-" + time.strftime("%d-%m-%Y-%H-%M-%S") + ".jpg",
                                cv2.cvtColor(frame, cv2.COLOR_RGB2BGR))
                    self.T.config(text='Capture!!!')
                    # self.window.destroy()
                    # import winner_final_page.build.gui
                return 0

        self.updwin = self.T.after(100, self.tick)

    def start(self):
        if not self.running:
            self.zeroTime = dt.datetime(1, 1, 1).now() - self.elapsedTime
            self.tick()
            self.running = 1


    def stop(self):
        if self.running:
            # self.T.after_cancel(self.updwin)
            # self.elapsedTime = dt.datetime(1, 1, 1).now() - self.zeroTime
            # self.time2 = self.elapsedTime
            self.zeroTime = dt.datetime(1, 1, 1).now() - self.elapsedTime
            self.tick()
            self.running = 0


class CommandLineParser:

    def __init__(self):
        # Create object of the Argument Parser
        parser = argparse.ArgumentParser(description='Script to record videos')

        # Create a group for requirement
        # for now no required arguments
        # required_arguments=parser.add_argument_group('Required command line arguments')

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
