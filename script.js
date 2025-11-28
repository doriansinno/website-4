// Datenbasis: Alle Laborwerte mit echten Referenzbereichen.
// HINWEIS: Hier kannst du Referenzwerte anpassen oder erweitern.
const referenceData = {
    "Kleines Blutbild": {
        // Neue Werte hinzufügen: in diesem Objekt ergänzen
        values: {
            "Hämoglobin": {
                unit: "g/dL",
                description: "Trägt Sauerstoff zu allen Geweben.",
                ranges: { Mann: { min: 13.5, max: 17.5 }, Frau: { min: 12, max: 16 } }
            },
            "Hämatokrit": {
                unit: "%",
                description: "Anteil der Zellen am Gesamtblutvolumen.",
                ranges: { Mann: { min: 40, max: 52 }, Frau: { min: 36, max: 48 } }
            },
            "Erythrozyten": {
                unit: "Mio./µL",
                description: "Rote Blutkörperchen transportieren Gase.",
                ranges: { Mann: { min: 4.5, max: 5.9 }, Frau: { min: 4.1, max: 5.1 } }
            },
            "Leukozyten": {
                unit: "Tsd./µL",
                description: "Weiße Blutkörperchen für Immunabwehr.",
                ranges: { Mann: { min: 4, max: 10 }, Frau: { min: 4, max: 10 } }
            },
            "Thrombozyten": {
                unit: "Tsd./µL",
                description: "Blutplättchen für die Gerinnung.",
                ranges: { Mann: { min: 150, max: 400 }, Frau: { min: 150, max: 400 } }
            }
        }
    },
    "Großes Blutbild": {
        // Enthält alle Werte des kleinen Blutbilds und zusätzliche Parameter
        values: {
            "Hämoglobin": {
                unit: "g/dL",
                description: "Trägt Sauerstoff zu allen Geweben.",
                ranges: { Mann: { min: 13.5, max: 17.5 }, Frau: { min: 12, max: 16 } }
            },
            "Hämatokrit": {
                unit: "%",
                description: "Anteil der Zellen am Gesamtblutvolumen.",
                ranges: { Mann: { min: 40, max: 52 }, Frau: { min: 36, max: 48 } }
            },
            "Erythrozyten": {
                unit: "Mio./µL",
                description: "Rote Blutkörperchen transportieren Gase.",
                ranges: { Mann: { min: 4.5, max: 5.9 }, Frau: { min: 4.1, max: 5.1 } }
            },
            "Leukozyten": {
                unit: "Tsd./µL",
                description: "Weiße Blutkörperchen für Immunabwehr.",
                ranges: { Mann: { min: 4, max: 10 }, Frau: { min: 4, max: 10 } }
            },
            "Thrombozyten": {
                unit: "Tsd./µL",
                description: "Blutplättchen für die Gerinnung.",
                ranges: { Mann: { min: 150, max: 400 }, Frau: { min: 150, max: 400 } }
            },
            "MCV": {
                unit: "fL",
                description: "Mittleres Volumen der Erythrozyten.",
                ranges: { Mann: { min: 80, max: 100 }, Frau: { min: 80, max: 100 } }
            },
            "MCH": {
                unit: "pg",
                description: "Mittlerer Hämoglobingehalt pro Erythrozyt.",
                ranges: { Mann: { min: 27, max: 34 }, Frau: { min: 27, max: 34 } }
            },
            "MCHC": {
                unit: "g/dL",
                description: "Mittlere Hämoglobinkonzentration im Erythrozyten.",
                ranges: { Mann: { min: 32, max: 36 }, Frau: { min: 32, max: 36 } }
            },
            "RDW": {
                unit: "%",
                description: "Verteilungsbreite der Erythrozytengröße.",
                ranges: { Mann: { min: 11.5, max: 14.5 }, Frau: { min: 11.5, max: 14.5 } }
            },
            "Neutrophile": {
                unit: "%",
                description: "Bakterienabwehr im Blut.",
                ranges: { Mann: { min: 40, max: 75 }, Frau: { min: 40, max: 75 } }
            },
            "Lymphozyten": {
                unit: "%",
                description: "Virusabwehr und Antikörperbildung.",
                ranges: { Mann: { min: 20, max: 45 }, Frau: { min: 20, max: 45 } }
            },
            "Monozyten": {
                unit: "%",
                description: "Räumen Zelltrümmer auf.",
                ranges: { Mann: { min: 2, max: 10 }, Frau: { min: 2, max: 10 } }
            },
            "Eosinophile": {
                unit: "%",
                description: "Reagieren auf Parasiten und Allergien.",
                ranges: { Mann: { min: 1, max: 6 }, Frau: { min: 1, max: 6 } }
            },
            "Basophile": {
                unit: "%",
                description: "Beteiligt an allergischen Reaktionen.",
                ranges: { Mann: { min: 0, max: 1.5 }, Frau: { min: 0, max: 1.5 } }
            }
        }
    },
    "Hormonprofil": {
        values: {
            "Testosteron": {
                unit: "ng/mL",
                description: "Wichtig für Energie, Muskel- und Knochenaufbau.",
                ranges: { Mann: { min: 2.5, max: 8 }, Frau: { min: 0.15, max: 0.7 } }
            },
            "Östradiol": {
                unit: "pg/mL",
                description: "Reguliert Zyklus, Knochen und Gefäße.",
                ranges: { Mann: { min: 10, max: 40 }, Frau: { min: 30, max: 400 } }
            },
            "Cortisol": {
                unit: "µg/dL (morgens)",
                description: "Stresshormon, beeinflusst Blutdruck und Zucker.",
                ranges: { Mann: { min: 5, max: 25 }, Frau: { min: 5, max: 25 } }
            },
            "TSH": {
                unit: "mIU/L",
                description: "Steuert die Schilddrüse.",
                ranges: { Mann: { min: 0.4, max: 4 }, Frau: { min: 0.4, max: 4 } }
            },
            "FT3": {
                unit: "pg/mL",
                description: "Aktives Schilddrüsenhormon.",
                ranges: { Mann: { min: 2, max: 4.4 }, Frau: { min: 2, max: 4.4 } }
            },
            "FT4": {
                unit: "ng/dL",
                description: "Vorstufe des aktiven Schilddrüsenhormons.",
                ranges: { Mann: { min: 0.8, max: 1.7 }, Frau: { min: 0.8, max: 1.7 } }
            },
            "Progesteron": {
                unit: "ng/mL",
                description: "Zyklussteuerung, Schleimhautaufbau.",
                ranges: { Mann: { min: 0.1, max: 1 }, Frau: { min: 5, max: 20 } }
            },
            "LH": {
                unit: "IU/L",
                description: "Regelt Eisprung bzw. Testosteronproduktion.",
                ranges: { Mann: { min: 1.5, max: 9 }, Frau: { min: 2, max: 12 } }
            },
            "FSH": {
                unit: "IU/L",
                description: "Reifung von Eizellen bzw. Spermien.",
                ranges: { Mann: { min: 1.5, max: 12.4 }, Frau: { min: 3, max: 10 } }
            }
        }
    }
};

const genderSelect = document.getElementById('gender');
const profileSelect = document.getElementById('profile');
const inputsContainer = document.getElementById('inputs');
const analyzeBtn = document.getElementById('analyze');
const exportBtn = document.getElementById('export');
const resultsContainer = document.getElementById('results');
const chartCanvas = document.getElementById('statusChart');
let statusChart;

function createInputField(key, value) {
    const wrapper = document.createElement('label');
    wrapper.className = 'field';
    wrapper.dataset.key = key;

    const title = document.createElement('span');
    title.textContent = `${key} (${value.unit})`;

    const input = document.createElement('input');
    input.type = 'number';
    input.step = '0.1';
    input.placeholder = `${value.ranges.Mann.min} - ${value.ranges.Mann.max}`;
    input.dataset.key = key;

    const ref = document.createElement('small');
    ref.textContent = `Referenz: ${value.ranges.Mann.min} – ${value.ranges.Mann.max} ${value.unit}`;
    ref.className = 'reference';

    wrapper.appendChild(title);
    wrapper.appendChild(input);
    wrapper.appendChild(ref);
    return wrapper;
}

function renderInputs() {
    if (!inputsContainer || !profileSelect) return;
    inputsContainer.innerHTML = '';
    const profile = referenceData[profileSelect.value];
    Object.entries(profile.values).forEach(([key, value]) => {
        const field = createInputField(key, value);
        inputsContainer.appendChild(field);
    });
    updateReferenceTexts();
}

function updateReferenceTexts() {
    const gender = genderSelect?.value || 'Mann';
    document.querySelectorAll('#inputs .field').forEach(field => {
        const key = field.dataset.key;
        const value = referenceData[profileSelect.value].values[key];
        const range = value.ranges[gender];
        const ref = field.querySelector('.reference');
        if (ref) ref.textContent = `Referenz: ${range.min} – ${range.max} ${value.unit}`;
    });
}

function evaluateValue(val, range) {
    if (isNaN(val)) return 'none';
    if (val < range.min) return 'low';
    if (val > range.max) return 'high';
    return 'normal';
}

function analyzeValues() {
    const gender = genderSelect.value;
    const profile = referenceData[profileSelect.value];
    const results = [];
    let counts = { low: 0, normal: 0, high: 0 };

    Object.entries(profile.values).forEach(([key, value]) => {
        const input = document.querySelector(`input[data-key="${key}"]`);
        const entered = parseFloat(input?.value);
        const range = value.ranges[gender];
        const status = evaluateValue(entered, range);
        if (status !== 'none') counts[status] += 1;

        results.push({ key, value: entered, range, status, description: value.description, unit: value.unit });
    });

    renderResults(results, counts);
    updateChart(counts);
    return { results, counts };
}

function renderResults(results, counts) {
    resultsContainer.innerHTML = '';
    results.forEach(item => {
        const box = document.createElement('div');
        box.className = 'result-item';
        const statusLabel = document.createElement('span');
        statusLabel.className = `status ${item.status === 'none' ? 'low' : item.status}`;
        statusLabel.textContent = item.status === 'none' ? 'kein Wert' : item.status === 'low' ? 'zu niedrig' : item.status === 'high' ? 'zu hoch' : 'normal';

        const heading = document.createElement('h3');
        heading.textContent = `${item.key}: ${isNaN(item.value) ? '–' : item.value} ${item.unit}`;

        const ref = document.createElement('p');
        ref.textContent = `Referenz: ${item.range.min} – ${item.range.max} ${item.unit}`;
        ref.className = 'muted';

        const desc = document.createElement('p');
        desc.textContent = item.description;

        box.appendChild(statusLabel);
        box.appendChild(heading);
        box.appendChild(ref);
        box.appendChild(desc);
        resultsContainer.appendChild(box);
    });

    const summary = document.createElement('p');
    summary.innerHTML = `<strong>Zusammenfassung:</strong> ${counts.normal} normal, ${counts.low} zu niedrig, ${counts.high} zu hoch.`;
    resultsContainer.prepend(summary);
}

function updateChart(counts) {
    if (!chartCanvas) return;
    const data = [counts.low, counts.normal, counts.high];
    const ctx = chartCanvas.getContext('2d');
    if (statusChart) statusChart.destroy();
    statusChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Zu niedrig', 'Normal', 'Zu hoch'],
            datasets: [{
                data,
                backgroundColor: ['#c7dbff', '#cdeedd', '#f5c4c4'],
                borderWidth: 0
            }]
        },
        options: { plugins: { legend: { position: 'bottom' } } }
    });
}

function exportPDF(results, counts) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const date = new Date().toLocaleString('de-DE');
    doc.setFontSize(16);
    doc.text('BloodCheck Analyse', 14, 18);
    doc.setFontSize(11);
    doc.text(`Datum: ${date}`, 14, 26);
    doc.text(`Geschlecht: ${genderSelect.value}`, 14, 34);
    doc.text(`Profil: ${profileSelect.value}`, 14, 42);
    doc.text(`Zusammenfassung: ${counts.normal} normal, ${counts.low} niedrig, ${counts.high} hoch`, 14, 50);

    let y = 62;
    results.forEach(item => {
        doc.text(`${item.key}: ${isNaN(item.value) ? 'kein Wert' : item.value + ' ' + item.unit}`, 14, y);
        doc.text(`Referenz: ${item.range.min} - ${item.range.max} ${item.unit} | Status: ${item.status}`, 14, y + 6);
        doc.text(item.description, 14, y + 12, { maxWidth: 180 });
        y += 24;
        if (y > 270) { doc.addPage(); y = 20; }
    });

    doc.save('bloodcheck-analyse.pdf');
}

function init() {
    if (inputsContainer && profileSelect) {
        renderInputs();
        profileSelect.addEventListener('change', () => {
            renderInputs();
        });
        genderSelect.addEventListener('change', () => updateReferenceTexts());
        analyzeBtn.addEventListener('click', () => analyzeValues());
        exportBtn.addEventListener('click', () => {
            const { results, counts } = analyzeValues();
            exportPDF(results, counts);
        });
    }
}

// Möglichkeit für neue Profile: Füge oben in referenceData ein neues Objekt hinzu und erweitere die Select-Optionen in analyse.html.
document.addEventListener('DOMContentLoaded', init);
