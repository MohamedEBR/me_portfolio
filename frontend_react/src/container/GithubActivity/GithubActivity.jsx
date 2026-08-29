import React, { useState, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { motion } from 'framer-motion'
import { HiCode, HiClock } from 'react-icons/hi'
import { formatDistanceToNow } from 'date-fns'

const GithubActivity = () => {
    const [lastEvent, setLastEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/MohamedEBR/events/public')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const pushEvent = data.find(event => event.type === 'PushEvent');
                    if (pushEvent) {
                        setLastEvent(pushEvent);
                    }
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch Github events", err);
                setLoading(false);
            });
    }, []);

    return (
        <section id="github-stats" className="py-10 bg-primary relative overflow-hidden font-mono">
            <div className="absolute inset-0 bg-[#0f0f14] opacity-90"></div>
            {/* Matrix-like vertical lines background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px)] bg-[size:4rem_100%] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col lg:flex-row gap-8 items-center justify-center"
                >
                    {/* Latest Commit Card */}
                    <div className="w-full lg:w-1/3">
                        <div className="p-6 bg-black/80 border border-secondary/30 rounded-sm shadow-[0_0_15px_rgba(166,227,161,0.1)] h-full flex flex-col justify-center backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-50 text-[10px] text-secondary border-b border-l border-secondary/20">LATEST_PUSH</div>

                            {loading ? (
                                <div className="text-gray flex items-center justify-center h-24">
                                    <span className="animate-pulse">&gt; fetching_data...</span>
                                </div>
                            ) : lastEvent ? (
                                <div className="space-y-4">
                                    <div className="flex items-center text-sm text-gray">
                                        <HiClock className="w-4 h-4 mr-2" />
                                        <span>{formatDistanceToNow(new Date(lastEvent.created_at), { addSuffix: true })}</span>
                                    </div>

                                    <div>
                                        <div className="text-xs text-secondary mb-1">TARGET_REPO</div>
                                        <a href={`https://github.com/${lastEvent.repo.name}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary font-bold text-lg break-all transition-colors flex items-center">
                                            <HiCode className="w-5 h-5 mr-2 flex-shrink-0" />
                                            {lastEvent.repo.name}
                                        </a>
                                    </div>

                                    <div>
                                        <div className="text-xs text-secondary mb-1">COMMIT_MSG</div>
                                        <div className="text-gray-300 italic border-l-2 border-secondary/40 pl-3 py-1">
                                            "{lastEvent.payload.commits?.[0]?.message || 'No commit message available'}"
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-gray-800 flex justify-between items-center text-xs">
                                        <span className="text-gray">SHA: {lastEvent.payload.commits?.[0]?.sha?.substring(0, 7) || 'unknown'}</span>
                                        <span className="text-secondary font-bold">PUSH_EVENT_CONFIRMED</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray">No recent activity references found.</div>
                            )}
                        </div>
                    </div>

                    {/* Calendar */}
                    <motion.div
                        className="w-full lg:w-2/3 p-6 bg-black/80 border border-secondary/30 rounded-sm shadow-[0_0_15px_rgba(166,227,161,0.1)] transition-shadow duration-300 backdrop-blur-sm flex items-center justify-center"
                    >
                        <div className="w-full overflow-x-auto flex justify-center">
                            <GitHubCalendar
                                username="MohamedEBR"
                                colorScheme="dark"
                                theme={{
                                    dark: [
                                        '#161b22', // level 0
                                        '#0e4429', // level 1
                                        '#006d32', // level 2
                                        '#26a641', // level 3
                                        '#39d353', // level 4
                                    ],
                                }}
                                fontSize={12}
                                blockSize={10}
                                blockMargin={4}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default GithubActivity
