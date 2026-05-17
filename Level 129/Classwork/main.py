import matplotlib.pyplot as plt
import numpy as np

y = np.array([35, 25, 25, 15])
mylabels = ["Apples", "Bananas", "Cherries", "Dates"]
explode_data = [0, 0, 0, 0]
mycolors = ["#952B1D", "#ACAF4C", "#AF4C8E", "#4CAF50"]

plt.pie(y, labels=mylabels, explode=explode_data, colors=mycolors)
plt.show() 