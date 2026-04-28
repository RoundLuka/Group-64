from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton
import sys

class Window(QMainWindow):
    def __init__(self):
        super(QMainWindow, self).__init__()
        self.setWindowTitle("Luka")
        self.setGeometry(300, 300, 500, 500)
        self.window_content()

    def window_content(self):
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
        self.textButton.clicked.connect(self.handle_click)

    def handle_click(self):
        self.textLabel.setText("Button got clicked")
        self.textLabel.adjustSize()

def main():
    app = QApplication(sys.argv)
    win1 = Window()

    win1.show()
    sys.exit(app.exec_())

main()

