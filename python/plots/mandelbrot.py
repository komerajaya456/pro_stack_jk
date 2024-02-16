import numpy as np
import matplotlib.pyplot as plt

def mandelbrot(c, max_iter):
    z = 0
    n = 0
    while abs(z) <= 2 and n < max_iter:
        z = z**2 + c
        n += 1
    return n

def mandelbrot_set(width, height, xmin, xmax, ymin, ymax, max_iter):
    x = np.linspace(xmin, xmax, width)
    y = np.linspace(ymin, ymax, height)
    
    mandelbrot_image = np.zeros((width, height))
    
    for i in range(width):
        for j in range(height):
            mandelbrot_image[i, j] = mandelbrot(complex(x[i], y[j]), max_iter)
    
    return mandelbrot_image

def plot_mandelbrot(width, height, xmin, xmax, ymin, ymax, max_iter):
    mandelbrot_image = mandelbrot_set(width, height, xmin, xmax, ymin, ymax, max_iter)
    
    plt.imshow(mandelbrot_image.T, cmap='hot', extent=(xmin, xmax, ymin, ymax))
    plt.title('Mandelbrot Set')
    plt.xlabel('Re')
    plt.ylabel('Im')
    plt.show()

# Set parameters for the plot
width = 800
height = 800
xmin, xmax = -2, 2
ymin, ymax = -2, 2
max_iter = 100

# Create and display the Mandelbrot set plot
plot_mandelbrot(width, height, xmin, xmax, ymin, ymax, max_iter)
