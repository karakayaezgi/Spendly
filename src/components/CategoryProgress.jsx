import React from "react";

const CategoryProgress = ({ expensesThisMonth, totalOfMonth }) => {

  const categoryTotals = {}

  expensesThisMonth.forEach((expense) => {
    const category = expense.category
    const percent = (expense.amount / totalOfMonth) * 100

    if (!categoryTotals[category]) {
      categoryTotals[category] = 0
    }
    categoryTotals[category] += percent
  }

  )

  const categories = Object.entries(categoryTotals).map(([name, percent]) => {
    return { name, percent }
  }
  )


  return (
    <div className="shadow p-6 rounded-2xl">
      <div className="mb-10">
        <strong className="text-2xl">Kategori Dağılımı</strong>
        <p className="text-gray-600 text-xs sm:text-sm">Bu ayki harcamalarınızın kategorilere göre dağılımı</p>
      </div>
      <div>
      </div>
      {
        categories.map((cat, i) => (
          <div key={i} className="my-4">
            <div className="flex justify-between text-sm mb-1">
              <span>{cat.name}</span>
              <span>{cat.percent.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="h-2 bg-blue-600 rounded" style={{ width: `${cat.percent}%` }} />
            </div>
          </div>
        ))

      }



    </div>
  );
};

export default CategoryProgress;
