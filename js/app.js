// Demo file download links — update SharePoint URLs here when ready
const demoFiles = [
    { name: 'Southern Star Seafood — Sales Data (Excel)', desc: 'Dữ liệu bán hàng dùng cho Lab 3', icon: 'excel', url: '#' },
    { name: 'Đề xuất hợp tác xuất khẩu Nhật Bản (Word)', desc: 'Tài liệu xuất khẩu dùng cho Lab 2', icon: 'word', url: '#' },
    { name: 'Thị trường ngành thủy sản (PowerPoint)', desc: 'Bài thuyết trình dùng cho Lab 2', icon: 'powerpoint', url: '#' },
];

// Module definitions with their markdown file paths
const modules = {
    'module-0': { title: 'Module 1 — Welcome and licence check', file: 'labs/module-1/index.md' },
    'module-1': { title: 'Module 2 — What Copilot is', file: 'labs/module-2/index.md' },
    'module-2': { title: 'Module 3 — Prompting fundamentals', file: 'labs/module-3/index.md' },
    'lab-1':    { title: 'Lab 1 — Outlook and Teams', file: 'labs/lab-1/index.md' },
    'lab-2':    { title: 'Lab 2 — Word and PowerPoint', file: 'labs/lab-2/index.md' },
    'lab-3':    { title: 'Lab 3 — Excel and the Copilot app', file: 'labs/lab-3/index.md' },
    'lab-4':    { title: 'Lab 4 — AI Agent với Agent Builder', file: 'labs/lab-4/index.md' },
    'wrap':     { title: 'Wrap and homework', file: 'labs/wrap/index.md' }
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

        if (text.includes('[!TIP]') || text.includes('<strong>Tip:</strong>') || text.includes('<strong>Mẹo:</strong>')) {
            bq.className = 'tip';
            bq.innerHTML = text
                .replace(/<p>\[!TIP\]<\/p>/g, '')
                .replace(/\[!TIP\]/g, '')
                .replace(/<strong>Tip:<\/strong>/g, '')
                .replace(/<strong>Mẹo:<\/strong>/g, '')
                .trim();
        } else if (text.includes('[!NOTE]') || text.includes('<strong>Note:</strong>') || text.includes('<strong>Ghi chú:</strong>')) {
            bq.className = 'note';
            bq.innerHTML = text
                .replace(/<p>\[!NOTE\]<\/p>/g, '')
                .replace(/\[!NOTE\]/g, '')
                .replace(/<strong>Note:<\/strong>/g, '')
                .replace(/<strong>Ghi chú:<\/strong>/g, '')
                .trim();
        } else if (text.includes('[!PROMPT]') || text.includes('<strong>PROMPT:</strong>') || text.includes('**PROMPT:**')) {
            const promptInner = text
                .replace(/<p>\[!PROMPT\]<\/p>/g, '')
                .replace(/\[!PROMPT\]/g, '')
                .replace(/<strong>PROMPT:<\/strong>/g, '')
                .trim();
            bq.insertAdjacentHTML('afterend', buildPromptCard(promptInner));
            bq.remove();
        }
    });

    // Style inline code blocks that look like prompts
    content.querySelectorAll('pre code').forEach(code => {
        if (code.textContent.trim().startsWith('PROMPT:')) {
            const pre = code.parentElement;
            const promptText = escapeHtml(code.textContent.replace('PROMPT:', '').trim());
            pre.insertAdjacentHTML('afterend', buildPromptCard(`<p>${promptText}</p>`));
            pre.remove();
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

    // Render [download-files] placeholder
    content.querySelectorAll('p').forEach(p => {
        if (p.textContent.trim() === '[download-files]') {
            p.outerHTML = buildDownloadBlock();
        }
    });
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

// Build the demo file download block
function buildDownloadBlock() {
    const appIcons = {
        excel:      { color: '#107c10', label: 'Excel', path: 'M3 3h10v10H3zM8 3v10M3 8h10' },
        word:       { color: '#2b579a', label: 'Word',  path: 'M3 3h10v10H3zM5 6l2 6 2-6 2 6' },
        powerpoint: { color: '#d24726', label: 'PowerPoint', path: 'M3 3h10v10H3zM6 6h3a1.5 1.5 0 0 1 0 3H6V6z' },
    };

    const items = demoFiles.map(f => {
        const icon = appIcons[f.icon] || appIcons.word;
        const isPlaceholder = f.url === '#';
        return `
        <a href="${escapeAttr(f.url)}"
           class="download-item${isPlaceholder ? ' download-item--placeholder' : ''}"
           ${!isPlaceholder ? 'target="_blank" rel="noopener noreferrer"' : ''}
           aria-label="Tải ${escapeAttr(f.name)}${isPlaceholder ? ' (chưa có link)' : ''}">
            <span class="download-icon" style="background:${icon.color}">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" fill="white" fill-opacity="0.2"/>
                    <path d="${icon.path}" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span class="download-info">
                <span class="download-name">${escapeHtml(f.name)}</span>
                <span class="download-desc">${escapeHtml(f.desc)}</span>
            </span>
            <span class="download-arrow" aria-hidden="true">
                ${isPlaceholder
                    ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="#aaa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                    : `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                }
            </span>
        </a>`;
    }).join('');

    return `<div class="download-block">
        <div class="download-block-header">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 12h12M8 3v7M5 7l3 3 3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>File demo cho buổi học</span>
        </div>
        <p class="download-block-hint">Tải về và lưu vào <strong>OneDrive</strong> trước khi bắt đầu Lab.</p>
        <div class="download-list">${items}</div>
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
