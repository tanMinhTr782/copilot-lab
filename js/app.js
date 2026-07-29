// Module definitions with their markdown file paths
const modules = {
    'module-0': { title: 'Module 0 — Welcome and licence check', file: 'labs/module-0-welcome.md' },
    'module-1': { title: 'Module 1 — What Copilot is', file: 'labs/module-1-what-copilot-is.md' },
    'module-2': { title: 'Module 2 — Prompting fundamentals', file: 'labs/module-2-prompting-fundamentals.md' },
    'lab-1':    { title: 'Lab 1 — Outlook and Teams', file: 'labs/lab-1-outlook-teams.md' },
    'lab-2':    { title: 'Lab 2 — Word and PowerPoint', file: 'labs/lab-2-word-powerpoint.md' },
    'lab-3':    { title: 'Lab 3 — Excel and the Copilot app', file: 'labs/lab-3-excel-copilot.md' },
    'wrap':     { title: 'Wrap and homework', file: 'labs/wrap-homework.md' }
};

// Current active module
let currentModule = null;

// Load a module by its key
async function loadModule(moduleKey) {
    const module = modules[moduleKey];
    if (!module) return;

    currentModule = moduleKey;

    try {
        const response = await fetch(module.file);
        if (!response.ok) throw new Error(`Failed to load ${module.file}`);
        const markdown = await response.text();

        // Render markdown to HTML
        const html = marked.parse(markdown);

        // Update content area
        document.getElementById('module-content').innerHTML = html;

        // Process custom blocks (tips, notes, prompt cards)
        processCustomBlocks();

        // Update sidebar navigation
        updateSidebar(moduleKey);

        // Show module view
        showView('module');

        // Scroll to top
        window.scrollTo(0, 0);

    } catch (error) {
        document.getElementById('module-content').innerHTML = `
            <div class="note">
                <p>Could not load module content. Please make sure the file <code>${module.file}</code> exists.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
        showView('module');
    }
}

// Process custom markdown blocks into styled HTML
function processCustomBlocks() {
    const content = document.getElementById('module-content');

    // Convert blockquotes with special prefixes into styled boxes
    content.querySelectorAll('blockquote').forEach(bq => {
        const text = bq.innerHTML;

        if (text.includes('[!TIP]') || text.includes('**Tip:**') || text.includes('**Mẹo:**')) {
            bq.className = 'tip';
            bq.innerHTML = text
                .replace('<p>[!TIP]</p>', '')
                .replace('[!TIP]', '')
                .replace('<strong>Tip:</strong>', '')
                .replace('<strong>Mẹo:</strong>', '');
        } else if (text.includes('[!NOTE]') || text.includes('**Note:**') || text.includes('**Ghi chú:**')) {
            bq.className = 'note';
            bq.innerHTML = text
                .replace('<p>[!NOTE]</p>', '')
                .replace('[!NOTE]', '')
                .replace('<strong>Note:</strong>', '')
                .replace('<strong>Ghi chú:</strong>', '');
        } else if (text.includes('[!PROMPT]') || text.includes('**PROMPT:**')) {
            bq.className = 'prompt-card';
            bq.innerHTML = `<div class="prompt-label">PROMPT</div><div class="prompt-text">${
                text
                    .replace('<p>[!PROMPT]</p>', '')
                    .replace('[!PROMPT]', '')
                    .replace('<strong>PROMPT:</strong>', '')
            }</div>`;
        }
    });

    // Style inline code blocks that look like prompts
    content.querySelectorAll('pre code').forEach(code => {
        if (code.textContent.trim().startsWith('PROMPT:')) {
            const pre = code.parentElement;
            const promptText = code.textContent.replace('PROMPT:', '').trim();
            const card = document.createElement('div');
            card.className = 'prompt-card';
            card.innerHTML = `<div class="prompt-label">PROMPT</div><div class="prompt-text">${promptText}</div>`;
            pre.replaceWith(card);
        }
    });
}

// Update the sidebar navigation
function updateSidebar(activeKey) {
    const nav = document.getElementById('module-nav');
    let html = '';

    for (const [key, mod] of Object.entries(modules)) {
        const activeClass = key === activeKey ? 'active' : '';
        html += `<a href="#" class="${activeClass}" onclick="loadModule('${key}')">${mod.title}</a>`;
    }

    nav.innerHTML = html;
}

// Show a specific view
function showView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    if (viewName === 'home') {
        document.getElementById('home-view').classList.add('active');
    } else if (viewName === 'module') {
        document.getElementById('module-view').classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.view === viewName || (viewName === 'module' && link.dataset.view === 'agenda')) {
            // Keep agenda highlighted when in module view
        }
        if (link.dataset.view === 'home' && viewName === 'home') {
            link.classList.add('active');
        }
    });
}

// Go back to home
function showHome() {
    showView('home');
    currentModule = null;
}

// Handle navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.dataset.view;
        if (view === 'home' || view === 'agenda') {
            showHome();
        }
    });
});

// Handle browser back/forward
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && modules[hash]) {
        loadModule(hash);
    } else {
        showHome();
    }
});

// Check initial hash
if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    if (modules[hash]) {
        loadModule(hash);
    }
}
