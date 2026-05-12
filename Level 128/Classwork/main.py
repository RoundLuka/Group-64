from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton
import sys

class Window(QMainWindow):
    def __init__(self):
        super().__init__()

        x_position = 300
        y_position = 300

        width = 500
        height = 500

        self.click_count = 0

        self.setWindowTitle("Luka")
        self.setGeometry(x_position, y_position, width, height)
        self.inner_content()

        
    def handle_click(self):
        self.click_count += 1
        self.textLabel.setText(f"Button got clicked {self.click_count} times")

    def inner_content(self):

        self.textLabel = QLabel(self)
        self.textLabel.setText("Hello this is my first python graphical user interface")
        self.textLabel.setGeometry(100, 150, 350, 75)
        self.textLabel.setStyleSheet(
        """
        background-color: red;
        border: 1px solid green;
        font-size: 15px;
        """)

        self.textButton = QPushButton(self)
        self.textButton.setGeometry(0, 0, 200, 50)
        self.textButton.setText("Click me")
        self.textButton.setStyleSheet("""
        background-color: green;
        border: 1px solid black;
        font-size: 18px;
        """)
        self.textButton.clicked.connect(self.handle_click)


def main():
    app = QApplication(sys.argv)
    win1 = Window()


    win1.show()
    sys.exit(app.exec_())

main()