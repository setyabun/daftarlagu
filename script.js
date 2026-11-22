const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxyasTOdbt9uYlbgZizzJ0IqaOYc6TToyBmmD8HTGMs4lRVgKwTZDhLn3Do4mHH44yH7A/exec';

const ORDINARIUM_KEYS = ['tuhan', 'kemuliaan', 'kudus', 'ada'];

const ORDINARIUM_PRESETS = {
  'Misa Kita 2': {
    tuhan: { no: 'PS 351', judul: 'Misa Kita 2' },
    kemuliaan: { no: 'PS 352', judul: 'Misa Kita 2' },
    kudus: { no: 'PS 392', judul: 'Misa Kita 2' },
    ada: { no: 'PS 413', judul: 'Misa Kita 2' }
  },
  'Misa Gregorian': {
    tuhan: { no: '', judul: 'Kyrie' },
    kemuliaan: { no: '', judul: 'Gloria' },
    kudus: { no: '', judul: 'Sanctus' },
    ada: { no: '', judul: 'Agnus Dei' }
  },
  'Misa Lauda Sion': {
    tuhan: { no: 'PS 347', judul: 'Misa Lauda Sion' },
    kemuliaan: { no: 'PS 348', judul: 'Misa Lauda Sion' },
    kudus: { no: 'PS 390', judul: 'Misa Lauda Sion' },
    ada: { no: 'PS 411', judul: 'Misa Lauda Sion' }
  },
  'Misa Kita 4': {
    tuhan: { no: 'PS 353', judul: 'Misa Kita 4' },
    kemuliaan: { no: 'PS 354', judul: 'Misa Kita 4' },
    kudus: { no: 'PS 393', judul: 'Misa Kita 4' },
    ada: { no: 'PS 414', judul: 'Misa Kita 4' }
  },
  'Misa Syukur': {
    tuhan: { no: '', judul: 'Misa Syukur' },
    kemuliaan: { no: '', judul: 'Misa Syukur' },
    kudus: { no: '', judul: 'Misa Syukur' },
    ada: { no: '', judul: 'Misa Syukur' }
  },
  'Misa Dolo-Dolo': {
    tuhan: { no: '', judul: 'Misa Dolo-Dolo' },
    kemuliaan: { no: '', judul: 'Misa Dolo-Dolo' },
    kudus: { no: '', judul: 'Misa Dolo-Dolo' },
    ada: { no: '', judul: 'Misa Dolo-Dolo' }
  }
};

const MAIN_SONGS = [
  { key: 'pembukaan', label: 'Pembukaan', phNo: 'No.', phJudul: 'Judul Lagu Pembukaan' },
  { key: 'tuhan', label: 'Tuhan Kasihanilah kami', phNo: 'No.', phJudul: 'Judul Tuhan Kasihanilah kami' },
  { key: 'kemuliaan', label: 'Kemuliaan', phNo: 'No.', phJudul: 'Judul Lagu Kemuliaan', isKemuliaan: true },
  { key: 'mazmur', label: 'Mazmur', phNo: 'No.', phJudul: 'Judul / Refren Mazmur' },
  { key: 'bpi', label: 'Bait Pengantar Injil', phNo: 'No.', phJudul: 'Bait Pengantar Injil' },
  { key: 'persembahan', label: 'Persembahan', phNo: 'No.', phJudul: 'Judul Lagu Persembahan' },
  { key: 'persembahan2', label: 'Persembahan pilihan', phNo: 'No.', phJudul: 'Judul Persembahan Pilihan' },
  { key: 'kudus', label: 'Kudus', phNo: 'No.', phJudul: 'Judul Lagu Kudus' },
  { key: 'bapa_kami', label: 'Bapa Kami', phNo: 'No.', phJudul: 'Judul Bapa Kami' },
  { key: 'ada', label: 'Anak Domba Allah', phNo: 'No.', phJudul: 'Judul Anak Domba Allah' },
  { key: 'komuni', label: 'Komuni', phNo: 'No.', phJudul: 'Judul Lagu Komuni' },
  { key: 'komuni2', label: 'Komuni Pilihan2', phNo: 'No.', phJudul: 'Judul Komuni Pilihan 2' },
  { key: 'komuni3', label: 'Komuni Pilihan3', phNo: 'No.', phJudul: 'Judul Komuni Pilihan 3' },
  { key: 'penutup', label: 'Penutup', phNo: 'No.', phJudul: 'Judul Lagu Penutup' },
  { key: 'tambahan', label: 'LaguTambahan', phNo: 'No.', phJudul: 'Judul Lagu Tambahan' }
];

const EXTRA_GROUPS = {
  jumatPertama: {
    title: 'Misa Jumat Pertama',
    items: [
      { key: 'jp1', label: 'Lagu Jumat pertama1', defaultNo: 'PS 555', defaultJudul: 'Kau Kusembah' },
      { key: 'jp2', label: 'Lagu Jumat pertama2', defaultNo: 'PS 501', defaultJudul: 'Mari Kita Memadahkan' }
    ]
  },
  rosario: {
    title: 'Misa Rosario',
    items: [
      { key: 'ros_buka', label: 'Lagu Pembukaan Rosario', defaultNo: '', defaultJudul: '' },
      { key: 'ros_ave2', label: 'Lagu Ave2', defaultNo: '', defaultJudul: 'Ave-Ave' },
      { key: 'ros_tutup', label: 'Lagu Penutupan Rosario', defaultNo: '', defaultJudul: '' }
    ]
  },
  jam11: {
    title: 'Misa Jam 11.00 (Lagu Anak)',
    items: [
      { key: 'anak1', label: 'Lagu Anak1', defaultNo: '', defaultJudul: '' },
      { key: 'anak2', label: 'Lagu Anak2', defaultNo: '', defaultJudul: '' },
      { key: 'anak3', label: 'Lagu Anak3', defaultNo: '', defaultJudul: '' },
      { key: 'anak4', label: 'Lagu Anak4', defaultNo: '', defaultJudul: '' }
    ]
  }
};

const OPTIONAL_SONG_KEYS = new Set(['persembahan2', 'komuni2', 'komuni3']);

let historyCache = [];

document.addEventListener('DOMContentLoaded', () => {
  buildSongInputs();
  buildExtraSongInputs();
  bindAccordions();
  bindTabs();
  bindEvents();
  renderPrintPreview();
});

function buildSongInputs() {
  const container = document.getElementById('songInputsContainer');
  container.innerHTML = MAIN_SONGS.map(song => `
    <div class="song-row-card" id="inputCard_${song.key}">
      <div class="song-row-title">${escapeHtml(song.label)}</div>
      <div class="song-row-inputs">
        <input type="text" id="no_${song.key}" placeholder="${escapeHtml(song.phNo)}" data-bind="preview" />
        <input type="text" id="judul_${song.key}" placeholder="${escapeHtml(song.phJudul)}" data-bind="preview" />
      </div>
    </div>
  `).join('');
}

function buildExtraSongInputs() {
  const container = document.getElementById('extraSongInputsContainer');
  let html = '';

  Object.entries(EXTRA_GROUPS).forEach(([groupKey, group]) => {
    html += `<div class="extra-group-title">${escapeHtml(group.title)}</div>`;
    group.items.forEach(item => {
      html += `
        <div class="song-row-card" id="inputCard_${item.key}">
          <div class="song-row-title">${escapeHtml(item.label)}</div>
          <div class="song-row-inputs">
            <input type="text" id="no_${item.key}" value="${escapeAttr(item.defaultNo)}" placeholder="Nomor" data-bind="preview" />
            <input type="text" id="judul_${item.key}" value="${escapeAttr(item.defaultJudul)}" placeholder="Judul Lagu" data-bind="preview" />
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
}

function bindAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const acc = btn.closest('.accordion');
      acc.classList.toggle('open');
      btn.setAttribute('aria-expanded', acc.classList.contains('open'));
    });
  });
}

function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.view;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');

      if (targetId === 'historyView' && historyCache.length === 0) {
        loadHistory();
      }
    });
  });
}

function bindEvents() {
  const hariMingguInput = document.getElementById('hariMinggu');
  const counterEl = document.getElementById('hariMingguCount');

  hariMingguInput.addEventListener('input', () => {
    counterEl.textContent = hariMingguInput.value.length;
    renderPrintPreview();
  });

  document.querySelectorAll(
    '[data-bind="preview"], #paduanSuara, #tahunLiturgis, #tanggalMisa, #jamMisa, #tanpaKemuliaan, #tipeBiasa, #tipeRosario, #tipeJam11'
  ).forEach(el => {
    el.addEventListener('input', syncSpecialStatesAndRender);
    el.addEventListener('change', syncSpecialStatesAndRender);
  });

  document.getElementById('tipeJumatPertama').addEventListener('change', (e) => {
    if (e.target.checked) {
      const jp1No = document.getElementById('no_jp1');
      const jp1Judul = document.getElementById('judul_jp1');
      const jp2No = document.getElementById('no_jp2');
      const jp2Judul = document.getElementById('judul_jp2');

      if (!jp1No.value) jp1No.value = 'PS 555';
      if (!jp1Judul.value) jp1Judul.value = 'Kau Kusembah';
      if (!jp2No.value) jp2No.value = 'PS 501';
      if (!jp2Judul.value) jp2Judul.value = 'Mari Kita Memadahkan';
    }
    renderPrintPreview();
  });

  document.getElementById('jamMisa').addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val.includes('11.00') || val.includes('11:00')) {
      document.getElementById('tipeJam11').checked = true;
    }
    renderPrintPreview();
  });

	document.getElementById('ordinariumPreset').addEventListener('change', (e) => {
	  const presetName = e.target.value;
	  const preset = ORDINARIUM_PRESETS[presetName];
	  if (!preset) return;

	  ORDINARIUM_KEYS.forEach(k => {
		if (preset[k]) {
		  document.getElementById(`no_${k}`).value = preset[k].no ?? '';
		  document.getElementById(`judul_${k}`).value = preset[k].judul ?? '';
		}
	  });
	  renderPrintPreview();
	});

  document.getElementById('misaForm').addEventListener('submit', handleSave);
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('resetBtn').addEventListener('click', resetForm);
  document.getElementById('refreshHistoryBtn').addEventListener('click', loadHistory);
  document.getElementById('searchHistory').addEventListener('input', renderHistoryList);
  document.getElementById('shareImgBtn').addEventListener('click', handleShareImage);
}

function syncSpecialStatesAndRender() {
  const tanpaKemuliaan = document.getElementById('tanpaKemuliaan').checked;
  const kemuliaanCard = document.getElementById('inputCard_kemuliaan');
  if (kemuliaanCard) {
    kemuliaanCard.style.opacity = tanpaKemuliaan ? '0.5' : '1';
  }
  renderPrintPreview();
}

function getActiveTipes() {
  const list = [];
  if (document.getElementById('tipeBiasa').checked) list.push('Misa Biasa');
  if (document.getElementById('tipeJumatPertama').checked) list.push('Misa Jumat Pertama');
  if (document.getElementById('tipeRosario').checked) list.push('Misa Rosario');
  if (document.getElementById('tipeJam11').checked) list.push('Misa Jam 11.00');
  return list;
}

function renderPrintPreview() {
  const paduanSuara = document.getElementById('paduanSuara').value;
  const tahun = document.getElementById('tahunLiturgis').value;
  const hariMinggu = document.getElementById('hariMinggu').value.trim();
  const tanggal = document.getElementById('tanggalMisa').value;
  const jamMisa = document.getElementById('jamMisa').value.trim();
  const tanpaKemuliaan = document.getElementById('tanpaKemuliaan').checked;

  document.getElementById('outPaduanSuara').textContent = paduanSuara;
  document.getElementById('outTahun').textContent = tahun;
  document.getElementById('outHariMinggu').textContent = hariMinggu || '-';

  const metaParts = [];
  if (tanggal) metaParts.push(formatTanggalDDMMMYYYY(tanggal));
  if (jamMisa) metaParts.push(`Pkl. ${jamMisa}`);
  document.getElementById('outJadwalMeta').textContent = metaParts.join(' • ');

  document.getElementById('outTipeBadge').textContent = '';

  const rows = [];

  const pushSongRow = (label, key, isEmptyMarker = false) => {
    if (isEmptyMarker) {
      rows.push(`<tr><td>${escapeHtml(label)}</td><td></td><td></td></tr>`);
      return;
    }
    const no = document.getElementById(`no_${key}`)?.value.trim() || '';
    const judul = document.getElementById(`judul_${key}`)?.value.trim() || '';

    if (OPTIONAL_SONG_KEYS.has(key) && !no && !judul) {
      return;
    }

    rows.push(`
      <tr>
        <td>${escapeHtml(label)}</td>
        <td>${escapeHtml(no)}</td>
        <td>${escapeHtml(judul)}</td>
      </tr>
    `);
  };

  pushSongRow('Pembukaan', 'pembukaan');
  pushSongRow('Tuhan Kasihanilah kami', 'tuhan');

  if (!tanpaKemuliaan) {
    pushSongRow('Kemuliaan', 'kemuliaan');
  }

  pushSongRow('Mazmur', 'mazmur');
  pushSongRow('Bait Pengantar Injil', 'bpi');
  pushSongRow('Aklamasi Sesudah Injil', null, true);
  pushSongRow('Persembahan', 'persembahan');
  pushSongRow('Persembahan pilihan', 'persembahan2');
  pushSongRow('Kudus', 'kudus');
  pushSongRow('Anamnesis', null, true);
  pushSongRow('Bapa Kami', 'bapa_kami');
  pushSongRow('Salam Damai', null, true);
  pushSongRow('Anak Domba Allah', 'ada');
  pushSongRow('Komuni', 'komuni');
  pushSongRow('Komuni Pilihan2', 'komuni2');
  pushSongRow('Komuni Pilihan3', 'komuni3');
  pushSongRow('Penutup', 'penutup');
  pushSongRow('LaguTambahan', 'tambahan');

  if (document.getElementById('tipeJumatPertama').checked) {
    EXTRA_GROUPS.jumatPertama.items.forEach(item => pushSongRow(item.label, item.key));
  }
  if (document.getElementById('tipeRosario').checked) {
    EXTRA_GROUPS.rosario.items.forEach(item => pushSongRow(item.label, item.key));
  }
  if (document.getElementById('tipeJam11').checked) {
    EXTRA_GROUPS.jam11.items.forEach(item => pushSongRow(item.label, item.key));
  }

  document.getElementById('printTableBody').innerHTML = rows.join('');
}

function collectFormData() {
  const extra = {};
  Object.values(EXTRA_GROUPS).forEach(group => {
    group.items.forEach(item => {
      extra[item.key] = {
        no: document.getElementById(`no_${item.key}`)?.value.trim() || '',
        judul: document.getElementById(`judul_${item.key}`)?.value.trim() || ''
      };
    });
  });

  extra.flags = {
    biasa: document.getElementById('tipeBiasa').checked,
    jumatPertama: document.getElementById('tipeJumatPertama').checked,
    rosario: document.getElementById('tipeRosario').checked,
    jam11: document.getElementById('tipeJam11').checked
  };

  return {
    id: document.getElementById('recordId').value.trim(),
    paduan_suara: document.getElementById('paduanSuara').value,
    tahun: document.getElementById('tahunLiturgis').value,
    hari_minggu: document.getElementById('hariMinggu').value.trim().slice(0, 50),
    tanggal: document.getElementById('tanggalMisa').value,
    jam_misa: document.getElementById('jamMisa').value.trim(),
    tipe_misa: getActiveTipes().join(', '),
    tanpa_kemuliaan: document.getElementById('tanpaKemuliaan').checked,
    pembukaan_no: val('no_pembukaan'),
    pembukaan_judul: val('judul_pembukaan'),
    tuhan_no: val('no_tuhan'),
    tuhan_judul: val('judul_tuhan'),
    kemuliaan_no: val('no_kemuliaan'),
    kemuliaan_judul: val('judul_kemuliaan'),
    mazmur_no: val('no_mazmur'),
    mazmur_judul: val('judul_mazmur'),
    bpi_no: val('no_bpi'),
    bpi_judul: val('judul_bpi'),
    persembahan_no: val('no_persembahan'),
    persembahan_judul: val('judul_persembahan'),
    persembahan2_no: val('no_persembahan2'),
    persembahan2_judul: val('judul_persembahan2'),
    kudus_no: val('no_kudus'),
    kudus_judul: val('judul_kudus'),
    bapa_kami_no: val('no_bapa_kami'),
    bapa_kami_judul: val('judul_bapa_kami'),
    ada_no: val('no_ada'),
    ada_judul: val('judul_ada'),
    komuni_no: val('no_komuni'),
    komuni_judul: val('judul_komuni'),
    komuni2_no: val('no_komuni2'),
    komuni2_judul: val('judul_komuni2'),
    komuni3_no: val('no_komuni3'),
    komuni3_judul: val('judul_komuni3'),
    penutup_no: val('no_penutup'),
    penutup_judul: val('judul_penutup'),
    tambahan_no: val('no_tambahan'),
    tambahan_judul: val('judul_tambahan'),
    extra
  };
}

async function handleSave(e) {
  e.preventDefault();
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.startsWith('GANTI_')) {
    showBanner('error', 'URL Google Apps Script belum diisi di script.js.');
    return;
  }

  const saveBtn = document.getElementById('saveBtn');
  saveBtn.disabled = true;
  saveBtn.textContent = 'Menyimpan...';
  showBanner('info', 'Menyimpan data ke Google Sheet...');

  try {
    const payload = { data: collectFormData() };
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    if (json.status !== 'ok') {
      throw new Error(json.message || 'Gagal menyimpan');
    }

    document.getElementById('recordId').value = json.id;
    historyCache = [];
    showBanner('success', `Data tersimpan (ID: ${json.id}). Anda bisa langsung mencetak atau mengeditnya nanti.`);
  } catch (err) {
    showBanner('error', `Gagal menyimpan ke Google Sheet: ${err.message}`);
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = 'Simpan ke Google Sheet';
  }
}

async function loadHistory() {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.startsWith('GANTI_')) {
    document.getElementById('historyList').innerHTML =
      '<p class="muted">Isi <code>APPS_SCRIPT_URL</code> di <code>script.js</code> terlebih dahulu.</p>';
    return;
  }

  const listEl = document.getElementById('historyList');
  listEl.innerHTML = '<p class="muted">Memuat riwayat dari Google Sheet...</p>';

  try {
    const res = await fetch(APPS_SCRIPT_URL);
    const json = await res.json();
    if (json.status !== 'ok') throw new Error(json.message || 'Gagal memuat data');

    historyCache = json.data || [];
    renderHistoryList();
  } catch (err) {
    listEl.innerHTML = `<p class="muted">Gagal memuat riwayat: ${escapeHtml(err.message)}</p>`;
  }
}

function renderHistoryList() {
  const q = document.getElementById('searchHistory').value.trim().toLowerCase();
  const listEl = document.getElementById('historyList');

  const filtered = historyCache.filter(item => {
    const hay = `${item.hari_minggu} ${item.paduan_suara} ${item.tahun} ${item.tanggal} ${item.jam_misa} ${item.tipe_misa}`.toLowerCase();
    return !q || hay.includes(q);
  });

  if (!filtered.length) {
    listEl.innerHTML = '<p class="muted">Tidak ada data jadwal yang cocok.</p>';
    return;
  }

  listEl.innerHTML = filtered.map(item => `
    <div class="history-item">
      <div>
        <div class="history-item-title">${escapeHtml(item.hari_minggu || '(Tanpa Judul Hari Minggu)')} — Tahun ${escapeHtml(item.tahun || 'A')}</div>
        <div class="history-item-sub">
          ${escapeHtml(item.paduan_suara || '')}
          ${item.tanggal ? ` • ${escapeHtml(formatTanggalDDMMMYYYY(item.tanggal))}` : ''}
          ${item.jam_misa ? ` • Pkl. ${escapeHtml(item.jam_misa)}` : ''}
        </div>
        ${item.tipe_misa ? `<div class="history-item-sub">Tipe: ${escapeHtml(item.tipe_misa)}</div>` : ''}
      </div>
      <div class="history-item-actions">
        <button type="button" class="btn btn-secondary btn-sm" onclick="editRecord('${escapeAttr(item.id)}')">Edit di Form</button>
      </div>
    </div>
  `).join('');
}

window.editRecord = function (id) {
  const item = historyCache.find(r => String(r.id) === String(id));
  if (!item) return;

  document.getElementById('recordId').value = item.id || '';
  document.getElementById('paduanSuara').value = item.paduan_suara || 'St.Antonius d/Padua';
  document.getElementById('tahunLiturgis').value = item.tahun || 'A';
  document.getElementById('hariMinggu').value = item.hari_minggu || '';
  document.getElementById('hariMingguCount').textContent = (item.hari_minggu || '').length;
  document.getElementById('tanggalMisa').value = item.tanggal || '';
  document.getElementById('jamMisa').value = item.jam_misa || '';
  document.getElementById('tanpaKemuliaan').checked = Boolean(item.tanpa_kemuliaan);

  const flags = item.extra?.flags || {};
  document.getElementById('tipeBiasa').checked = flags.biasa ?? item.tipe_misa.includes('Biasa');
  document.getElementById('tipeJumatPertama').checked = flags.jumatPertama ?? item.tipe_misa.includes('Jumat Pertama');
  document.getElementById('tipeRosario').checked = flags.rosario ?? item.tipe_misa.includes('Rosario');
  document.getElementById('tipeJam11').checked = flags.jam11 ?? item.tipe_misa.includes('11.00');

  setVal('no_pembukaan', item.pembukaan_no);
  setVal('judul_pembukaan', item.pembukaan_judul);
  setVal('no_tuhan', item.tuhan_no);
  setVal('judul_tuhan', item.tuhan_judul);
  setVal('no_kemuliaan', item.kemuliaan_no);
  setVal('judul_kemuliaan', item.kemuliaan_judul);
  setVal('no_mazmur', item.mazmur_no);
  setVal('judul_mazmur', item.mazmur_judul);
  setVal('no_bpi', item.bpi_no);
  setVal('judul_bpi', item.bpi_judul);
  setVal('no_persembahan', item.persembahan_no);
  setVal('judul_persembahan', item.persembahan_judul);
  setVal('no_persembahan2', item.persembahan2_no);
  setVal('judul_persembahan2', item.persembahan2_judul);
  setVal('no_kudus', item.kudus_no);
  setVal('judul_kudus', item.kudus_judul);
  setVal('no_bapa_kami', item.bapa_kami_no);
  setVal('judul_bapa_kami', item.bapa_kami_judul);
  setVal('no_ada', item.ada_no);
  setVal('judul_ada', item.ada_judul);
  setVal('no_komuni', item.komuni_no);
  setVal('judul_komuni', item.komuni_judul);
  setVal('no_komuni2', item.komuni2_no);
  setVal('judul_komuni2', item.komuni2_judul);
  setVal('no_komuni3', item.komuni3_no);
  setVal('judul_komuni3', item.komuni3_judul);
  setVal('no_penutup', item.penutup_no);
  setVal('judul_penutup', item.penutup_judul);
  setVal('no_tambahan', item.tambahan_no);
  setVal('judul_tambahan', item.tambahan_judul);

  Object.values(EXTRA_GROUPS).forEach(group => {
    group.items.forEach(ex => {
      const saved = item.extra?.[ex.key];
      if (saved) {
        setVal(`no_${ex.key}`, saved.no);
        setVal(`judul_${ex.key}`, saved.judul);
      }
    });
  });

  document.querySelector('.tab-btn[data-view="formView"]').click();
  syncSpecialStatesAndRender();
  showBanner('info', `Memuat data "${item.hari_minggu || item.id}" untuk diedit.`);
};

function resetForm() {
  document.getElementById('misaForm').reset();
  document.getElementById('recordId').value = '';
  document.getElementById('hariMingguCount').textContent = '0';
  document.getElementById('tipeBiasa').checked = true;
  buildExtraSongInputs();
  document.querySelectorAll('[data-bind="preview"]').forEach(el => {
    el.addEventListener('input', syncSpecialStatesAndRender);
  });
  syncSpecialStatesAndRender();
  showBanner('info', 'Form dikosongkan untuk jadwal misa baru.');
}

function showBanner(type, message) {
  const el = document.getElementById('statusBanner');
  el.className = `status-banner ${type} no-print`;
  el.textContent = message;
  el.hidden = false;
}

function val(id) {
  return document.getElementById(id)?.value.trim() || '';
}

function setVal(id, v) {
  const el = document.getElementById(id);
  if (el) el.value = v || '';
}

function formatTanggalDDMMMYYYY(isoStr) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const parts = isoStr.split('-');
  if (parts.length !== 3) return isoStr;
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  const day = parts[2].padStart(2, '0');
  const mon = months[monthIdx] || parts[1];
  return `${day}-${mon}-${year}`;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;');
}
async function handleShareImage() {
  const shareBtn = document.getElementById('shareImgBtn');
  shareBtn.disabled = true;
  shareBtn.textContent = 'Menyiapkan...';
  showBanner('info', 'Menyiapkan gambar daftar lagu...');

  try {
    const blob = await renderSheetToPngBlob();
    const hariMinggu = (document.getElementById('hariMinggu').value.trim() || 'Jadwal-Misa')
      .replace(/[^a-zA-Z0-9-_]+/g, '-');
    const fileName = `Lagu-Misa-${hariMinggu}.png`;
    const file = new File([blob], fileName, { type: 'image/png' });

    const caption = buildShareCaption();

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: 'Daftar Lagu Misa',
        text: caption,
        files: [file]
      });
      showBanner('success', 'Menu share siap/terbuka.');
    } else {
      // Fallback untuk browser yang belum mendukung share file: unduh PNG
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      showBanner('success', `Gambar "${fileName}" diunduh. Anda bisa melampirkannya ke WhatsApp atau Email.`);
    }
  } catch (err) {
    if (err && err.name === 'AbortError') {
      showBanner('info', 'Berbagi gambar dibatalkan.');
    } else {
      showBanner('error', `Gagal membuat/membagikan gambar: ${err.message}`);
    }
  } finally {
    shareBtn.disabled = false;
    shareBtn.textContent = 'Share Gambar';
  }
}

function buildShareCaption() {
  const ps = document.getElementById('paduanSuara').value;
  const tahun = document.getElementById('tahunLiturgis').value;
  const hari = document.getElementById('hariMinggu').value.trim();
  const tgl = document.getElementById('tanggalMisa').value;
  const jam = document.getElementById('jamMisa').value.trim();

  const parts = [`Paduan Suara: ${ps} (Tahun ${tahun})`];
  if (hari) parts.push(`Hari Minggu: ${hari}`);
  const waktu = [tgl ? formatTanggalDDMMMYYYY(tgl) : '', jam ? `Pkl. ${jam}` : ''].filter(Boolean).join(' • ');
  if (waktu) parts.push(waktu);
  return parts.join('\n');
}

function fitText(ctx, text, maxWidth) {
  const str = String(text || '');
  if (!str || ctx.measureText(str).width <= maxWidth) return str;
  let cut = str;
  while (cut.length > 1 && ctx.measureText(`${cut}…`).width > maxWidth) {
    cut = cut.slice(0, -1);
  }
  return `${cut}…`;
}

function renderSheetToPngBlob() {
  return new Promise((resolve, reject) => {
    const paduanSuara = document.getElementById('paduanSuara').value;
    const tahun = document.getElementById('tahunLiturgis').value;
    const hariMinggu = document.getElementById('hariMinggu').value.trim() || '-';
    const tanggal = document.getElementById('tanggalMisa').value;
    const jamMisa = document.getElementById('jamMisa').value.trim();

    const tableRows = Array.from(document.querySelectorAll('#printTableBody tr')).map(tr => {
      const tds = tr.querySelectorAll('td');
      return {
        lagu: tds[0]?.textContent || '',
        nomor: tds[1]?.textContent || '',
        judul: tds[2]?.textContent || ''
      };
    });

    const scale = 2;
    const width = 800;
    const outerMargin = 24;
    const innerPadX = 24;
    const rowHeight = 28;
    const headerTop = 44;
    const headerBottom = 92;
    const tableHeadHeight = 32;
    const tableTop = headerBottom + 12;
    const bottomSpace = 40;
    const height = tableTop + tableHeadHeight + (tableRows.length * rowHeight) + bottomSpace;

    const canvas = document.createElement('canvas');
    canvas.width = width * scale;
    canvas.height = height * scale;

    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);

    // Crisp white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Office-standard clean rectangular border
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(
      outerMargin,
      outerMargin,
      width - outerMargin * 2,
      height - outerMargin * 2
    );

    const contentLeft = outerMargin + innerPadX;
    const contentRight = width - outerMargin - innerPadX;
    const contentWidth = contentRight - contentLeft;

    // Header info
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 14.5px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Paduan Suara: ${paduanSuara}`, contentLeft, headerTop + 14);

    ctx.textAlign = 'right';
    ctx.fillText(`Tahun: ${tahun}`, contentRight, headerTop + 14);

    ctx.textAlign = 'left';
    ctx.font = '600 13.5px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText(`Hari Minggu : ${hariMinggu}`, contentLeft, headerTop + 36);

    const metaParts = [];
    if (tanggal) metaParts.push(formatTanggalDDMMMYYYY(tanggal));
    if (jamMisa) metaParts.push(`Pkl. ${jamMisa}`);
    if (metaParts.length) {
      ctx.textAlign = 'right';
      ctx.font = '12.5px "Plus Jakarta Sans", Arial, sans-serif';
      ctx.fillStyle = '#475569';
      ctx.fillText(metaParts.join(' • '), contentRight, headerTop + 36);
    }

    // Clean divider rule under header
    ctx.textAlign = 'left';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(contentLeft, headerBottom);
    ctx.lineTo(contentRight, headerBottom);
    ctx.stroke();

    // Table columns
    const col1W = Math.round(contentWidth * 0.34);
    const col2W = Math.round(contentWidth * 0.20);
    const col3W = contentWidth - col1W - col2W;

    // Table header
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(contentLeft, tableTop, contentWidth, tableHeadHeight);

    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.strokeRect(contentLeft, tableTop, contentWidth, tableHeadHeight);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 12.5px "Plus Jakarta Sans", Arial, sans-serif';
    ctx.fillText('Lagu', contentLeft + 8, tableTop + 20);
    ctx.fillText('Nomor', contentLeft + col1W + 8, tableTop + 20);
    ctx.fillText('Judul', contentLeft + col1W + col2W + 8, tableTop + 20);

    // Table rows
    ctx.font = '12.5px "Plus Jakarta Sans", Arial, sans-serif';
    tableRows.forEach((r, idx) => {
      const y = tableTop + tableHeadHeight + (idx * rowHeight);
      ctx.fillStyle = idx % 2 === 1 ? '#f8fafc' : '#ffffff';
      ctx.fillRect(contentLeft, y, contentWidth, rowHeight);

      ctx.strokeStyle = '#94a3b8';
      ctx.strokeRect(contentLeft, y, col1W, rowHeight);
      ctx.strokeRect(contentLeft + col1W, y, col2W, rowHeight);
      ctx.strokeRect(contentLeft + col1W + col2W, y, col3W, rowHeight);

      ctx.fillStyle = '#1e293b';
      ctx.fillText(fitText(ctx, r.lagu, col1W - 16), contentLeft + 8, y + 18);
      ctx.fillText(fitText(ctx, r.nomor, col2W - 16), contentLeft + col1W + 8, y + 18);
      ctx.fillText(fitText(ctx, r.judul, col3W - 16), contentLeft + col1W + col2W + 8, y + 18);
    });

    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error('Konversi gambar gagal'));
    }, 'image/png');
  });
}

function drawEthnicFrame(ctx, width, height, pad) {
  const outerX = pad;
  const outerY = pad;
  const outerW = width - pad * 2;
  const outerH = height - pad * 2;

  const innerX = pad + 8;
  const innerY = pad + 8;
  const innerW = width - (pad + 8) * 2;
  const innerH = height - (pad + 8) * 2;

  // Bingkai luar burgundy
  ctx.strokeStyle = '#5a2b36';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(outerX, outerY, outerW, outerH);

  // Bingkai dalam emas etnik
  ctx.strokeStyle = '#9c732b';
  ctx.lineWidth = 1.25;
  ctx.strokeRect(innerX, innerY, innerW, innerH);

  // Motif wajik (belah ketupat) berulang di sepanjang garis tengah bingkai
  const step = 22;
  const midOffset = 4;
  const drawDiamond = (cx, cy, r, fill) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = fill;
    ctx.fillRect(-r, -r, r * 2, r * 2);
    ctx.restore();
  };

  for (let x = outerX + 16; x <= outerX + outerW - 16; x += step) {
    drawDiamond(x, outerY + midOffset, 3.2, '#9c732b');
    drawDiamond(x, outerY + outerH - midOffset, 3.2, '#9c732b');
  }

  for (let y = outerY + 16; y <= outerY + outerH - 16; y += step) {
    drawDiamond(outerX + midOffset, y, 3.2, '#9c732b');
    drawDiamond(outerX + outerW - midOffset, y, 3.2, '#9c732b');
  }

  // Medali sudut etnik
  const corners = [
    [outerX, outerY],
    [outerX + outerW, outerY],
    [outerX, outerY + outerH],
    [outerX + outerW, outerY + outerH]
  ];

  corners.forEach(([cx, cy]) => {
    ctx.fillStyle = '#fdfbf7';
    ctx.strokeStyle = '#5a2b36';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    drawDiamond(cx, cy, 3.8, '#9c732b');
  });
}
