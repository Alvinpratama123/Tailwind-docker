import React, { useState } from "react";
import { useRouter } from "next/router";


const Test = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const products = [
    { id: 1, name: "JEANS WANITA 39", category: "Jeans", price: "Rp. 450.000", image: "/images/jeanss.png" },
    { id: 2, name: "T-SHIRT BLACK", category: "T-Shirt", price: "Rp. 120.000", image: "/images/baju.png" },
    { id: 3, name: "SEPATU HITAM NIKE", category: "Sepatu", price: "Rp. 300.000", image: "/images/sepatu.png" },
    { id: 4, name: "JEANS WANITA 39", category: "Jeans", price: "Rp. 450.000", image: "/images/jeanss.png" },
    { id: 5, name: "T-SHIRT BLACK", category: "T-Shirt", price: "Rp. 120.000", image: "/images/baju.png" },
    { id: 6, name: "SEPATU HITAM NIKE", category: "Sepatu", price: "Rp. 300.000", image: "/images/sepatu.png" },
  ];

  // Filter produk berdasarkan pencarian
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (id) => {
    if (id) {
      router.push(`/product/${id}`); 
    } else {
      console.error("ID produk tidak ditemukan");
    }
  };
  

  return (
    <>
      {/* Navbar */}
      <div>
        <nav className="bg-green-900 text-white py-2">
          <div className="container mx-auto flex justify-between items-center px-4 text-sm">
          <div className="flex items-center space-x-2">
          <img src="/images/telpon.png" alt="Telepon" />
             <p>0854 238 8123</p>
             </div>
            <p>Dapatkan Promo Beli 1 Gratis 1</p>
            <div className="flex items-center space-x-2">
                 <img src="/images/lokasi.png" alt="Lokasi" />
                <p>Semarang, Indonesia</p>
               
           </div>
          </div>
        </nav>
      </div>

      <div className="bg-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-2">
               <img src="/images/keranjang.png" alt="Keranjang" />
               <h1 className="text-2xl font-bold text-green-900">TokoFashion</h1>
                   </div>
              <ul className="flex space-x-6 text-green-900">
                <li className="hover:underline cursor-pointer font-bold">Home</li>
                <li className="hover:underline cursor-pointer font-bold">
                  Kategori <span className="ml-1">▼</span>
             </li>

                <li className="hover:underline cursor-pointer font-bold">Promo</li>
              </ul>
             <div className="space-x-4">
               <button className=" border border-green-900 bg-white text-green-900 px-4 py-2 rounded rounded-xl">Login</button>
               <button className="bg-green-900 text-white px-4 py-2 rounded rounded-xl">Daftar</button>
              </div>
            </div>
           </div>     

           <div className="container mx-auto px-4 py-8">
           <div className="flex items-center text-sm text-gray-600 mb-4 space-x-2">
                   <img src="/images/Vector.png" alt="Vector" className="w-4 h-4" />
                <span>Home /</span>
                <span>Daftar Produk /</span>
                <span className="text-green-900 font-bold">Daftar Produk</span>
                   </div>

               <div className="text-4xl font-bold text-green-900 py-8 px-8">
               <h1>Daftar Produk</h1>
               </div>
             

        {/* Input Pencarian */}
        <div className="flex justify-end mb-6">
          <input
          type="text"
          placeholder="Cari Produk..."
          className="border px-4 py-2 rounded-l-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-green-900 text-white px-4 py-2 rounded-r-lg">
          <div>
          <img src="/images/C1.png" alt="C1" className="w-6 h-6" />
          </div>
        </button>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
         <div
         key={product.id}
         className="border border-white bg-white rounded-lg p-4 text-center shadow-md cursor-pointer hover:shadow-lg"
         onClick={() => handleProductClick(product.id)} // Navigasi ke halaman detail
       >
         <div className="relative mb-4 w-full h-48 border bg-gray-200 border-gray-300 rounded-lg overflow-hidden">
           <img
             src={product.image}
             alt={product.name}
             className="mx-auto mb-4 w-32 h-32 object-contain"
           />
         </div>
         <h3 className="text-lg font-semibold">{product.name}</h3>
         <p className="text-sm text-gray-600">{product.category}</p>
         <p className="text-green-900 font-bold">{product.price}</p>
         <div className="flex justify-center items-center mt-2">
                <img src="/images/bintang.png" alt="Rating" />
                  </div>
       </div>
       
          ))}
        </div>
      </div>
    
  




     {/* Footer */}
     <footer className="bg-green-900 text-white py-8">
  <div className="container mx-auto text-center">
    <div className="flex justify-center items-center space-x-2 mb-4">
      <img src="/images/keranjang1.png" alt="Logo Toko" className="w-8 h-8" />
      <h2 className="text-lg font-bold">TokoFashion</h2>
    </div>
    <p>Jalan Sumpah Pemuda No. 18, Kriyak,<br/> Semarang (Gedula 4 Lantai 2)</p>
    <div className="flex justify-center space-x-6 mt-4">
     <img src="/images/media.png"/>
    </div>
    <p className="mt-4 text-sm">© Wahidev Academy 2023. Hak Cipta Dilindungi</p>
  </div>
</footer>
</>
);
};

export default Test;
