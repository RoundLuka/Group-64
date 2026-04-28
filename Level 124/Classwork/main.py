from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton
import sys

def handle_click():
    print("Clicked")

def window():
    app = QApplication(sys.argv)
    win1 = QMainWindow()

    x_position = 300
    y_position = 300

    width = 500
    height = 500

    win1.setWindowTitle("Luka")
    win1.setGeometry(x_position, y_position, width, height)

    textLabel = QLabel(win1)
    textLabel.setText("Hello this is my first python graphical user interface")
    textLabel.setGeometry(100, 150, 350, 75)
    textLabel.setStyleSheet(
    """
        background-color: red;
        border: 1px solid green;
        font-size: 15px;
    """)

    textButton = QPushButton(win1)
    textButton.setGeometry(0, 0, 200, 50)
    textButton.setText("Click me")
    textButton.clicked.connect(handle_click)

    win1.show()
    sys.exit(app.exec_())

window()