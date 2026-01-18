# def insertion_sort(arr):
#     for i in range(len(arr)):

#         for j in range(len(arr)):

#             if arr[i] < arr[j]:
#                 arr[i], arr[j] = arr[j], arr[i]

# test = [6, 1, 4, 3, 7, 5]
# insertion_sort(test)
# print(test)



def merge_sort(arr):
    left_arr  = arr[:len(arr)//2]
    right_arr = arr[len(arr)//2:]


    if len(left_arr) > 1:
        merge_sort(left_arr)
    if len(right_arr) > 1:
        merge_sort(right_arr)

    i = 0
    j = 0
    k = 0

    while i < len(left_arr) and j < len(right_arr):
        if left_arr[i] < right_arr[j]:
            arr[k] = left_arr[i]
            i += 1
        else:
            arr[k] = right_arr[j]
            j += 1
        k += 1
    
    while i < len(left_arr):
        arr[k] = left_arr[i]
        i += 1
        k += 1
    
    while j < len(right_arr):
        arr[k] = right_arr[j]
        j += 1
        k += 1

test_arr = [6, 1, 5, 3, 8, 9, 6, 7]
merge_sort(test_arr)
print(test_arr)

# n * n
# n * 
