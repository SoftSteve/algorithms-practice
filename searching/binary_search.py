#--------------------Binary Search--------------------#
'''
    - Quickly find an element in array of *sorted* integers.
    - Start with two index points. Low at the begging and high at the end.
    - Find the middle index of the array by using (low index + high index) // 2.
    - if its the target return position in array.
    - if the target is smaller than the value of the middle index's value search the left half.
    - if the target is larger than the vale of the middle index's value search the right half.
    - repeat until you find the target. if target is not found return -1.
'''

numbers = list(range(100001))

target = 345

def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

result = binary_search(numbers, target)

if result != -1:
    print(f'Result found at: {result}')
else:
    print('Not found')