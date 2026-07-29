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
            const promptInner = text
                .replace('<p>[!PROMPT]</p>', '')
                .replace('[!PROMPT]', '')
                .replace('<strong>PROMPT:</strong>', '')
                .trim();
            bq.outerHTML = buildPromptCard(promptInner);
        }
    });

    // Style inline code blocks that look like prompts
    content.querySelectorAll('pre code').forEach(code => {
        if (code.textContent.trim().startsWith('PROMPT:')) {
            const pre = code.parentElement;
            const promptText = escapeHtml(code.textContent.replace('PROMPT:', '').trim());
            pre.outerHTML = buildPromptCard(`<p>${promptText}</p>`);
        }
    });

    // Enhance images: wrap in figure, add caption from alt text, make clickable
    content.querySelectorAll('img').forEach(img => {
        if (img.closest('figure')) return; // already processed
        const figure = document.createElement('figure');
        figure.className = 'content-figure';
        img.classList.add('content-img');
        img.setAttribute('loading', 'lazy');

        // Insert figure before img, move img inside
        img.parentNode.insertBefore(figure, img);
        figure.appendChild(img);

        // Add caption from alt text if present
        if (img.alt && img.alt.trim()) {
            const caption = document.createElement('figcaption');
            caption.textContent = img.alt;
            figure.appendChild(caption);
        }

        // Click to enlarge
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
        img.title = 'Nhấn để phóng to';
    });

    // Attach copy handlers to all prompt cards (after DOM update)
    attachCopyHandlers();
}

// Build a prompt card HTML string with a copy button
function buildPromptCard(innerHtml) {
    // Extract plain text for clipboard (strip tags)
    const tmp = document.createElement('div');
    tmp.innerHTML = innerHtml;
    const plainText = (tmp.textContent || tmp.innerText || '').trim();

    return `<div class="prompt-card">
        <div class="prompt-card-header">
            <span class="prompt-label">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 4a2 2 0 0 1 2-2h5.586A2 2 0 0 1 11 2.586L13.414 5A2 2 0 0 1 14 6.414V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M6 9h4M6 12h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                Prompt
            </span>
            <button class="copy-btn" data-copy="${escapeAttr(plainText)}" aria-label="Sao chép prompt">
                <svg class="icon-copy" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <svg class="icon-check" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="copy-label">Sao chép</span>
            </button>
        </div>
        <div class="prompt-body">${innerHtml}</div>
    </div>`;
}

// Attach click handlers to copy buttons
function attachCopyHandlers() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        // Remove existing listener by cloning
        const fresh = btn.cloneNode(true);
        btn.parentNode.replaceChild(fresh, btn);

        fresh.addEventListener('click', async () => {
            const text = fresh.dataset.copy;
            try {
                await navigator.clipboard.writeText(text);
                fresh.classList.add('copied');
                fresh.querySelector('.copy-label').textContent = 'Đã sao chép!';
                setTimeout(() => {
                    fresh.classList.remove('copied');
                    fresh.querySelector('.copy-label').textContent = 'Sao chép';
                }, 2000);
            } catch {
                // Fallback for older browsers
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                fresh.classList.add('copied');
                fresh.querySelector('.copy-label').textContent = 'Đã sao chép!';
                setTimeout(() => {
                    fresh.classList.remove('copied');
                    fresh.querySelector('.copy-label').textContent = 'Sao chép';
                }, 2000);
            }
        });
    });
}

// Lightbox
function openLightbox(src, alt) {
    const existing = document.getElementById('lightbox-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', alt || 'Hình ảnh phóng to');
    overlay.innerHTML = `
        <div class="lightbox-inner">
            <button class="lightbox-close" aria-label="Đóng">&times;</button>
            <img src="${escapeAttr(src)}" alt="${escapeAttr(alt || '')}" class="lightbox-img" />
            ${alt ? `<p class="lightbox-caption">${escapeHtml(alt)}</p>` : ''}
        </div>
    `;
    document.body.appendChild(overlay);

    // Close handlers
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeLightbox();
    });
    overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.addEventListener('keydown', handleLightboxKey);

    // Animate in
    requestAnimationFrame(() => overlay.classList.add('open'));
}

function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    document.removeEventListener('keydown', handleLightboxKey);
}

function handleLightboxKey(e) {
    if (e.key === 'Escape') closeLightbox();
}

// Utility: escape HTML for text nodes
function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Utility: escape for HTML attribute values
function escapeAttr(str) {
    return str.replace(/"/g, '&quot;').replace(/\n/g, ' ');
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
