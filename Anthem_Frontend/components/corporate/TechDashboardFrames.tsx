"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, CheckCircle2, ShieldCheck, Database, 
  Layers, Cpu, Server, Users, Activity, Eye, AlertCircle
} from "lucide-react"

// ==========================================
// 1. SCANNING & DIGITISATION DASHBOARD FRAME
// ==========================================
export function ScanningDashboardFrame() {
  const [pageCount, setPageCount] = useState(500000000)
  const [scannedFiles, setScannedFiles] = useState([
    { id: 1, name: "Court_Record_1830_Ganjam.pdf", size: "4.8 MB", status: "Processed", speed: "120 ppm" },
    { id: 2, name: "Land_Deed_Odisha_Sect_2.tiff", size: "12.4 MB", status: "Processed", speed: "95 ppm" },
    { id: 3, name: "Judicial_Brief_WP_C_1204.pdf", size: "3.2 MB", status: "Processing", speed: "140 ppm" },
  ])

  useEffect(() => {
    // Ticking digitisation counter - ticks up every 250ms by a random number of sheets
    const interval = setInterval(() => {
      setPageCount(prev => prev + Math.floor(Math.random() * 4) + 1)
      
      // Update scanned files list to make it look active
      setScannedFiles(prev => {
        const next = [...prev]
        const processingIdx = next.findIndex(f => f.status === "Processing")
        if (processingIdx !== -1) {
          next[processingIdx] = { ...next[processingIdx], status: "Processed" }
          // Add a new file at the top and remove the last one
          const fileNames = [
            "Railway_EOffice_Invoice_98.pdf", 
            "HighCourt_CivilBrief_2026.pdf",
            "Puri_LandRecords_Deed_A.tiff",
            "SchoolEducation_CBT_Result.csv"
          ]
          const randomName = fileNames[Math.floor(Math.random() * fileNames.length)]
          const randomSize = (Math.random() * 10 + 1).toFixed(1) + " MB"
          const randomSpeed = Math.floor(Math.random() * 60 + 80) + " ppm"
          
          return [
            { id: Date.now(), name: randomName, size: randomSize, status: "Processing", speed: randomSpeed },
            next[0],
            next[1]
          ]
        }
        return prev
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-6 font-mono text-xs text-slate-300 shadow-2xl">
      {/* Decorative top bar */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <span className="ml-2 font-sans text-xs font-semibold text-slate-400">HIGH-SPEED SCANNING MONITOR v4.2</span>
        </div>
        <div className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-emerald-400 animate-pulse">
          OCR LIVE
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left Side: Laser scanning grid simulation */}
        <div className="relative flex h-48 flex-col items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 p-4 overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:14px_24px] opacity-40" />
          
          {/* Floating document template */}
          <div className="relative z-10 w-36 h-28 rounded border border-cyan-500/50 bg-cyan-950/20 p-2 shadow-lg flex flex-col justify-between">
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-cyan-500/40 rounded" />
              <div className="h-1.5 w-4/5 bg-cyan-500/30 rounded" />
              <div className="h-1.5 w-5/6 bg-cyan-500/20 rounded" />
              <div className="h-1.5 w-2/3 bg-cyan-500/30 rounded" />
            </div>
            <div className="flex justify-between items-center text-[8px] text-cyan-400 font-bold">
              <span>INDEX: SECURE</span>
              <span>100% OCR</span>
            </div>
          </div>

          {/* Laser Scanning Line */}
          <motion.div 
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee] z-20"
            animate={{
              top: ["5%", "95%", "5%"]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Glowing scanner flash overlays */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-cyan-500/5 blur-md pointer-events-none" />
        </div>

        {/* Right Side: Ticking stats & file list */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="rounded-lg bg-slate-900 p-4 border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Total Pages Digitised</span>
            <div className="mt-1 flex items-baseline gap-1 text-2xl font-black text-white font-sans tracking-tight">
              {pageCount.toLocaleString()}
              <span className="text-xs font-normal text-slate-400 block font-mono">pages</span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-slate-400">
              <Activity className="size-3.5 text-cyan-400 animate-pulse" />
              <span>Scanning velocity: <strong className="text-white">12,500 ppm</strong></span>
            </div>
          </div>

          {/* Scanned files table */}
          <div className="space-y-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Live Processing pipeline</span>
            <div className="space-y-1.5 max-h-24 overflow-hidden">
              <AnimatePresence initial={false}>
                {scannedFiles.map((file) => (
                  <motion.div 
                    key={file.id} 
                    className="flex justify-between items-center rounded border border-slate-800 bg-slate-900/40 p-2 font-mono"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-1.5 truncate max-w-[65%]">
                      {file.status === "Processing" ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                      ) : (
                        <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
                      )}
                      <span className="truncate text-slate-300">{file.name}</span>
                    </div>
                    <div className="flex gap-2 text-[10px] text-slate-400 shrink-0 font-bold">
                      <span>{file.speed}</span>
                      <span className={file.status === "Processing" ? "text-cyan-400" : "text-emerald-400"}>
                        {file.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// 2. JUDICIARY COURT MONITOR FRAME
// ==========================================
export function JudiciaryCourtFrame() {
  const [activeStep, setActiveStep] = useState(0)
  const steps = [
    { title: "Secure OCR Scanning", status: "Completed" },
    { title: "Metadata Tagging & Index", status: "Completed" },
    { title: "Encrypted PDF Packaging", status: "Active" },
    { title: "Digital Seal Verification", status: "Pending" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-6 font-mono text-xs text-slate-300 shadow-2xl">
      {/* Decorative top bar */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <LandmarkIcon className="size-4 text-amber-500" />
          <span className="font-sans text-xs font-semibold text-slate-400">PAPERLESS COURT E-REGISTRY</span>
        </div>
        <div className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-amber-400">
          SECURE TRANSCRIPT
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left: Active Hearing Schedule Console */}
        <div className="flex flex-col gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">ORISSA HIGH COURT ACTIVE REGISTRATIONS</span>
          
          <div className="space-y-2">
            <div className="rounded border border-slate-800 bg-slate-900/90 p-2.5 shadow-sm">
              <div className="flex justify-between items-center text-slate-400 text-[10px] mb-1">
                <span>COURTROOM NO. 1</span>
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              </div>
              <p className="text-white font-sans font-bold text-sm truncate">Case WP(C) No. 1204 / 2026</p>
              <div className="flex justify-between mt-1 text-[10px] text-slate-400">
                <span>Digitised File: <strong className="text-amber-400 font-mono">Part_A_Vol_I.pdf</strong></span>
                <span>Active</span>
              </div>
            </div>

            <div className="rounded border border-slate-800/40 bg-slate-900/30 p-2.5">
              <div className="flex justify-between items-center text-slate-500 text-[10px] mb-1">
                <span>COURTROOM NO. 3</span>
                <span className="h-2 w-2 rounded-full bg-slate-600" />
              </div>
              <p className="text-slate-400 font-sans font-bold text-sm truncate">Case D-Filing No. 3409 / 2026</p>
              <div className="flex justify-between mt-1 text-[10px] text-slate-500">
                <span>State: <strong className="text-slate-400">E-Signed / Verified</strong></span>
                <span>Queued</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive workflow sealing */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">SECURE PACKAGING SEQUENCE</span>
            
            <div className="space-y-1.5">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center rounded border p-2 ${
                    activeStep === idx 
                      ? "border-amber-500/50 bg-amber-500/10 text-white font-bold" 
                      : idx < activeStep 
                        ? "border-slate-800 bg-slate-900/30 text-slate-400" 
                        : "border-slate-900/60 bg-transparent text-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] flex items-center justify-center rounded-full size-4 ${
                      activeStep === idx 
                        ? "bg-amber-500 text-slate-950 font-bold" 
                        : idx < activeStep 
                          ? "bg-slate-800 text-slate-400" 
                          : "bg-slate-900 text-slate-600"
                    }`}>
                      {idx + 1}
                    </span>
                    <span>{step.title}</span>
                  </div>
                  
                  <span className="text-[9px] uppercase tracking-wider font-bold">
                    {activeStep === idx ? "Processing..." : idx < activeStep ? "SECURE" : "PENDING"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Sealing Pulse */}
          <div className="flex items-center gap-3 rounded bg-slate-900 border border-slate-800 p-3">
            <div className="relative shrink-0 flex items-center justify-center size-10">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 animate-ping" />
              <div className="absolute inset-1.5 rounded-full border border-amber-500/40 animate-pulse" />
              <ShieldCheck className="size-5 text-amber-500 relative z-10" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase text-slate-500 tracking-wider">HSM SECURITY ENVELOPE</span>
              <p className="text-white font-bold font-sans">ANTHEM DIGITAL SEAL OK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <line x1="2" y1="22" x2="22" y2="22" />
      <line x1="4" y1="11" x2="20" y2="11" />
      <path d="m12 2-8 6h16l-8-6Z" />
      <path d="M6 11v11" />
      <path d="M10 11v11" />
      <path d="M14 11v11" />
      <path d="M18 11v11" />
    </svg>
  )
}

// ==========================================
// 3. ADVANCED BLOCKCHAIN LEDGER FRAME
// ==========================================
export function BlockchainLedgerFrame() {
  const [blocks, setBlocks] = useState([
    { number: 10842, hash: "0x8a92f03...c8a", time: "2s ago", txCount: 12 },
    { number: 10841, hash: "0x7c1b3f9...fa2", time: "8s ago", txCount: 8 },
    { number: 10840, hash: "0x4d5e2a6...db4", time: "14s ago", txCount: 15 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks(prev => {
        const nextBlockNum = prev[0].number + 1
        const charPool = "0123456789abcdef"
        let randomHash = "0x"
        for (let i = 0; i < 7; i++) randomHash += charPool[Math.floor(Math.random() * 16)]
        randomHash += "...df"
        const nextBlock = {
          number: nextBlockNum,
          hash: randomHash,
          time: "Just now",
          txCount: Math.floor(Math.random() * 15) + 3
        }
        // Shift times in old blocks
        const shiftedPrev = prev.map((b, idx) => ({
          ...b,
          time: idx === 0 ? "6s ago" : idx === 1 ? "12s ago" : "18s ago"
        }))
        return [nextBlock, shiftedPrev[0], shiftedPrev[1]]
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-6 font-mono text-xs text-slate-300 shadow-2xl">
      {/* Decorative top bar */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="size-4 text-indigo-400" />
          <span className="font-sans text-xs font-semibold text-slate-400">ANTHEM LEDGER BLOCK EXPLORER</span>
        </div>
        <div className="rounded bg-indigo-950/60 px-2 py-0.5 text-[10px] font-bold text-indigo-300 animate-pulse border border-indigo-500/25">
          LEDGER ACTIVE
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left Side: SVG Network Node Grid */}
        <div className="relative flex h-48 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
            {/* Pulsing connections */}
            <g stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5">
              <line x1="20%" y1="20%" x2="50%" y2="50%" className="animate-pulse" />
              <line x1="80%" y1="20%" x2="50%" y2="50%" />
              <line x1="20%" y1="80%" x2="50%" y2="50%" />
              <line x1="80%" y1="80%" x2="50%" y2="50%" />
              <line x1="20%" y1="20%" x2="80%" y2="20%" strokeDasharray="4 4" className="animate-marquee-left" style={{ animationDuration: "10s" }} />
              <line x1="20%" y1="80%" x2="80%" y2="80%" strokeDasharray="4 4" className="animate-marquee-right" style={{ animationDuration: "10s" }} />
            </g>

            {/* Glowing nodes */}
            <circle cx="50%" cy="50%" r="7" fill="#6366f1" className="animate-pulse" />
            <circle cx="50%" cy="50%" r="14" fill="none" stroke="#6366f1" strokeWidth="1" className="animate-ping" style={{ animationDuration: "3s" }} />

            <circle cx="20%" cy="20%" r="5" fill="#818cf8" />
            <circle cx="80%" cy="20%" r="5" fill="#818cf8" />
            <circle cx="20%" cy="80%" r="5" fill="#818cf8" />
            <circle cx="80%" cy="80%" r="5" fill="#818cf8" />
          </svg>

          <div className="relative z-10 text-center space-y-1">
            <span className="text-[10px] text-indigo-300 font-bold tracking-wider">CONSENSUS NODES</span>
            <p className="text-slate-400 font-bold text-[9px]">4/4 NODE REGISTERS RUNNING</p>
          </div>
        </div>

        {/* Right Side: Ledger block list */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">MINTED CRYPTO RECORDS</span>
            
            <div className="space-y-1.5">
              <AnimatePresence initial={false}>
                {blocks.map((block) => (
                  <motion.div 
                    key={block.number} 
                    className="flex justify-between items-center rounded border border-indigo-950 bg-slate-900/60 p-2.5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2">
                      <Database className="size-3.5 text-indigo-400 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-white font-bold">Block #{block.number}</span>
                        <span className="text-[9px] text-slate-500 font-mono">{block.hash}</span>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <span className="text-indigo-400 font-bold">{block.txCount} Records</span>
                      <span className="text-[9px] text-slate-500">{block.time}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// 4. ERP & MASS ASSESSMENTS MONITOR FRAME
// ==========================================
export function AssessmentMonitorFrame() {
  const [activeSeatIndex, setActiveSeatIndex] = useState(-1)
  const [latency, setLatency] = useState(12)
  const seatGrid = Array.from({ length: 32 })

  useEffect(() => {
    // Randomly highlight active candidate exams and update latency charts
    const timer = setInterval(() => {
      setActiveSeatIndex(Math.floor(Math.random() * seatGrid.length))
      setLatency(prev => Math.max(8, Math.min(22, prev + Math.floor(Math.random() * 5) - 2)))
    }, 1800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-6 font-mono text-xs text-slate-300 shadow-2xl">
      {/* Decorative top bar */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Server className="size-4 text-emerald-400" />
          <span className="font-sans text-xs font-semibold text-slate-400">TCS iON ASSESSMENT HUB CENTER </span>
        </div>
        <div className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-emerald-400 animate-pulse">
          550/550 CAP
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left Side: Dynamic Seat Matrix (550 seats representation) */}
        <div className="flex flex-col gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-slate-500">
            <span>Seating Heatmap (Zone A)</span>
            <div className="flex gap-2">
              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-emerald-500" /> Active</span>
              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-blue-500" /> Proctor</span>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-1.5 mt-2">
            {seatGrid.map((_, idx) => {
              const isActive = idx === activeSeatIndex
              const isProctor = idx % 9 === 0
              const isCheckIn = idx % 5 === 0 && !isProctor
              return (
                <div 
                  key={idx} 
                  className={`h-4.5 rounded-[3px] border transition-all duration-300 ${
                    isActive 
                      ? "border-amber-400 bg-amber-400 shadow-[0_0_8px_#fbbf24]" 
                      : isProctor 
                        ? "border-blue-500 bg-blue-500/20" 
                        : isCheckIn 
                          ? "border-emerald-500/40 bg-emerald-500/10" 
                          : "border-slate-800 bg-slate-900"
                  }`}
                  title={`Seat #${idx + 1}`}
                />
              )
            })}
          </div>
        </div>

        {/* Right Side: Biometric scanning & Network Latency */}
        <div className="flex flex-col justify-between space-y-4">
          {/* Biometric Face Proctor */}
          <div className="rounded border border-slate-800 bg-slate-900/30 p-3 flex gap-3 items-center">
            <div className="relative shrink-0 flex items-center justify-center border border-emerald-500/30 bg-slate-950 size-12 rounded overflow-hidden">
              <Eye className="size-6 text-emerald-400 animate-pulse" />
              <div className="absolute inset-x-0 top-0.5 h-px bg-emerald-400/80 shadow-[0_0_4px_#34d399] animate-bounce" style={{ animationDuration: "2s" }} />
            </div>
            
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block">Biometric proctor</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span className="text-white font-sans font-bold">PROCTOR SECURED</span>
              </div>
              <span className="text-[9px] text-slate-400 block font-mono">Face match check: 99.8% OK</span>
            </div>
          </div>

          {/* Network Latency Stats */}
          <div className="rounded border border-slate-800 bg-slate-900 p-3">
            <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
              <span>EXAM-SERVER LATENCY</span>
              <span className="font-bold text-emerald-400">{latency} ms</span>
            </div>
            
            <div className="flex items-end gap-1 h-6 w-full mt-2">
              {Array.from({ length: 20 }).map((_, idx) => {
                const height = Math.max(30, Math.min(90, (latency + (idx * 2) % 15) * 4))
                return (
                  <div 
                    key={idx} 
                    className="w-full bg-emerald-500/30 rounded-t-[1px]" 
                    style={{ height: `${height}%` }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
