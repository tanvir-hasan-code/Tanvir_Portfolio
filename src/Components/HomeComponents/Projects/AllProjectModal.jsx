import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useAxiosInstance from "../../../Hooks/useAxiosInstance";
import { ExternalLink, Github, Server } from "lucide-react";

const AllProjectModal = ({ onClose }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/allProject");
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosInstance]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white/10 backdrop-blur-lg rounded-3xl max-w-3xl w-full shadow-2xl p-6 md:p-10"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
          All Projects
        </h2>
        <p className="text-white/70 text-center mb-6 text-sm">
          Selected works showcasing my frontend & full-stack experience
        </p>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-3 max-h-[420px] overflow-y-auto pr-1">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="flex items-center justify-between gap-4 rounded-xl
              bg-white/5 hover:bg-white/10 border border-white/10
              px-4 py-3 transition-all"
            >
              {/* Project Info */}
              <div className="flex flex-col flex-1">
                <h3
                  className="text-lg font-extrabold tracking-wide
                  bg-gradient-to-r from-fuchsia-400 via-purple-400 to-sky-400
                  bg-clip-text text-transparent"
                >
                  {project.name}
                </h3>
                <p className="text-xs text-white/60 mt-0.5">{project.desc}</p>
              </div>
              {/* Buttons */}
              <div className="grid md:flex flex-wrap gap-2 shrink-0">
                {project.liveSite && (
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
        bg-pink-500 text-white
        shadow-md shadow-pink-400/40
        hover:bg-pink-600 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50
        transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}

                {project.client && (
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
        bg-blue-500 text-white
        shadow-md shadow-blue-400/40
        hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50
        transition-all duration-300"
                  >
                    <Github size={14} />
                    Client
                  </a>
                )}

                {project.server && (
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
        bg-purple-500 text-white
        shadow-md shadow-purple-400/40
        hover:bg-purple-600 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50
        transition-all duration-300"
                  >
                    <Server size={14} />
                    Server
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllProjectModal;
