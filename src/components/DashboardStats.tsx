import React from 'react';
import { TruckIcon, DollarSign, Users, Package } from 'lucide-react';

const stats = [
  {
    title: "Fretes Ativos",
    value: "24",
    icon: TruckIcon,
    trend: "+12%",
    trendUp: true,
  },
  {
    title: "Receita Mensal",
    value: "R$ 45.850",
    icon: DollarSign,
    trend: "+8%",
    trendUp: true,
  },
  {
    title: "Clientes Ativos",
    value: "156",
    icon: Users,
    trend: "+5%",
    trendUp: true,
  },
  {
    title: "Entregas Hoje",
    value: "12",
    icon: Package,
    trend: "-2%",
    trendUp: false,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <span
                className={`text-sm font-semibold ${
                  stat.trendUp ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.trend}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}