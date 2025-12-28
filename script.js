
// Mock Data & Scenarios
const SCENARIOS = {
    d2c: {
        inputTitle: "CUSTOMER SERVICE PORTAL",
        inputHTML: `
            <div class="chat-interface">
                <div class="chat-header">
                    <span>Recent Chats</span>
                    <span>Just Now</span>
                </div>
                <!-- Hidden by default, appears on trigger -->
                <div id="demo-chat-content" class="hidden">
                    <div class="chat-message chat-bubble">
                        <p>Hi, I want to return this. The stitching is bad on the sleeve.</p>
                        <div class="chat-image">
                            <i data-lucide="image"></i>
                            <span style="margin-left:8px">IMG_2024.jpg (Seam Tear)</span>
                        </div>
                    </div>
                </div>
                <button class="btn-trigger" id="trigger-btn">
                    <i data-lucide="message-square" style="width:18px"></i>
                    SIMULATE INCOMING CHAT
                </button>
            </div>
        `,
        logs: [
            { text: "New message received from channel: WhatsApp", delay: 500 },
            { text: "Analyzing attachment [IMG_2024.jpg]...", delay: 800 },
            { text: "Vision API detected defect: 'Torn Seam'", delay: 1000, highlight: true },
            { text: "Confidence Score: 98.4%", delay: 300 },
            { text: "Checking Return Policy (Policy ID: RET-99)...", delay: 600 },
            { text: "Policy Match: Defective Item = Free Return", delay: 400, success: true },
            { text: "Sentiment Analysis: 'Frustrated'", delay: 500 },
            { text: "Churn Risk Assessment: HIGH", delay: 400, highlight: true },
            { text: "Decision: AUTO_APPROVE_RETURN", delay: 600 },
            { text: "Generating shipping label...", delay: 500 },
            { text: "Action complete. Ticket resolved.", delay: 300, success: true }
        ],
        outputHTML: `
            <div class="platform-header ph-shopify">
                <i data-lucide="shopping-bag" style="width:16px"></i>
                SHOPIFY ORDERS
            </div>
            <table class="dash-table">
                <thead>
                    <tr>
                        <th>Order #</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Tag</th>
                    </tr>
                </thead>
                <tbody id="dash-rows">
                     <tr>
                        <td>#1024</td>
                        <td>Sarah J.</td>
                        <td><span class="status-tag tag-green">Delivered</span></td>
                        <td>Returning</td>
                    </tr>
                    <tr>
                        <td>#1023</td>
                        <td>Mike R.</td>
                        <td><span class="status-tag tag-green">Delivered</span></td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        `,
        // The HTML to inject when action completes
        updateRowHTML: `
            <td>#1234</td>
            <td>Alex Doe</td>
            <td><span class="status-tag tag-purple">Ret Approved</span></td>
            <td>VIP Priority</td>
        `
    },
    b2b: {
        inputTitle: "CRM INBOUND LEADS",
        inputHTML: `
            <div class="lead-wrapper" style="height:100%; display:flex; flex-direction:column; justify-content:center;">
                <div id="demo-lead-content" class="hidden">
                     <div class="lead-card">
                        <div class="lead-header">
                            <div class="avatar">DR</div>
                            <div class="lead-info">
                                <h3>Dr. Rahul</h3>
                                <span>Apollo Hospitals Group</span>
                            </div>
                        </div>
                        <div class="lead-row">
                            <span class="lead-label">Role</span>
                            <span class="lead-value">Director of Procurement</span>
                        </div>
                        <div class="lead-row">
                            <span class="lead-label">Inquiry Source</span>
                            <span class="lead-value">LinkedIn Direct</span>
                        </div>
                         <div class="lead-row">
                            <span class="lead-label">Message</span>
                            <span class="lead-value">Interested in enterprise deployment.</span>
                        </div>
                     </div>
                </div>
                 <button class="btn-trigger" id="trigger-btn" style="margin-top:20px">
                    <i data-lucide="user-plus" style="width:18px"></i>
                    SIMULATE NEW LEAD
                </button>
            </div>
        `,
        logs: [
            { text: "New inquiry detected: Dr. Rahul", delay: 500 },
            { text: "Enriching profile via LinkedIn Graph...", delay: 1000 },
            { text: "Role Identified: Director (Decision Maker)", delay: 500, highlight: true },
            { text: "Company Size: 10,000+ Employees", delay: 400 },
            { text: "Calculating Lead Score...", delay: 800 },
            { text: "Lead Score: 95/100 (Top Tier)", delay: 300, success: true },
            { text: "Territory Routing: APAC Enterprise", delay: 400 },
            { text: "Decision: ASSIGN_SENIOR_REP", delay: 500 },
            { text: "Drafting personalized outreach sequence...", delay: 800 },
            { text: "Action detected: Sales Draft Created", delay: 300, success: true }
        ],
        outputHTML: `
            <div class="platform-header ph-hubspot">
                <i data-lucide="target" style="width:16px"></i>
                HUBSPOT LEADS
            </div>
            <table class="dash-table">
                <thead>
                    <tr>
                        <th>Lead Name</th>
                        <th>Company</th>
                        <th>Score</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="dash-rows">
                     <tr>
                        <td>Jane Smith</td>
                        <td>TechFlow</td>
                        <td>45</td>
                        <td><span class="status-tag tag-yellow">Nurture</span></td>
                    </tr>
                </tbody>
            </table>
        `,
        updateRowHTML: `
            <td>Dr. Rahul</td>
            <td>Apollo Hosp</td>
            <td><strong>95</strong></td>
            <td><span class="status-tag tag-purple">Qualified</span></td>
        `
    },
    ops: {
        inputTitle: "FINANCE OPERATIONS",
        inputHTML: `
            <div style="height:100%; display:flex; flex-direction:column; justify-content:center;">
                <div class="file-dropzone" id="trigger-btn">
                    <i data-lucide="upload-cloud" class="file-icon-large"></i>
                    <span style="font-weight:600">Drop Invoice PDF here</span>
                    <span style="font-size:11px; opacity:0.6">or click to simulate upload</span>
                </div>
                
                <div id="demo-file-content" class="hidden">
                    <div class="file-card">
                         <i data-lucide="file-text" style="color:var(--danger)"></i>
                         <div>
                            <div style="font-weight:600; font-size:13px">inv_2024_techcorp.pdf</div>
                            <div style="font-size:11px; opacity:0.6">2.4 MB • Uploaded just now</div>
                         </div>
                    </div>
                </div>
            </div >
    `,
        logs: [
            { text: "File upload detected: inv_2024_techcorp.pdf", delay: 500 },
            { text: "Initiating Optical Character Recognition (OCR)...", delay: 1200 },
            { text: "Extracted Vendor: 'TechCorp Solutions'", delay: 400, highlight: true },
            { text: "Extracted Amount: $4,500.00", delay: 300 },
            { text: "Extracted Date: 2024-12-25", delay: 300 },
            { text: "Cross-referencing Purchase Order Database...", delay: 800 },
            { text: "Found matching PO #99832", delay: 500, success: true },
            { text: "Validating line items...", delay: 600 },
            { text: "Validation Successful. No discrepancies.", delay: 400 },
            { text: "Action: Schedule Payment (Net 30)", delay: 500 },
            { text: "ERP Updated.", delay: 300, success: true }
        ],
        outputHTML: `
        <div class="platform-header ph-excel">
        <i data-lucide="sheet" style="width:16px"></i>
                ORACLE NETSUITE
            </div>
    <table class="dash-table">
        <thead>
            <tr>
                <th>Invoice #</th>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody id="dash-rows">
            <tr>
                <td>INV-900</td>
                <td>Acme Inc</td>
                <td>$120.00</td>
                <td><span class="status-tag tag-green">Paid</span></td>
            </tr>
        </tbody>
    </table>
`,
        updateRowHTML: `
    <td>INV-TC-24</td>
            <td>TechCorp</td>
            <td>$4,500</td>
            <td><span class="status-tag tag-purple">Scheduled</span></td>
`
    }
};

// Global State
let state = {
    mode: 'd2c',
    supervisor: false,
    stats: { time: 0, cost: 0 }
};

// DOM Elements
const els = {
    modeSelect: document.getElementById('industry-select'),
    supervisorToggle: document.getElementById('supervisor-toggle'),
    roiTime: document.getElementById('time-saved'),
    roiCost: document.getElementById('cost-saved'),

    colInput: document.getElementById('input-container'),
    colBrain: document.getElementById('terminal-output'),
    colOutput: document.getElementById('output-container'),

    spinner: document.getElementById('brain-spinner'),
    hitlOverlay: document.getElementById('hitl-controls'),
    btnApprove: document.getElementById('btn-approve'),
    btnReject: document.getElementById('btn-reject')
};

// Initialization
function init() {
    loadScenario('d2c');

    // Custom Dropdown Logic
    const dropdownTrigger = document.getElementById('dropdown-trigger');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const options = document.querySelectorAll('.dropdown-option');
    const hiddenSelect = document.getElementById('industry-select');
    const selectedText = document.getElementById('selected-option-text');

    // Toggle Menu
    dropdownTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
        dropdownTrigger.classList.toggle('active');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            dropdownTrigger.classList.remove('active');
        }
    });

    // Option Click
    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.value;
            const text = option.querySelector('span').textContent;

            // Visual updates
            selectedText.textContent = text;
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Close menu
            dropdownMenu.classList.remove('show');
            dropdownTrigger.classList.remove('active');

            // Update Global State & Trigger Logic
            state.mode = value;
            loadScenario(state.mode);

            // Sync hidden select (optional but good practice)
            hiddenSelect.value = value;
        });
    });

    /* Removed old 'change' listener for hidden select as we call loadScenario directly */

    els.supervisorToggle.addEventListener('change', (e) => {
        state.supervisor = e.target.checked;
    });

    // HITL Listeners (logic added dynamically during run)
}

function loadScenario(mode) {
    const data = SCENARIOS[mode];

    // 1. Reset Input Col
    els.colInput.innerHTML = data.inputHTML;

    // 2. Reset Brain
    els.colBrain.innerHTML = `<div class="terminal-line placeholder">> System ready.Waiting for input...</div>`;
    els.spinner.classList.add('hidden');
    els.hitlOverlay.classList.add('hidden');

    // 3. Reset Output Col
    els.colOutput.innerHTML = data.outputHTML;

    // 4. Attach Trigger Listener
    const triggerBtn = document.getElementById('trigger-btn');
    if (triggerBtn) {
        triggerBtn.addEventListener('click', () => runSimulation(mode));
    }

    // Re-render icons for injected content
    lucide.createIcons();
}

async function runSimulation(mode) {
    const data = SCENARIOS[mode];
    const triggerBtn = document.getElementById('trigger-btn');

    // A. UI Updates on Trigger
    if (mode === 'd2c' || mode === 'b2b') {
        triggerBtn.style.display = 'none'; // Hide button
        const content = document.getElementById(mode === 'd2c' ? 'demo-chat-content' : 'demo-lead-content');
        content.classList.remove('hidden');
    } else if (mode === 'ops') {
        const fileContent = document.getElementById('demo-file-content');
        fileContent.classList.remove('hidden');
    }

    // B. Start Brain Processing
    els.colBrain.innerHTML = ''; // Clear ready message
    els.spinner.classList.remove('hidden');

    // C. Stream Logs
    let logs = [...data.logs];

    // Insert HITL pause point if needed
    // We pause before the LAST 3 logs (usually Decision/Action)
    const pauseIndex = state.supervisor ? logs.length - 3 : -1;

    for (let i = 0; i < logs.length; i++) {

        // Check for Supervisor Pause
        if (state.supervisor && i === pauseIndex) {
            updateLog("> STOP: Confidence Check triggers Manual Approval", true);
            els.spinner.classList.add('hidden'); // Stop spinning

            const approved = await handleSupervisorApproval(); // Wait for user click

            if (!approved) {
                updateLog("> ACTION CANCELLED BY SUPERVISOR", true, false);
                return; // Exit simulation early
            }

            els.spinner.classList.remove('hidden'); // Resume
        }

        await streamLogItem(logs[i]);
    }

    // D. Finalize
    els.spinner.classList.add('hidden');
    updateLog("> PROCESS COMPLETE", false, true);

    // E. Update Output Dashboard
    addDashboardRow(data.updateRowHTML);
    updateStats();
}

function streamLogItem(logItem) {
    return new Promise(resolve => {
        const div = document.createElement('div');
        div.className = 'log-entry';

        // Helper to format text
        let content = `<span class="log-arrow">></span> <span class="log-text">${logItem.text}</span>`;
        if (logItem.highlight) div.style.color = 'var(--accent-primary)';
        if (logItem.success) div.style.color = 'var(--success)';

        div.innerHTML = content;
        els.colBrain.appendChild(div);

        // Scroll to bottom
        els.colBrain.scrollTop = els.colBrain.scrollHeight;

        setTimeout(resolve, logItem.delay);
    });
}

function updateLog(text, isWarning = false, isSuccess = false) {
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.innerHTML = `<span class="log-arrow">></span> <span class="log-text">${text}</span>`;
    if (isWarning) div.style.color = 'var(--warning)';
    if (isSuccess) div.style.color = 'var(--success)';
    els.colBrain.appendChild(div);
    els.colBrain.scrollTop = els.colBrain.scrollHeight;
}

function handleSupervisorApproval() {
    return new Promise(resolve => {
        els.hitlOverlay.classList.remove('hidden');

        // Define cleanup to remove listeners so they don't stack
        const cleanup = () => {
            els.btnApprove.removeEventListener('click', onApprove);
            els.btnReject.removeEventListener('click', onReject);
            els.hitlOverlay.classList.add('hidden');
        };

        const onApprove = () => {
            updateLog("USER ACTION: APPROVED", false, true);
            cleanup();
            resolve(true);
        };

        const onReject = () => {
            // In a real app we'd trigger an edit mode, for demo we just block
            cleanup();
            resolve(false);
        };

        els.btnApprove.addEventListener('click', onApprove);
        els.btnReject.addEventListener('click', onReject);
    });
}

function addDashboardRow(rowHTML) {
    const tbody = document.getElementById('dash-rows');
    const tr = document.createElement('tr');
    tr.className = 'dash-row flash-update'; // CSS Animation
    tr.innerHTML = rowHTML;

    // Prepend to top
    tbody.insertBefore(tr, tbody.firstChild);
}

function updateStats() {
    state.stats.time += 5;
    state.stats.cost += 25; // Adjusted values

    // Animate numbers
    animateValue(els.roiTime, state.stats.time - 5, state.stats.time, 1000, ' min');
    animateValue(els.roiCost, state.stats.cost - 25, state.stats.cost, 1000, '$');
}

function animateValue(obj, start, end, duration, suffixOrPrefix) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);

        if (suffixOrPrefix === '$') obj.innerHTML = '$' + current;
        else obj.innerHTML = current + suffixOrPrefix;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Start
init();
