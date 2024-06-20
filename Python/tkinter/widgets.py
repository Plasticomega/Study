import tkinter as tk
from tkinter import ttk

def button_func():
    print("balls")

def sick():
    print("hello")


#create a window

window = tk.Tk()
window.title('Window and widgets')
window.geometry('800x500')

#ttk label

label = ttk.Label(master= window, text= 'This is dick')
label.pack()

#tk.text

text = tk.Text(master = window)
text.pack()

#ttk entry

entry = ttk.Entry(master= window)
entry.pack()

# label
new_label = ttk.Label(master = window,text='BIG BALL')
new_label.pack()

#ttk button
button = ttk.Button(master = window, text ='Button', command= button_func)
button.pack()

new_button = ttk.Button(master = window,text='BUTTUN',command= sick)
new_button.pack()

# run

window.mainloop()
