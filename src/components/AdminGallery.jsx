import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Upload, Trash2, Plus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export default function AdminGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: "", category: "", image: "", span: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("blueberry_admin_auth");
    if (auth === "true") setIsAuthenticated(true);
    
    const savedItems = JSON.parse(localStorage.getItem("gallery_custom_items") || "[]");
    setItems(savedItems);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("blueberry_admin_auth", "true");
      setError("");
    } else {
      setError("Incorrect Credential. Access Denied.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("blueberry_admin_auth");
    navigate("/");
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.title || !newItem.image) return;
    const updated = [...items, { ...newItem, id: Date.now() }];
    setItems(updated);
    localStorage.setItem("gallery_custom_items", JSON.stringify(updated));
    setNewItem({ title: "", category: "", image: "", span: "" });
  };

  const deleteItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem("gallery_custom_items", JSON.stringify(updated));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-midnight p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-10 md:p-16 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-gold/20">
            <Lock className="text-brand-gold w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif text-brand-ivory mb-2">Secure Access</h1>
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-10">Vault of Blueberry Events</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Royal Passcode"
              className="w-full bg-transparent border-b border-brand-gold/20 py-4 text-center text-brand-ivory outline-none focus:border-brand-gold transition-colors font-light tracking-[0.2em]"
            />
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
            <button className="w-full py-4 bg-brand-gold text-brand-midnight uppercase tracking-[0.2em] font-bold hover:bg-brand-ivory transition-all duration-500 shadow-xl shadow-brand-gold/10">
              Unlock Portal
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-midnight pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-ivory mb-4">Curate Archive</h1>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em]">Manage ImageKit assets</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center text-brand-ivory/40 hover:text-red-400 transition-colors uppercase tracking-[0.2em] text-[10px]"
          >
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Add Form */}
          <div className="lg:col-span-1">
            <form onSubmit={addItem} className="glass p-8 space-y-8 sticky top-32">
              <h2 className="text-xl font-serif text-brand-ivory flex items-center">
                <Plus className="w-5 h-5 mr-3 text-brand-gold" /> Add New Project
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-brand-gold/60 block mb-2">Project Title</label>
                  <input 
                    type="text" 
                    value={newItem.title}
                    onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                    className="w-full bg-transparent border-b border-brand-ivory/10 py-2 text-brand-ivory focus:border-brand-gold outline-none"
                    placeholder="Ex. Royal Rajasthan"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-brand-gold/60 block mb-2">Category</label>
                  <input 
                    type="text" 
                    value={newItem.category}
                    onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                    className="w-full bg-transparent border-b border-brand-ivory/10 py-2 text-brand-ivory focus:border-brand-gold outline-none"
                    placeholder="Ex. Palace Wedding"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-brand-gold/60 block mb-2">ImageKit URL</label>
                  <input 
                    type="text" 
                    value={newItem.image}
                    onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                    className="w-full bg-transparent border-b border-brand-ivory/10 py-2 text-brand-ivory focus:border-brand-gold outline-none"
                    placeholder="https://ik.imagekit.io/..."
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.3em] text-brand-gold/60 block mb-2">Layout Size</label>
                  <select 
                    value={newItem.span}
                    onChange={(e) => setNewItem({...newItem, span: e.target.value})}
                    className="w-full bg-brand-midnight border border-brand-ivory/10 py-3 text-brand-ivory focus:border-brand-gold outline-none px-2"
                  >
                    <option value="">Normal (1x1)</option>
                    <option value="md:col-span-2">Wide (2x1)</option>
                    <option value="md:col-span-2 md:row-span-2">Large (2x2)</option>
                  </select>
                </div>
              </div>
              <button className="w-full py-4 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold uppercase tracking-[0.2em] font-bold hover:bg-brand-gold hover:text-brand-midnight transition-all duration-500">
                Update Gallery
              </button>
            </form>
          </div>

          {/* List View */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-serif text-brand-ivory">Live Items ({items.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.id} className="glass p-4 flex items-center group">
                  <img src={item.image} alt="" className="w-16 h-16 object-cover rounded border border-brand-gold/20" />
                  <div className="ml-4 flex-1">
                    <h4 className="text-brand-ivory text-sm font-medium">{item.title}</h4>
                    <p className="text-brand-gold/60 text-[9px] uppercase tracking-widest">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => deleteItem(item.id)}
                    className="p-2 text-brand-ivory/20 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {items.length === 0 && (
                <div className="col-span-full py-20 text-center border border-dashed border-brand-ivory/10 rounded-lg">
                  <p className="text-brand-ivory/20 text-xs uppercase tracking-[0.3em]">No custom assets added yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
