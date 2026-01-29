def searchInsert(nums, target):

        index = len(nums) // 2
        start = 0
        end = 0

        if nums[index] > target:
            end = index
        else:
            start = index
            end = len(nums)

        while len(nums[start:end]) != 1:
            if nums[index] != target:
                index = (start + end) // 2
                if nums[index] > target:
                    end = index
                else:
                    start = index
            else:
                return index    
        return start    

print(searchInsert([1,3,5,6], 2))
#                   0  1  2  3 4    5   6  7 8  9