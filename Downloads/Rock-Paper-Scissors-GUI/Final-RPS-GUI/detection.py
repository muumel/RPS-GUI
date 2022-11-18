import yolov5.detect
import pyscreenshot as screenshot
from tkinter import *
from PIL import Image, ImageTk
import cv2
import time

def detect_from_img(img='./screenshot.jpg'):
    return yolov5.detect.main(img_source=img)
    # return {user1: , user2: }


def openCamera():
    win = Tk()
    # Create an instance of TKinter Window or frame
    # Set the size of the window
    win.geometry("700x350")

    # Create a Label to capture the Video frames
    label = Label(win)
    label.grid(row=0, column=0)

    TIMER = int(3)

    cap = cv2.VideoCapture(0)

    # Define function to show frame
    def show_frames():
        # Get the latest frame and convert into Image
        cv2image = cv2.cvtColor(cap.read()[1], cv2.COLOR_BGR2RGB)
        img = Image.fromarray(cv2image)
        # Convert image to PhotoImage
        imgtk = ImageTk.PhotoImage(image=img)
        imgtk.save("screenshot.jpg")
        label.imgtk = imgtk
        label.configure(image=imgtk)
        # Repeat after an interval to capture continiously
        label.after(20, show_frames)

    show_frames()
    win.mainloop()


def countdown(s):
    seconds = s
    while seconds >= 0:
        print(seconds)
        time.sleep(1)
        seconds -= 1
    print("The countdown is at zero seconds!")
    screenShot()


def screenShot():
    print("Screenshot")
    # img = screenshot.grab(bbox=(100, 100, 800, 800))  # x1, y1, x2, y2
    img = screenshot.grab()

    # save image file
    img.save("yolov5/screenshot/screenshot.jpg")
# def handler(e):
# Open camera
# Screenshot with countdown
# Play rps
# If error --> redo
# Return winner


if __name__ == "__main__":
    detect_from_img()

    # play_best_of(3)  # 2
