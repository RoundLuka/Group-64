def latest_clock(a, b, c, d):
    sortedArr = sorted([a, b, c, d])
    
    hour_first_digit = max(filter(lambda x: x <= 2, sortedArr))
    
    sortedArr.remove(hour_first_digit)
    
    if hour_first_digit == 1:
        hour_second_digit = max(sortedArr)
    else:
        hour_second_digit = max(filter(lambda x: x <= 3, sortedArr))
    
    sortedArr.remove(hour_second_digit)

    first_min_digit = max(filter(lambda x: x <= 5, sortedArr))

    sortedArr.remove(first_min_digit)
    
    last = sortedArr[0]
    
    return f"{hour_first_digit}{hour_second_digit}:{first_min_digit}{last}"

print(latest_clock(1, 2, 8, 9))