import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-lg p-4 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">no1smmpannel</h1>
        <nav className="space-y-3">
          <button className="block w-full text-left">Dashboard</button>
          <button className="block w-full text-left">New Order</button>
          <button className="block w-full text-left">Order History</button>
          <button className="block w-full text-left">Account</button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded shadow">
            <p className="text-gray-500">Balance</p>
            <h3 className="text-2xl font-bold text-green-600">₹1,200</h3>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <p className="text-gray-500">Total Orders</p>
            <h3 className="text-2xl font-bold">254</h3>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <p className="text-gray-500">Pending Orders</p>
            <h3 className="text-2xl font-bold text-yellow-600">12</h3>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Place New Order</h3>
          <form className="space-y-4 max-w-xl">
            <input placeholder="Service URL" className="border p-2 w-full" />
            <input placeholder="Quantity" type="number" className="border p-2 w-full" />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit Order</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
