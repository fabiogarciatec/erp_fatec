import React from 'react';
import {
  LayoutDashboard,
  Users,
  TruckIcon,
  Settings,
  ChevronLeft,
  ChevronRight,
  Package,
  LogOut
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  className?: string;
  onLogout?: () => void;
}

export default function Sidebar({ className, onLogout }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
    { icon: Users, label: 'Cadastros', href: '#' },
    { icon: Package, label: 'Vendas', href: '#' },
    { icon: TruckIcon, label: 'Fretes', href: '#' },
    { icon: Settings, label: 'Configurações', href: '#' },
  ];

  return (
    <aside className={`${className} relative bg-gray-900 text-white`}>
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="Company Logo"
          />
          <button
            onClick={() => setExpanded(curr => !curr)}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <div className="flex-1 px-3">
          {menuItems.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 px-3 py-3 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Icon size={20} />
              <span
                className={`overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                }`}
              >
                {label}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-gray-700 p-3">
          <div className="flex items-center gap-2 px-3 py-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div
              className={`flex flex-col overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              <span className="text-sm font-semibold">John Doe</span>
              <span className="text-xs text-gray-400">Administrador</span>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-3 hover:bg-gray-800 rounded-lg transition-colors text-red-400 hover:text-red-300"
          >
            <LogOut size={20} />
            <span
              className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              Sair
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
}