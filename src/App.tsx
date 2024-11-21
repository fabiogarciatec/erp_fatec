import React from 'react';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import DashboardStats from './components/DashboardStats';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function Dashboard() {
  const { signOut } = useAuth();
  
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar className="w-[270px] shrink-0" onLogout={signOut} />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Bem-vindo ao seu painel de controle</p>
          </header>

          <DashboardStats />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Fretes Recentes</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium">São Paulo → Rio de Janeiro</p>
                        <p className="text-sm text-gray-500">Em trânsito • Entrega hoje</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">R$ 2.450</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Últimos Clientes</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={`https://i.pravatar.cc/40?img=${item}`}
                      alt="Cliente"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Empresa {item}</p>
                      <p className="text-sm text-gray-500">Cadastrado há 2 dias</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return user ? <Dashboard /> : <Login />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
      <Toaster position="top-right" />
    </AuthProvider>
  );
}