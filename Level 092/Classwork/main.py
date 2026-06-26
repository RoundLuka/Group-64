# def count_bits(num):
#     bits = 0
#     while num >= 1:
#         remainder = num % 2 
#         if remainder == 1:
#             bits += 1
#         num = num // 2
#     return bits

# print(count_bits(8))


# nums = [6, 7, 4, 8, 3]
# bits = [2, 3, 1, 1, 2]

# num_bits = list(zip(nums, bits))
# print(sorted(num_bits, key=lambda tup: tup[1]))


# Insertion sort - ჩასმით სორტირება


# nums = [6, 2, 8, 3, 4]

# def insertion_sort(arr):
#     for i in range(1, len(arr)):
#         j = i

#         while arr[j - 1] > arr[j] and j > 0:
#             arr[j - 1], arr[j] = arr[j], arr[j - 1]
#             j -= 1

# insertion_sort(nums)
