matrix = [
    ["a11", "a12", "a13"],
    ["a21", "a22", "a23"],
]

def tranpose_matrix(matrix):

    new_rows = len(matrix[0])

    transposed_matrix = []

    for row_index in range(new_rows):
        new_row = []
        
        for row in matrix:
            new_row.append(row[row_index])

        transposed_matrix.append(new_row)

    return transposed_matrix


