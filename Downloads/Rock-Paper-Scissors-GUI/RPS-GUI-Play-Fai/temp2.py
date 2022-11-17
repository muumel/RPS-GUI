# # # import cv2
# # # import time
# # # import pyscreenshot as screenshot
# # # from tkinter import *
# # # from PIL import Image, ImageTk
# # #
# # # # SET THE COUNTDOWN TIMER
# # # # for simplicity we set it to 3
# # # # We can also take this as input
# # # win = Tk()
# # # win.geometry("700x350")
# # #
# # # # Create a Label to capture the Video frames
# # # label = Label(win)
# # # label.grid(row=0, column=0)
# # #
# # # TIMER = int(3)
# # #
# # # # Open the camera
# # # cap = cv2.VideoCapture(0)
# # #
# # # while True:
# # #
# # #     # Read and display each frame
# # #     # ret, img_ = cap.read()
# # #     # cv2.imshow('a', img)
# # #
# # #     # Fai
# # #     def show_frames():
# # #         # Get the latest frame and convert into Image
# # #         cv2image = cv2.cvtColor(cap.read()[1], cv2.COLOR_BGR2RGB)
# # #         img = Image.fromarray(cv2image)
# # #         # Convert image to PhotoImage
# # #         imgtk = ImageTk.PhotoImage(image=img)
# # #         label.imgtk = imgtk
# # #         label.configure(image=imgtk)
# # #         # Repeat after an interval to capture continiously
# # #         label.after(20, show_frames)
# # #
# # #     show_frames()
# # #     # check for the key pressed
# # #     k = cv2.waitKey(125)
# # #     # print(k)
# # #     # set the key for the countdown
# # #     # to begin. Here we set q
# # #     # if key pressed is q
# # #     if k == 13:
# # #         prev = time.time()
# # #
# # #         while TIMER >= 0:
# # #             ret, img = cap.read()
# # #
# # #             # Display countdown on each frame
# # #             # specify the font and draw the
# # #             # countdown using puttext
# # #             font = cv2.FONT_HERSHEY_SIMPLEX
# # #             cv2.putText(img, str(TIMER),
# # #                         (200, 250), font,
# # #                         7, (0, 255, 255),
# # #                         4, cv2.LINE_AA)
# # #             cv2.imshow('a', img)
# # #             cv2.waitKey(125)
# # #
# # #             # current time
# # #             cur = time.time()
# # #
# # #             # Update and keep track of Countdown
# # #             # if time elapsed is one second
# # #             # than decrease the counter
# # #             if cur - prev >= 1:
# # #                 prev = cur
# # #                 TIMER = TIMER - 1
# # #
# # #         else:
# # #             ret, img = cap.read()
# # #
# # #             # Display the clicked frame for 2
# # #             # sec.You can increase time in
# # #             # waitKey also
# # #             cv2.imshow('a', img)
# # #
# # #             # time for which image displayed
# # #             cv2.waitKey(2000)
# # #
# # #             # Save the frame
# # #             cv2.imwrite('yolov5/screenshot/screenshot.jpg', img)
# # #
# # #         # HERE we can reset the Countdown timer
# # #         # if we want more Capture without closing
# # #         # the camera
# # #
# # #     # Press Esc to exit
# # #     elif k == 27:
# # #         break
# # #
# # # # close the camera
# # # cap.release()
# # #
# # # # close all the opened windows
# # # cv2.destroyAllWindows()
# #
# # import time
# # from tkinter import *
# # from tkinter import messagebox
# #
# # ### Create the interface object
# # clockWindow = Tk()
# # clockWindow.geometry("500x500")
# # clockWindow.title("Countdown Timer")
# # clockWindow.configure(background='orange')
# #
# # ### Declare variables
# # hourString = StringVar()
# # minuteString = StringVar()
# # secondString = StringVar()
# #
# # ### Set strings to default value
# # hourString.set("00")
# # minuteString.set("00")
# # secondString.set("00")
# #
# # ### Get user input
# # hourTextbox = Entry(clockWindow, width=3, font=("Calibri", 20, ""), textvariable=hourString)
# # minuteTextbox = Entry(clockWindow, width=3, font=("Calibri", 20, ""), textvariable=minuteString)
# # secondTextbox = Entry(clockWindow, width=3, font=("Calibri", 20, ""), textvariable=secondString)
# #
# # ### Center textboxes
# # hourTextbox.place(x=170, y=180)
# # minuteTextbox.place(x=220, y=180)
# # secondTextbox.place(x=270, y=180)
# #
# #
# # def runTimer():
# #     try:
# #         clockTime = int(hourString.get()) * 3600 + int(minuteString.get()) * 60 + int(secondString.get())
# #     except:
# #         print("Incorrect values")
# #
# #     while (clockTime > -1):
# #
# #         totalMinutes, totalSeconds = divmod(clockTime, 60)
# #
# #         totalHours = 0
# #         if (totalMinutes > 60):
# #             totalHours, totalMinutes = divmod(totalMinutes, 60)
# #
# #         hourString.set("{0:2d}".format(totalHours))
# #         minuteString.set("{0:2d}".format(totalMinutes))
# #         secondString.set("{0:2d}".format(totalSeconds))
# #
# #         ### Update the interface
# #         clockWindow.update()
# #         time.sleep(1)
# #
# #         ### Let the user know if the timer has expired
# #         if (clockTime == 0):
# #             messagebox.showinfo("", "Your time has expired!")
# #
# #         clockTime -= 1
# #
# #
# # setTimeButton = Button(clockWindow, text='Set Time', bd='5', command=runTimer)
# # setTimeButton.place(relx=0.5, rely=0.5, anchor=CENTER)
# #
# # ### Keep looping
# # clockWindow.mainloop()
# from tkinter import *
#
# class MainWindow(Frame):
#     def __init__(self):
#         super().__init__()
#         self.pack(expand=Y,fill=BOTH)
#
#         outercanvas = Canvas(self, width=200, height=100, bg='#00ffff')
#         outercanvas.pack(expand=Y,fill=BOTH)
#
#         innercanvas = Canvas(outercanvas, width=100, height=50)
#         outercanvas.create_window(50, 25, anchor=NW, window=innercanvas)
#
#         innercanvas.create_text(10, 10, anchor=NW, text="Hello")
#
# root = MainWindow()
# root.mainloop()

from tkinter import *
from PIL import Image, ImageTk

# Create an instance of tkinter frame or window
win=Tk()

# Set the size of the window
win.geometry("700x350")

def show_msg(event):
   label["text"]="Sale Up to 50% Off!"

# Create a label widget
label=Label(win, text="Press Enter Key" ,font="TkMenuFont 20")
label.pack(pady=30)

# Bind the Enter Key to the window
win.bind('<Return>', show_msg)

win.mainloop()