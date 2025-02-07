import { motion } from 'framer-motion';
import { ResumeViewer } from '../components/resume/ResumeViewer';
import { ResumeHeader } from '../components/resume/ResumeHeader';

export function Resume() {
  return (
    <div className="min-h-screen bg-gray-900/50 backdrop-blur-sm pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50"
        >
          <ResumeHeader />
          <ResumeViewer />
        </motion.div>
      </div>
    </div>
  );
}