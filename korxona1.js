function login() {
  const name = document.getElementById("employeeName").value.trim();
  const code = document.getElementById("employeeCode").value.trim();

  if (name === "admin" && code === "1234") {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    loadData();
  } else if (code === "1111") {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("workerPanel").classList.remove("hidden");
  } else {
    alert("Xato: Ism yoki kod noto‘g‘ri!");
  }
}

function logout() {
  document.getElementById("adminPanel").classList.add("hidden");
  document.getElementById("workerPanel").classList.add("hidden");
  document.getElementById("loginSection").classList.remove("hidden");
}

function loadData() {
  const totalWorkers = 7;
  const presentWorkers = 6;
  const absentWorkers = totalWorkers - presentWorkers;
  const efficiency = Math.round((presentWorkers / totalWorkers) * 100);

  document.getElementById("totalWorkers").innerText = totalWorkers;
  document.getElementById("presentWorkers").innerText = presentWorkers;
  document.getElementById("absentWorkers").innerText = absentWorkers;
  document.getElementById("efficiency").innerText = efficiency;

  const ctx = document.getElementById("workerChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Ishda", "Kelmagan"],
      datasets: [{
        label: "Hodimlar soni",
        data: [presentWorkers, absentWorkers],
        backgroundColor: ["#00ffcc", "#ff3333"]
      }]
    },
    options: {
      scales: { y: { beginAtZero: true, max: totalWorkers } }
    }
  });
}

function checkIn() {
  const table = document.getElementById("workerTimeTable");
  const now = new Date();
  const date = now.toLocaleDateString("uz-UZ");
  const time = now.toLocaleTimeString("uz-UZ");

  let row = table.querySelector(`tr[data-date='${date}']`);
  if (!row) {
    row = document.createElement("tr");
    row.setAttribute("data-date", date);
    row.innerHTML = `<td>${date}</td><td>${time}</td><td>-</td>`;
    table.appendChild(row);
  } else {
    row.cells[1].innerText = time;
  }
}

function checkOut() {
  const table = document.getElementById("workerTimeTable");
  const now = new Date();
  const date = now.toLocaleDateString("uz-UZ");
  const time = now.toLocaleTimeString("uz-UZ");

  let row = table.querySelector(`tr[data-date='${date}']`);
  if (!row) {
    row = document.createElement("tr");
    row.setAttribute("data-date", date);
    row.innerHTML = `<td>${date}</td><td>-</td><td>${time}</td>`;
    table.appendChild(row);
  } else {
    row.cells[2].innerText = time;
  }
}

function showWorker(name) {
  const section = document.getElementById("workerSection");
  let info = "";

  switch(name) {
    case "shoddilbek":
      info = `
        <h3>Shoddilbek</h3>
        <p>Oylik ishlagan kunlari: 26 / 30</p>
        <p>Dam olgan kunlari: 4</p>
        <p>Asosiy maosh: 5,000,000 so'm</p>
        <p>Jarima: -150,000 so'm</p>
        <p>Mukofot: +250,000 so'm</p>
        <p><b>Yakuniy maosh: 5,100,000 so'm</b></p>
      `;
      break;

    case "ibroxim":
      info = `
        <h3>Ibroxim</h3>
        <p>Oylik ishlagan kunlari: 25 / 30</p>
        <p>Dam olgan kunlari: 5</p>
        <p>Asosiy maosh: 4,500,000 so'm</p>
        <p>Jarima: -270,000 so'm</p>
        <p>Mukofot: yo'q</p>
        <p><b>Yakuniy maosh: 4,230,000 so'm</b></p>
      `;
      break;

    case "gulhayo":
      info = `
        <h3>Gulhayo</h3>
        <p>Oylik ishlagan kunlari: 27 / 30</p>
        <p>Dam olgan kunlari: 3</p>
        <p>Asosiy maosh: 4,800,000 so'm</p>
        <p>Jarima: -96,000 so'm</p>
        <p>Mukofot: +96,000 so'm</p>
        <p><b>Yakuniy maosh: 4,800,000 so'm</b></p>
      `;
      break;

    case "sevara":
      info = `
        <h3>Sevara</h3>
        <p>Oylik ishlagan kunlari: 24 / 30</p>
        <p>Dam olgan kunlari: 6</p>
        <p>Asosiy maosh: 4,200,000 so'm</p>
        <p>Jarima: -378,000 so'm</p>
        <p>Mukofot: yo'q</p>
        <p><b>Yakuniy maosh: 3,822,000 so'm</b></p>
      `;
      break;

    case "javlon":
      info = `
        <h3>Javlon</h3>
        <p>Oylik ishlagan kunlari: 28 / 30</p>
        <p>Dam olgan kunlari: 2</p>
        <p>Asosiy maosh: 5,200,000 so'm</p>
        <p>Jarima: -52,000 so'm</p>
        <p>Mukofot: +156,000 so'm</p>
        <p><b>Yakuniy maosh: 5,304,000 so'm</b></p>
      `;
      break;

    case "olamgir":
      info = `
        <h3>Olamgir</h3>
        <p>Oylik ishlagan kunlari: 22 / 30</p>
        <p>Dam olgan kunlari: 8</p>
        <p>Asosiy maosh: 4,000,000 so'm</p>
        <p>Jarima: -480,000 so'm</p>
        <p>Mukofot: yo'q</p>
        <p><b>Yakuniy maosh: 3,520,000 so'm</b></p>
      `;
      break;

    case "abror":
      info = `
        <h3>Abror</h3>
        <p>Oylik ishlagan kunlari: 26 / 30</p>
        <p>Dam olgan kunlari: 4</p>
        <p>Asosiy maosh: 4,600,000 so'm</p>
        <p>Jarima: -184,000 so'm</p>
        <p>Mukofot: +138,000 so'm</p>
        <p><b>Yakuniy maosh: 4,554,000 so'm</b></p>
      `;
      break;
  }

  section.innerHTML = info;
}


