import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Upload, Trash2, Plus, LogOut, Loader2, CheckCircle2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export default function AdminGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("blueberry_admin_auth");
    if (auth === "true") setIsAuthenticated(true);
    fetchLiveItems();
  }, []);

  const fetchLiveItems = async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Failed to fetch items");
    }
  };

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    setError("");

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = async () => {
        const base64Data = reader.result;
        
        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file: base64Data,
            fileName: selectedFile.name,
          }),
        });

        if (response.ok) {
          setUploadSuccess(true);
          setSelectedFile(null);
          fetchLiveItems();
          setTimeout(() => setUploadSuccess(false), 3000);
        } else {
          setError("Upload failed. Check your credentials.");
        }
        setUploading(false);
      };
    } catch (err) {
      setError("Error processing file.");
      setUploading(false);
    }
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
            <Link to="/" className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-4 block hover:text-brand-ivory transition-colors">← Back to Journey</Link>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-ivory mb-4">Royal Uploader</h1>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em]">Direct to ImageKit Archive</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center text-brand-ivory/40 hover:text-red-400 transition-colors uppercase tracking-[0.2em] text-[10px]"
          >
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <div className="glass p-8 space-y-8 sticky top-32">
              <h2 className="text-xl font-serif text-brand-ivory flex items-center">
                <Upload className="w-5 h-5 mr-3 text-brand-gold" /> Instant Upload
              </h2>
              
              <div className="space-y-6">
                <div className="relative group">
                  <input 
                    type="file" 
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    accept="image/*"
                  />
                  <div className="border-2 border-dashed border-brand-gold/20 rounded-xl p-10 text-center group-hover:border-brand-gold/50 transition-colors">
                    <Plus className="w-8 h-8 text-brand-gold/40 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-brand-ivory/60 text-xs uppercase tracking-widest leading-relaxed">
                      {selectedFile ? selectedFile.name : "Select or Drop Image"}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {uploadSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg flex items-center text-xs tracking-widest uppercase"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-3" /> Successfully Uploaded
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && <p className="text-red-400 text-[10px] uppercase tracking-widest">{error}</p>}

                <button 
                  onClick={uploadFile}
                  disabled={!selectedFile || uploading}
                  className={`w-full py-5 rounded-lg flex items-center justify-center uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500 ${
                    !selectedFile || uploading 
                    ? 'bg-white/5 text-white/20 cursor-not-allowed' 
                    : 'bg-brand-gold text-brand-midnight hover:bg-brand-ivory shadow-xl shadow-brand-gold/10'
                  }`}
                >
                  {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Initiate Upload"}
                </button>
              </div>

              <div className="pt-4 border-t border-brand-ivory/5">
                <p className="text-[9px] text-brand-ivory/40 leading-relaxed uppercase tracking-widest">
                  Images will be automatically optimized to .webp and added to the "/blueberry" folder.
                </p>
              </div>
            </div>
          </div>

          {/* List View */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-serif text-brand-ivory">Live Archive ({items.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item) => (
                <div key={item.id} className="glass p-4 flex items-center group overflow-hidden">
                  <div className="w-20 h-20 overflow-hidden rounded">
                    <img src={item.image} alt="" className="w-full h-full object-cover border border-brand-gold/10 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="ml-6 flex-1 min-w-0">
                    <h4 className="text-brand-ivory text-xs font-medium uppercase tracking-widest truncate">{item.title}</h4>
                    <p className="text-brand-gold/40 text-[9px] uppercase tracking-widest mt-1">ImageKit Optimization Active</p>
                  </div>
                </div>
              ))}
              {items.length === 0 && (
                <div className="col-span-full py-20 text-center border border-dashed border-brand-ivory/10 rounded-lg">
                  <p className="text-brand-ivory/20 text-xs uppercase tracking-[0.3em]">No assets in archive</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
