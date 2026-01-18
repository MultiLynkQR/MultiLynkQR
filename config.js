// ==========================================
// CENTRALIZED CONFIGURATION
// ==========================================
// This is the SINGLE SOURCE OF TRUTH for all data files.
// Add new data files here and they will be automatically
// picked up by user.html, script.js, and index.html

const DATA_FILES_CONFIG = {
    // List all your data files here
    files: [
        './data/personal.json',
        './data/clients.json',
        './data/demo.json',
        // Add more files here as needed if the seperate login id is created then only this is useful 
        // in the index.json file it should be updated compulsorily
        // './data/users_location2.json',
        // './data/corporate.json',
        // etc.
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_FILES_CONFIG;
}
