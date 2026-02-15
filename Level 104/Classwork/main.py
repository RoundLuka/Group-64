# Binary Search

# 

def binary_search(arr, target):
    start = 0
    end = len(arr) - 1

    while start <= end:
        middle_index = (start + end) // 2

        if arr[middle_index] == target:
            return middle_index
        elif arr[middle_index] < target:
            start = middle_index + 1
        else:
            end = middle_index - 1
    return -1

#                   0  1  2  3  4  5   6
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))