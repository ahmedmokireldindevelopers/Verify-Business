import Link from 'next/link';
import {ShieldAlert, Home} from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white p-12 rounded-[40px] shadow-xl border border-slate-100 text-center">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <ShieldAlert size={40} />
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">404 - Not Found</h1>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The page you are looking for does not exist or has been moved to a different verification level.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg active:scale-95">
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
