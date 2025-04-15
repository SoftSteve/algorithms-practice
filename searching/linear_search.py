#-----------------------Linear Search-----------------------#
'''
    - find an element in a list of integers.
    - start from the first index in an array.
    - check if its the target.
        - if yes, return its position.
    - if search does not find target return -1

'''

numbers = [3, 8, 2, 7, 5] # array of unsorted integers

target = 7 # target element

def linear_search(arr, target):
    ''' iterate through index of array. If target element is found return index of element. else return -1 '''
    for i in range(len(arr)): 
        if arr[i] == target:
            return i
    return -1

result = linear_search(numbers, target)

if result != -1:
    print(f'Result found at: {result}')
else:
    print('Not found')