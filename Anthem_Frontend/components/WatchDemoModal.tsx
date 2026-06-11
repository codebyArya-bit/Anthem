"use client";

import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { motion } from "framer-motion";

export default function WatchDemoModal() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);

    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="group h-12 sm:h-14 rounded-full bg-[#017ACA] px-8 text-base font-semibold text-white shadow-[0_18px_45px_rgba(1,122,202,0.28)] transition-all duration-300 hover:bg-[#005B99] hover:text-white hover:shadow-[0_22px_55px_rgba(1,122,202,0.34)] flex items-center justify-center gap-2"
        >
          Watch Demo
          <Play className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition"
          >
            <X className="size-5" />
          </button>

          {/* Video */}
          <video
            ref={videoRef}
            src="/Hero Section Video/Anthem Watch Demo Video.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
