#-----------------------Merge------------------#
'''
    - Take two lists (left and right) 
    - use two pointers for each array
    - compare elements in each index and build a new sorted array
    - add any remaining elements once one list runs out

'''

def merge(left, right):
    result = []
    i = 0
    j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

unsorted_list = [4, 2, 9, 1, 7, 6, 3]

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) //2
    left_half = arr[:mid]
    right_half = arr[mid:]

    sorted_left = merge_sort(left_half)
    sorted_right = merge_sort(right_half)

    return merge(sorted_left, sorted_right)

sorted_result = merge_sort(unsorted_list)
print(sorted_result)