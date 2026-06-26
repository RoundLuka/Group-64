nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] # sorted
target = 3

def find_target(arr, tar):
    
    left = 0 
    right = len(arr)

    while left <= right:

        middle = (left + right) // 2

        if arr[middle] > tar:
            right = right - middle
        elif arr[middle] < tar:
            left = left + middle
        else:
            return tar
        
print(find_target(nums, target))
