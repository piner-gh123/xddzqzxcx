/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
import { 
  Home as HomeIcon, 
  FileText, 
  Stamp, 
  User, 
  Search as SearchIcon, 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  Share2, 
  CheckCircle2, 
  Download, 
  History,
  ShieldCheck, 
  Plus, 
  UploadCloud, 
  MessageSquare, 
  Lock, 
  Smartphone, 
  Settings, 
  BadgeCheck, 
  HelpCircle, 
  Trash2, 
  Edit3, 
  UserPlus,
  Menu,
  MoreHorizontal,
  Folder,
  Image as ImageIcon,
  FileUp,
  Calendar,
  Type,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type View = 
  | 'home' 
  | 'documents' 
  | 'seals' 
  | 'profile' 
  | 'contract-details' 
  | 'identity-auth' 
  | 'search' 
  | 'security-settings' 
  | 'initiate-contract' 
  | 'signing-room' 
  | 'announcement' 
  | 'messages'
  | 'property-details'
  | 'contract-setup'
  | 'signing-editor';

// --- Components ---

const BottomNav = ({ activeView, onViewChange }: { activeView: View, onViewChange: (v: View) => void }) => {
  const navItems = [
    { id: 'home', label: '首页', icon: HomeIcon },
    { id: 'documents', label: '文档', icon: FileText },
    { id: 'seals', label: '印章', icon: Stamp },
    { id: 'profile', label: '个人中心', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-4 pb-6 pt-2 z-50 flex justify-between items-center max-w-md mx-auto">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onViewChange(item.id as View)}
          className={`flex flex-1 flex-col items-center gap-1 transition-colors ${
            activeView === item.id ? 'text-blue-600' : 'text-slate-400 dark:text-slate-500'
          }`}
        >
          <item.icon size={24} strokeWidth={activeView === item.id ? 2.5 : 2} />
          <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

const Header = ({ title, showBack, onBack, rightElement }: { title: string, showBack?: boolean, onBack?: () => void, rightElement?: ReactNode }) => (
  <header className="sticky top-0 z-40 flex items-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-md p-4 border-b border-slate-200 dark:border-slate-800 justify-between max-w-md mx-auto w-full">
    <div className="flex items-center gap-2 flex-1">
      {showBack && (
        <button onClick={onBack} className="p-1 -ml-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
      )}
      <h2 className="text-lg font-bold tracking-tight truncate">{title}</h2>
    </div>
    {rightElement && <div className="flex items-center">{rightElement}</div>}
  </header>
);

// --- Views Placeholder ---
const HomeView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <div className="flex flex-col pb-24">
      <header className="flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20">
        <button 
          onClick={() => onNavigate('profile')}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 mr-3 active:scale-90 transition-transform cursor-pointer"
        >
          <img 
            src="https://picsum.photos/seed/user/100/100" 
            alt="Avatar" 
            className="rounded-full size-8 object-cover"
            referrerPolicy="no-referrer"
          />
        </button>
        <div className="flex-1">
          <p className="text-slate-500 dark:text-slate-400 text-[10px] font-medium uppercase tracking-wider">上午好</p>
          <h2 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight">张建国</h2>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => onNavigate('messages')} className="flex size-10 items-center justify-center rounded-full active:bg-slate-100 dark:active:bg-slate-800 relative">
            <Bell size={20} className="text-slate-600 dark:text-slate-300" />
            <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <button onClick={() => onNavigate('search')} className="flex size-10 items-center justify-center rounded-full active:bg-slate-100 dark:active:bg-slate-800">
            <SearchIcon size={20} className="text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 space-y-6">
        {/* Banner */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-sm bg-gradient-to-r from-blue-600 to-blue-400 p-5 flex flex-col justify-center text-white aspect-[21/9]">
          <div className="relative z-10">
            <h4 className="text-lg font-bold leading-tight mb-1">新用户认证享好礼</h4>
            <p className="text-xs text-white/80 mb-3 leading-relaxed">完成企业认证，即赠100份免费签署额度</p>
            <button className="bg-white text-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1 active:scale-95 transition-transform">
              立即领取 <ChevronRight size={12} />
            </button>
          </div>
          <ShieldCheck size={120} className="absolute right-[-20px] bottom-[-20px] text-white/10 rotate-12" />
        </div>

        {/* Announcement */}
        <div onClick={() => onNavigate('announcement')} className="flex items-center bg-white dark:bg-slate-800/50 rounded-xl px-3 py-2 border border-slate-100 dark:border-slate-800 cursor-pointer">
          <Bell size={18} className="text-amber-500 mr-2 shrink-0" />
          <div className="flex-1 overflow-hidden">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium truncate">
              最新系统公告：关于2024年系统维护的通知
            </p>
          </div>
          <ChevronRight size={16} className="text-slate-300 ml-2 shrink-0" />
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4">
          <button onClick={() => onNavigate('initiate-contract')} className="flex-1 flex flex-col items-center justify-center gap-2 rounded-2xl bg-blue-600 py-5 px-4 text-white shadow-lg shadow-blue-600/25 active:scale-95 transition-transform">
            <Edit3 size={32} />
            <span className="text-sm font-semibold">发起签署</span>
          </button>
          <button onClick={() => onNavigate('documents')} className="flex-1 flex flex-col items-center justify-center gap-2 rounded-2xl bg-white dark:bg-slate-800 py-5 px-4 text-slate-900 dark:text-slate-100 border border-slate-100 dark:border-slate-700 shadow-sm active:scale-95 transition-transform">
            <UploadCloud size={32} className="text-blue-600" />
            <span className="text-sm font-semibold">上传文件</span>
          </button>
        </div>

        {/* Overview Stats */}
        <div className="space-y-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">合同概览</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: '待我签署', count: '04', color: 'text-blue-600' },
              { label: '待他人签署', count: '12', color: 'text-amber-500' },
              { label: '已完成', count: '89', color: 'text-emerald-500' },
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <p className="text-slate-500 dark:text-slate-400 text-[10px] mb-1">{stat.label}</p>
                <p className={`${stat.color} text-2xl font-bold`}>{stat.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Documents */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">最近文档</h3>
            <button onClick={() => onNavigate('documents')} className="text-blue-600 text-sm font-semibold flex items-center gap-1">
              查看全部 <ChevronRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {[
              { name: '2024年软件服务协议.pdf', time: '2小时前', size: '1.2MB', status: '待他人签署', statusColor: 'bg-amber-50 text-amber-600' },
              { name: '劳动合同-技术开发岗.pdf', time: '昨天', size: '845KB', status: '待我签署', statusColor: 'bg-blue-50 text-blue-600' },
              { name: '全球技术合作NDA保密协议.pdf', time: '3天前', size: '2.1MB', status: '已完成', statusColor: 'bg-emerald-50 text-emerald-600' },
            ].map((doc, i) => (
              <div key={i} onClick={() => onNavigate('contract-details')} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm cursor-pointer active:bg-slate-50 transition-colors">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                  <FileText size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold truncate">{doc.name}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-[11px] mt-0.5">{doc.time} · {doc.size}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold ${doc.statusColor}`}>
                    {doc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
const DocumentsView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  const [isFabOpen, setIsFabOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <header className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold tracking-tight">文档</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
            <Bell size={24} />
            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <img 
            src="https://picsum.photos/seed/user/100/100" 
            alt="Avatar" 
            className="size-8 rounded-full object-cover border border-slate-200 dark:border-slate-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <div className="px-4 py-3 bg-white dark:bg-slate-900">
        <div className="relative flex items-center">
          <SearchIcon size={18} className="absolute left-3 text-slate-400" />
          <input 
            className="w-full rounded-xl border-none bg-slate-100 dark:bg-slate-800 py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20" 
            placeholder="搜索文档和文件夹" 
            type="text" 
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4">
        <div className="flex gap-8">
          {['全部', '文件夹', '最近', '共享'].map((tab, i) => (
            <button key={tab} className={`pb-3 pt-2 text-sm font-medium relative ${i === 1 ? 'text-blue-600 font-bold' : 'text-slate-500'}`}>
              {tab}
              {i === 1 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 px-4 py-4 space-y-6 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-400">我的文件夹</h2>
            <button className="text-xs font-bold text-blue-600">查看全部</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: '销售合同', count: 24, size: '1.2 GB', color: 'text-amber-500', bg: 'bg-amber-50' },
              { name: '人力资源', count: 12, size: '450 MB', color: 'text-blue-500', bg: 'bg-blue-50' },
              { name: '法律审核', count: 8, size: '89 MB', color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { name: '未分类', count: 45, size: '3.1 GB', color: 'text-slate-400', bg: 'bg-slate-50' },
            ].map((folder, i) => (
              <div key={i} className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-transform">
                <div className="mb-3 flex items-center justify-between">
                  <div className={`${folder.color}`}>
                    <Folder size={32} fill="currentColor" fillOpacity={0.2} />
                  </div>
                  <button className="p-1 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full">
                    <MoreHorizontal size={20} className="text-slate-300" />
                  </button>
                </div>
                <p className="font-bold text-slate-800 dark:text-slate-100">{folder.name}</p>
                <p className="mt-1 text-[10px] text-slate-400 font-medium">{folder.count} 个项目 • {folder.size}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-400">最近文件</h2>
          <div className="space-y-3">
            {[
              { name: '租赁协议_V2.pdf', time: '2小时前', size: '2.4 MB', type: 'pdf' },
              { name: '员工合同_小王.docx', time: '5小时前', size: '840 KB', type: 'docx' },
            ].map((file, i) => (
              <div key={i} onClick={() => onNavigate('contract-details')} className="flex items-center gap-4 rounded-2xl bg-white dark:bg-slate-900 p-3 shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer active:bg-slate-50 transition-colors">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${file.type === 'pdf' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                  <FileText size={24} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate font-bold text-sm text-slate-800 dark:text-slate-100">{file.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{file.time}修改 • {file.size}</p>
                </div>
                <button className="p-1 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full">
                  <MoreHorizontal size={20} className="text-slate-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FAB and Upload Menu */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isFabOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="flex flex-col items-end gap-3 mb-2"
            >
              {[
                { label: '微信导入', icon: MessageSquare, color: 'bg-emerald-500', view: null },
                { label: '手机相册', icon: ImageIcon, color: 'bg-purple-500', view: null },
                { label: '本地文件', icon: FileUp, color: 'bg-amber-500', view: 'property-details' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded-lg shadow-lg">
                    {item.label}
                  </span>
                  <button 
                    onClick={() => item.view && onNavigate(item.view as View)}
                    className={`size-12 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer`}
                  >
                    <item.icon size={20} />
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setIsFabOpen(!isFabOpen)}
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl active:scale-90 transition-all duration-300 ${isFabOpen ? 'rotate-45' : ''}`}
        >
          <Plus size={32} />
        </button>
      </div>
    </div>
  );
};
const SealsView = () => {
  return (
    <div className="flex flex-col pb-24">
      <Header title="印章签名库" rightElement={<SearchIcon size={20} />} />
      <nav className="bg-white dark:bg-slate-950 sticky top-[57px] z-10">
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 justify-between">
          <button className="flex flex-col items-center justify-center border-b-2 border-blue-600 text-blue-600 pb-3 pt-4 flex-1 font-bold text-sm">个人</button>
          <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 pb-3 pt-4 flex-1 font-bold text-sm">企业</button>
        </div>
      </nav>
      <main className="flex-1 p-4 space-y-8 overflow-y-auto">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">手写签名</h3>
            <button className="text-blue-600 text-sm font-semibold">编辑</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: '默认签名', date: '5月12日', img: 'https://picsum.photos/seed/sig1/200/100' },
              { name: '姓名缩写', date: '1月20日', img: 'https://picsum.photos/seed/sig2/200/100' },
            ].map((sig, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col">
                <div className="aspect-[16/9] flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
                  <img src={sig.img} alt={sig.name} className="max-w-full max-h-full object-contain mix-blend-multiply dark:invert" referrerPolicy="no-referrer" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">{sig.name}</p>
                  <p className="text-slate-500 text-[10px] mt-1">更新于 {sig.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">企业公章</h3>
            <button className="text-blue-600 text-sm font-semibold">管理</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col">
              <div className="aspect-square flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
                <div className="size-24 rounded-full border-4 border-red-600 flex items-center justify-center text-red-600 font-bold text-center text-[10px] leading-tight p-2">
                  上海签易签<br/>网络科技有限公司<br/>(1)
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium">正式公章</p>
                <p className="text-slate-500 text-[10px] mt-1">电子印章</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden flex flex-col cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="aspect-square flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
                <div className="size-24 border-2 border-blue-600/40 rounded-full flex items-center justify-center bg-blue-600/5">
                  <Plus size={36} className="text-blue-600/40" />
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium">添加印章</p>
                <p className="text-slate-500 text-[10px] mt-1">自动生成</p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
          <div className="flex gap-3">
            <ShieldCheck size={20} className="text-blue-600 shrink-0" />
            <div>
              <p className="text-sm font-bold">加密安全保障</p>
              <p className="text-slate-600 dark:text-slate-400 text-[10px] mt-1 leading-relaxed">您的签章经过金融级加密存储，仅在您授权的文档中进行调用。</p>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-24 right-6 flex flex-col items-end gap-3 z-30">
        <button className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 active:scale-95 transition-transform">
          <Plus size={20} />
          <span className="text-sm font-bold">添加新签章</span>
        </button>
      </div>
    </div>
  );
};
const ProfileView = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <div className="flex flex-col pb-24">
      <Header title="个人中心" rightElement={<button onClick={() => onNavigate('security-settings')}><Settings size={20} /></button>} />
      
      <main className="flex-1 space-y-2">
        {/* User Info */}
        <div className="bg-white dark:bg-slate-900 p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600/10 rounded-full p-1 border-2 border-blue-600/20">
              <img src="https://picsum.photos/seed/user/200/200" alt="Avatar" className="size-20 rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">微信昵称</p>
              <p className="text-slate-500 text-sm">138****8888</p>
            </div>
          </div>
          <div onClick={() => onNavigate('identity-auth')} className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800 cursor-pointer">
            <div className="flex items-center gap-3">
              <BadgeCheck size={20} className="text-blue-600" />
              <span className="font-medium text-sm">实名认证状态</span>
            </div>
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md shadow-blue-600/20">
              已实名
            </span>
          </div>
        </div>

        {/* Menu Sections */}
        {[
          {
            title: '账户与安全',
            items: [
              { label: '实名认证', icon: BadgeCheck, view: 'identity-auth' },
              { label: '安全设置', icon: ShieldCheck, view: 'security-settings' },
            ]
          },
          {
            title: '通用设置',
            items: [
              { label: '消息通知', icon: Bell, view: 'messages' },
              { label: '隐私设置', icon: Lock },
              { label: '清除缓存', icon: Trash2, extra: '24.5MB' },
            ]
          },
          {
            title: '帮助与反馈',
            items: [
              { label: '常见问题', icon: HelpCircle },
              { label: '联系客服', icon: Smartphone },
              { label: '意见反馈', icon: MessageSquare },
            ]
          }
        ].map((section, i) => (
          <div key={i} className="px-4">
            <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider px-2 py-3">{section.title}</h3>
            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
              {section.items.map((item, j) => (
                <button 
                  key={j} 
                  onClick={() => item.view && onNavigate(item.view as View)}
                  className={`w-full flex items-center gap-4 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${j !== section.items.length - 1 ? 'border-b border-slate-50 dark:border-slate-800' : ''}`}
                >
                  <div className="bg-blue-600/10 p-2 rounded-lg text-blue-600">
                    <item.icon size={20} />
                  </div>
                  <p className="flex-1 text-left font-medium text-sm">{item.label}</p>
                  {item.extra && <span className="text-xs text-slate-400">{item.extra}</span>}
                  <ChevronRight size={18} className="text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="py-8 text-center space-y-1">
          <p className="text-slate-400 text-[10px]">签易签 v2.4.0</p>
          <p className="text-slate-300 dark:text-slate-600 text-[8px]">Copyright © 2024 All Rights Reserved</p>
        </div>
      </main>
    </div>
  );
};
const ContractDetailsView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="flex flex-col pb-24">
      <Header title="合同详情与存证" showBack onBack={onBack} rightElement={<Share2 size={20} />} />
      <main className="p-4 space-y-6 overflow-y-auto">
        {/* Status Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-2.5 rounded-xl">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">已完成签署</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs">所有参与方均已签署</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 dark:text-slate-400">文档 ID</span>
              <span className="font-mono text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">CNTR-20231024-0089</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 dark:text-slate-400">创建时间</span>
              <span className="font-medium">2023年10月24日 14:20</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 dark:text-slate-400">文件大小</span>
              <span className="font-medium">1.2 MB</span>
            </div>
            <div className="flex justify-between items-center text-sm pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400">区块链存证哈希</span>
              <span className="font-mono text-[10px] text-blue-600 truncate max-w-[180px]">0x71C765BF...D6448</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid gap-3">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
            <Download size={20} /> 下载 PDF
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold py-3 rounded-xl text-sm active:bg-slate-50">
              <History size={18} className="text-blue-600" /> 区块链存证
            </button>
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold py-3 rounded-xl text-sm active:bg-slate-50">
              <FileText size={18} className="text-blue-600" /> 出证报告
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold px-1">签署日志与证据</h2>
          <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {[
              { title: '文档最终封存', time: '2023-10-26 • 09:12 AM', details: '合同已锁定，并对所有页面应用了加密封章。已生成数字签名包。', system: true },
              { title: '签署人：陈晓明 (Michael Chen)', time: '2023-10-26 • 09:11 AM', ip: '192.168.1.44', loc: '中国 广东省 深圳市', dev: 'iPhone 15 Pro, iOS 17.1', hash: '8f9e15f2...a2b3c4d' },
              { title: '签署人：李美华 (Sarah Li)', time: '2023-10-25 • 11:45 PM', ip: '172.16.254.1', loc: '中国 北京市 朝阳区', dev: 'MacBook Pro, macOS 14.0', hash: 'd3f7e1b...99a12c' },
              { title: '文档已创建', time: '2023-10-24 • 02:20 PM', last: true },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-8 mt-1.5 size-4 rounded-full border-4 border-white dark:border-slate-950 ring-1 ${item.last ? 'bg-slate-300 dark:bg-slate-700 ring-slate-200' : 'bg-blue-600 ring-blue-600/30'}`}></div>
                <div className="space-y-1">
                  <p className={`text-sm font-bold ${item.last ? 'text-slate-500' : ''}`}>{item.title}</p>
                  <p className="text-[10px] text-slate-400">{item.time}</p>
                  {item.details && (
                    <div className="mt-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-[10px] leading-relaxed">
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400 uppercase font-bold tracking-wider">系统操作</span>
                        <span className="text-emerald-500 font-bold uppercase tracking-wider">已核验</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400">{item.details}</p>
                    </div>
                  )}
                  {item.ip && (
                    <div className="mt-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-[10px] leading-relaxed space-y-1">
                      <p><span className="text-slate-400">IP 地址:</span> {item.ip}</p>
                      <p><span className="text-slate-400">位置:</span> {item.loc}</p>
                      <p className="truncate"><span className="text-slate-400">设备:</span> {item.dev}</p>
                      <p className="truncate text-blue-600 mt-1 font-mono"><span className="text-slate-400">哈希值:</span> {item.hash}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
const IdentityAuthView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <Header title="身份认证中心" showBack onBack={onBack} />
      
      <div className="bg-white dark:bg-slate-900 py-8 px-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center w-full max-w-xs justify-between relative mx-auto">
          <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 z-0"></div>
          <div className="absolute top-4 left-0 w-1/4 h-0.5 bg-blue-600 z-0"></div>
          {[
            { step: 1, label: '选择类型', active: true },
            { step: 2, label: '信息填写' },
            { step: 3, label: '完成认证' },
          ].map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${s.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white dark:bg-slate-800 text-slate-400 border-2 border-slate-100 dark:border-slate-700'}`}>
                {s.step}
              </div>
              <span className={`text-[10px] font-bold ${s.active ? 'text-blue-600' : 'text-slate-400'}`}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="flex-1 px-4 py-8 space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold">请选择认证方式</h3>
          <p className="text-slate-500 text-xs leading-relaxed px-6">为了确保您的电子签名具备法律效力，请完成实名认证。您的数据将受到银行级安全保护。</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              <h4 className="font-bold text-sm">个人认证</h4>
            </div>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-transparent shadow-sm hover:border-blue-600/30 active:scale-[0.98] transition-all text-left">
              <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                <User size={24} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">人脸识别认证</p>
                <p className="text-[10px] text-slate-500 mt-0.5">活体检测，安全性高</p>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-4 bg-orange-500 rounded-full"></div>
              <h4 className="font-bold text-sm">企业认证</h4>
            </div>
            <div className="grid gap-3">
              {[
                { label: '统一社会信用代码', sub: '通过营业执照信息快速验证', icon: FileText, color: 'text-orange-600', bg: 'bg-orange-50' },
                { label: '法人授权认证', sub: '企业法定代表人身份确认', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50' },
                { label: '对公打款认证', sub: '通过企业对公账户小额打款验证', icon: Smartphone, color: 'text-blue-600', bg: 'bg-blue-50' },
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-transparent shadow-sm hover:border-blue-600/30 active:scale-[0.98] transition-all text-left">
                  <div className={`size-12 rounded-xl ${item.bg} dark:bg-slate-800 flex items-center justify-center ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">{item.label}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{item.sub}</p>
                  </div>
                  <ChevronRight size={20} className="text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 opacity-50 py-8">
          <div className="flex items-center gap-1.5 text-slate-600">
            <Lock size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">全流程金融级安全加密</span>
          </div>
          <p className="text-[10px] text-center px-12 leading-relaxed">您的身份信息仅用于合规认证，系统不会向任何第三方泄露您的隐私数据。</p>
        </div>
      </main>
    </div>
  );
};

const MessagesView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
    <Header title="消息通知" showBack onBack={onBack} />
    <main className="p-4 space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between mb-1">
            <span className="font-bold text-sm">系统通知</span>
            <span className="text-[10px] text-slate-400">2024-05-10</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">您的合同《2024年软件服务协议.pdf》已被对方签署成功。</p>
        </div>
      ))}
    </main>
  </div>
);

const SearchView = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (v: View) => void }) => {
  const historyTags = ['采购合同', '入职申请', 'NDA协议'];
  const quickFunctions = [
    { label: '发起签署', icon: Edit3, color: 'text-blue-600', bg: 'bg-blue-50', view: 'initiate-contract' },
    { label: '合同管理', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', view: 'documents' },
    { label: '印章库', icon: Stamp, color: 'text-blue-600', bg: 'bg-blue-50', view: 'seals' },
    { label: '实名认证', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50', view: 'identity-auth' },
    { label: '公告通知', icon: Bell, color: 'text-blue-600', bg: 'bg-blue-50', view: 'announcement' },
    { label: '个人中心', icon: User, color: 'text-blue-600', bg: 'bg-blue-50', view: 'profile' },
  ];
  const recentDocs = [
    { name: '2024年软件服务协议.pdf', time: '2024-05-12 14:30', type: 'pdf' },
    { name: '市场推广授权书_草稿.docx', time: '2024-05-10 09:15', type: 'docx' },
    { name: '房屋租赁合同_最终版.pdf', time: '2024-04-28 17:45', type: 'pdf' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <header className="p-4 flex items-center gap-3 bg-white dark:bg-slate-900 sticky top-0 z-20">
        <button onClick={onBack} className="p-1 -ml-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold tracking-tight">搜索</h2>
      </header>

      <main className="flex-1 px-4 py-2 space-y-8">
        {/* Search Input */}
        <div className="relative flex items-center">
          <SearchIcon size={20} className="absolute left-4 text-slate-400" />
          <input 
            autoFocus 
            className="w-full bg-white dark:bg-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm shadow-sm border border-slate-100 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500/20" 
            placeholder="搜索文档、功能或文件夹" 
          />
        </div>

        {/* Search History */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-bold">搜索历史</h3>
            <button className="text-slate-400 hover:text-red-500 transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {historyTags.map(tag => (
              <button key={tag} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-xs font-medium border border-slate-100 dark:border-slate-800 shadow-sm active:scale-95 transition-transform">
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Functions */}
        <div className="space-y-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold px-1">功能快捷查找</h3>
          <div className="grid grid-cols-3 gap-3">
            {quickFunctions.map((func, i) => (
              <button 
                key={i} 
                onClick={() => func.view && onNavigate(func.view as View)}
                className="flex flex-col items-center justify-center gap-3 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm active:scale-95 transition-transform"
              >
                <div className={`size-12 rounded-xl ${func.bg} dark:bg-blue-900/20 flex items-center justify-center ${func.color}`}>
                  <func.icon size={24} />
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{func.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search by Document Name */}
        <div className="space-y-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold px-1">按文档名称查找</h3>
          <div className="space-y-3">
            {recentDocs.map((doc, i) => (
              <div key={i} onClick={() => onNavigate('contract-details')} className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm cursor-pointer active:bg-slate-50 transition-colors">
                <div className={`size-12 shrink-0 flex items-center justify-center rounded-xl ${doc.type === 'pdf' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                  <FileText size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-bold truncate">{doc.name}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-[10px] mt-1">更新于 {doc.time}</p>
                </div>
                <ChevronRight size={20} className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const AnnouncementView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
    <Header title="系统公告" showBack onBack={onBack} />
    <main className="p-6 bg-white dark:bg-slate-900 m-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <h3 className="font-bold text-lg mb-2">关于2024年系统维护的通知</h3>
      <p className="text-[10px] text-slate-400 mb-6">发布日期：2024-01-15</p>
      <div className="text-sm text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
        <p>尊敬的用户：</p>
        <p>为了提供更优质的服务，我们将于2024年5月20日凌晨2:00-4:00进行系统例行维护。</p>
        <p>维护期间，签署功能可能会出现短暂延迟。请您提前做好工作安排。</p>
        <p>感谢您的理解与支持！</p>
      </div>
    </main>
  </div>
);

const InitiateContractView = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (v: View) => void }) => (
  <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
    <Header title="发起签署" showBack onBack={onBack} />
    <main className="p-4 space-y-6">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center space-y-4">
        <div className="size-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mx-auto">
          <UploadCloud size={40} />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-lg">上传待签署文档</h3>
          <p className="text-xs text-slate-400">支持 PDF, Word, JPG 等格式</p>
        </div>
        <button onClick={() => onNavigate('contract-setup')} className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl active:scale-95 transition-transform">
          选择文件
        </button>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider px-1">常用模板</h4>
        <div className="grid grid-cols-2 gap-3">
          {['劳动合同', '保密协议', '销售合同', '租房协议'].map(t => (
            <button key={t} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm text-left active:bg-slate-50">
              <FileText size={24} className="text-blue-600 mb-2" />
              <p className="text-sm font-bold">{t}</p>
            </button>
          ))}
        </div>
      </div>
    </main>
  </div>
);

const PropertyDetailsView = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (v: View) => void }) => (
  <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 pb-24">
    <Header title="房源详情" showBack onBack={onBack} />
    <main className="flex-1 overflow-y-auto">
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">锦鲤花园 9楼 98平</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            3房2厅1卫 品牌家电家具，全套整木装修，全屋智能化，有地暖，中央空调，装修50万，报价128.8万
          </p>
          <p className="text-sm font-semibold text-blue-600">看中再谈</p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
          <img 
            src="https://picsum.photos/seed/interior/1200/900" 
            alt="Property Interior" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="pt-6 pb-12">
          <button 
            onClick={() => onNavigate('contract-setup')}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
          >
            确认并签署合同
          </button>
        </div>
      </div>
    </main>
  </div>
);

const ContractSetupView = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (v: View) => void }) => {
  const [isSequential, setIsSequential] = useState(true);
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <header className="p-4 flex items-center justify-between bg-white dark:bg-slate-900 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 -ml-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-lg font-bold tracking-tight">发起新合同签署</h2>
        </div>
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </header>

      <main className="flex-1 p-4 space-y-6">
        {/* Document Preview */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">文档预览</h3>
            <button 
              onClick={() => onNavigate('signing-editor')}
              className="text-blue-600 text-sm font-bold active:scale-95 transition-transform"
            >
              编辑
            </button>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
            <div className="flex-1 space-y-4">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">技术服务协议_V2.pdf</h4>
                <p className="text-xs text-slate-400">1.2 MB • 2分钟前更新</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl text-xs font-bold active:scale-95 transition-transform">
                <UploadCloud size={16} />
                更换文件
              </button>
            </div>
            <div className="size-24 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner p-2">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded shadow-sm flex items-center justify-center">
                <FileText size={32} className="text-slate-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Sequential Signing */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">顺序签署</h3>
            <p className="text-[10px] text-slate-400 leading-tight">签署人将按照列表顺序依次收到签署通知</p>
          </div>
          <button 
            onClick={() => setIsSequential(!isSequential)}
            className={`w-12 h-6 rounded-full transition-colors relative ${isSequential ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}
          >
            <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${isSequential ? 'left-7' : 'left-1'}`} />
          </button>
        </div>

        {/* Signer List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">签署人列表</h3>
            <button className="flex items-center gap-1 text-blue-600 text-sm font-bold">
              <UserPlus size={16} />
              添加
            </button>
          </div>
          <div className="space-y-3">
            {[
              { name: '张益达 (我)', email: 'zhang.yida@enterprise.com', tag: '甲方', color: 'bg-blue-600', num: 1 },
              { name: '李思思', email: 's.li@client.com', tag: '乙方', color: 'bg-slate-400', num: 2 },
            ].map((signer, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={`https://picsum.photos/seed/signer${i}/100/100`} 
                    alt={signer.name} 
                    className="size-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute -bottom-1 -right-1 size-5 ${signer.color} text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900`}>
                    {signer.num}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{signer.name}</h4>
                  <p className="text-xs text-slate-400 truncate">{signer.email}</p>
                </div>
                <div className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded text-[10px] font-bold">
                  {signer.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signing Note */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 px-1">签署附言</h3>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <textarea 
              className="w-full bg-transparent text-sm text-slate-600 dark:text-slate-300 outline-none resize-none min-h-[80px]"
              placeholder="请审阅并签署此协议..."
            />
          </div>
        </div>
      </main>

      <div className="fixed bottom-[72px] left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 z-30">
        <div className="max-w-md mx-auto space-y-2">
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <span>设置签署区</span>
            <Edit3 size={20} />
          </button>
          <p className="text-center text-[10px] text-slate-400">下一步：放置签名及盖章字段</p>
        </div>
      </div>
    </div>
  );
};

const SigningEditorView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-20">
        <button onClick={onBack} className="p-1 -ml-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-tight">软件服务协议_v2.pdf</h2>
          <p className="text-[10px] text-slate-400">第 1 页 / 共 4 页</p>
        </div>
        <button className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-600/20 active:scale-95 transition-transform">
          完成签署
        </button>
      </header>

      {/* Document Content */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col items-center">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-xl rounded-sm aspect-[1/1.414] p-8 relative">
          {/* Mock Document Text Lines */}
          <div className="space-y-4">
            <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded w-1/3 mb-8" />
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded w-full" />
            ))}
            <div className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded w-2/3" />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase">甲方（盖章/签名）</p>
              <div className="aspect-video border-2 border-dashed border-blue-200 dark:border-blue-900/50 rounded-lg flex items-center justify-center bg-blue-50/30 dark:bg-blue-900/10">
                <Edit3 size={32} className="text-blue-300 dark:text-blue-800" />
              </div>
            </div>
            <div className="space-y-4 relative">
              <p className="text-[10px] font-bold text-slate-400 uppercase">乙方（盖章/签名）</p>
              <div className="aspect-video border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 relative">
                <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-white">
                  <Plus size={24} />
                </div>
                {/* Mock Signature Overlay */}
                <div className="absolute -top-6 -left-2 right-0 bottom-0 bg-blue-50/80 dark:bg-blue-900/40 border border-blue-400 rounded-lg p-2 flex items-center justify-center shadow-lg">
                   <img src="https://picsum.photos/seed/sig/100/50" className="mix-blend-multiply dark:invert" alt="Signature" referrerPolicy="no-referrer" />
                   <button className="absolute -top-2 -right-2 size-5 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
                     <X size={12} />
                   </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-2">
            <div className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded w-1/2" />
            <div className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded w-1/3" />
          </div>
        </div>

        {/* Floating Tip */}
        <div className="mt-6 bg-slate-800/90 backdrop-blur text-white px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-medium shadow-xl">
          <div className="size-5 bg-white/20 rounded flex items-center justify-center">
            <Plus size={12} className="rotate-45" />
          </div>
          长按或拖拽工具到文档中签署
        </div>
      </main>

      {/* Bottom Toolbar */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-4 pb-24">
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {[
            { label: '我的签名', icon: Edit3 },
            { label: '企业公章', icon: Stamp },
            { label: '日期', icon: Calendar },
            { label: '文本框', icon: Type },
          ].map((tool, i) => (
            <button key={i} className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
              <div className="size-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm">
                <tool.icon size={24} />
              </div>
              <span className="text-[10px] font-bold text-slate-500">{tool.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SecuritySettingsView = ({ onBack }: { onBack: () => void }) => (
  <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
    <Header title="安全设置" showBack onBack={onBack} />
    <main className="p-4 space-y-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
        {[
          { label: '修改登录密码', extra: '定期修改更安全' },
          { label: '手势密码', extra: '未开启' },
          { label: '指纹/面容识别', extra: '已开启' },
          { label: '注销账号', extra: '', danger: true },
        ].map((item, i) => (
          <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 border-b border-slate-50 dark:border-slate-800 last:border-0">
            <div className="text-left">
              <p className={`text-sm font-medium ${item.danger ? 'text-red-500' : ''}`}>{item.label}</p>
              {item.extra && <p className="text-[10px] text-slate-400">{item.extra}</p>}
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
        ))}
      </div>
    </main>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeView, setActiveView] = useState<View>('home');
  const [history, setHistory] = useState<View[]>(['home']);

  const navigate = (view: View) => {
    setHistory(prev => [...prev, view]);
    setActiveView(view);
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setActiveView(newHistory[newHistory.length - 1]);
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'home': return <HomeView onNavigate={navigate} />;
      case 'documents': return <DocumentsView onNavigate={navigate} />;
      case 'seals': return <SealsView />;
      case 'profile': return <ProfileView onNavigate={navigate} />;
      case 'contract-details': return <ContractDetailsView onBack={back} />;
      case 'identity-auth': return <IdentityAuthView onBack={back} />;
      case 'messages': return <MessagesView onBack={back} />;
      case 'search': return <SearchView onBack={back} onNavigate={navigate} />;
      case 'announcement': return <AnnouncementView onBack={back} />;
      case 'security-settings': return <SecuritySettingsView onBack={back} />;
      case 'initiate-contract': return <InitiateContractView onBack={back} onNavigate={navigate} />;
      case 'property-details': return <PropertyDetailsView onBack={back} onNavigate={navigate} />;
      case 'contract-setup': return <ContractSetupView onBack={back} onNavigate={navigate} />;
      case 'signing-editor': return <SigningEditorView onBack={back} />;
      default: return <HomeView onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-display selection:bg-blue-100 selection:text-blue-600">
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 min-h-screen shadow-2xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="min-h-screen"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
        
        <BottomNav activeView={activeView} onViewChange={navigate} />
      </div>
    </div>
  );
}
