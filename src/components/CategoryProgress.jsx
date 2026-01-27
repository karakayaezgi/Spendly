import React from "react";

const CategoryProgress = () => {
  const categories = [
    { name: "Food", amount: 1200, percent: 45 },
    { name: "Bills", amount: 800, percent: 30 },
    { name: "Transport", amount: 400, percent: 15 },
  ];

  return (
    <div className="shadow p-6 rounded-2xl">
      <div className="mb-10">
        <strong className="text-2xl">Kategori Dağılımı</strong>
        <p className="text-gray-600 text-xs sm:text-sm">Bu ayki harcamalarınızın kategorilere göre dağılımı</p>
      </div>
      <div>
      </div>
      {categories.map(cat => (
        <div key={cat.name} className="my-4">
          <div className="flex justify-between text-sm mb-1">
            <span>{cat.name}</span>
            <span>{cat.percent}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div className="h-2 bg-blue-600 rounded" style={{ width: `${cat.percent}%` }}/>
          </div>
        </div>
      ))}

    </div>
  );
};

export default CategoryProgress;
