const dropdown = document.getElementById('Alkatreszek');
const VideokartyaTipus = document.getElementById('VideokartyaTipus');
const VideokartyaNVIDIA = document.getElementById('VideokartyaNVIDIA');
const VideokartyaAMD = document.getElementById('VideokartyaAMD');
const ProcesszorTipus = document.getElementById('ProcesszorTipus');
const MennyisegValaszto = document.getElementById('mennyiseg-valaszto');

const ResetButton = document.getElementById('reset-button');

const dateInput = document.getElementById('kisszallitas');
const Ma = new Date()
const Mindate = new Date(Ma);
Mindate.setDate(Ma.getDate() + 5)
dateInput.min = Mindate.toISOString().split('T')[0];

dropdown.addEventListener('change', () => {
    if (dropdown.value === 'Videokartya') {
        VideokartyaTipus.style.display = 'block';
        ProcesszorTipus.style.display = 'none';
        MennyisegValaszto.style.display = 'none';
        ProcesszorTipus.value = 'Valasszon';
    } else if (dropdown.value === 'Processzor') {
        VideokartyaTipus.style.display = 'none';
        ProcesszorTipus.style.display = 'block';
        MennyisegValaszto.style.display = 'block';
        VideokartyaNVIDIA.style.display = 'none';
        VideokartyaAMD.style.display = 'none';
        VideokartyaTipus.value = 'Valasszon';
        VideokartyaNVIDIA.value = 'Valasszon';
        VideokartyaAMD.value = 'Valasszon';
    }
    else {
        ProcesszorTipus.style.display = 'none';
        VideokartyaTipus.style.display = 'none';
        MennyisegValaszto.style.display = 'none';
        VideokartyaTipus.value = 'Valasszon';
        VideokartyaNVIDIA.value = 'Valasszon';
        VideokartyaAMD.value = 'Valasszon';
        ProcesszorTipus.value = 'Valasszon';
    }
});

VideokartyaTipus.addEventListener('change', () => {
    if (VideokartyaTipus.value === 'NVIDIA') {
        VideokartyaNVIDIA.style.display = 'block';
        MennyisegValaszto.style.display = 'block';
        VideokartyaAMD.value = 'Valasszon';
        VideokartyaAMD.style.display = 'none';
    }
    else if (VideokartyaTipus.value === 'AMD') {
        VideokartyaAMD.style.display = 'block';
        MennyisegValaszto.style.display = 'block';
        VideokartyaNVIDIA.value = 'Valasszon';
        VideokartyaNVIDIA.style.display = 'none';
    }
    else {
        VideokartyaNVIDIA.style.display = 'none';
        VideokartyaAMD.style.display = 'none';
        MennyisegValaszto.style.display = 'none';
    }
});

ResetButton.addEventListener("click", () => {
    VideokartyaTipus.style.display = 'none';
    VideokartyaNVIDIA.style.display = 'none';
    VideokartyaAMD.style.display = 'none';
    MennyisegValaszto.style.display = 'none';
    ProcesszorTipus.style.display = 'none';
});