const URL = 'http://localhost:3001/expenses'

export const getExpenses = async () => {
    const response = await fetch(URL)
    if (!response.ok) throw new Error('Failed to fetch expenses')
    return response.json()
}

export const addExpense = async (expense) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(expense)
    })
    if(!response.ok) throw new Error('Failed to add expense')
        return response.json()
}

export const deleteExpense = async(id) => {
    const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE'
    })
    if(!response.ok) throw new Error('Failed to delete expense')
}

export const updateExpense = async(id, updatedExpense) => {
    const response = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'âpplication/json'
        },
        body: JSON.stringify(updatedExpense)
    })
    if(!response.ok) throw new Error('Failed to update expense')
        return response.json()
}