// Lista de invitados de la boda.
//
// Se lee en vivo de la hoja de Google (Invitados Boda Edgar Clara): si agregás o
// cambiás una fila allí, la web lo toma sin tocar este archivo. La lista de abajo
// es la copia de respaldo por si la hoja no responde.
//
// Columnas de la hoja: A Nombre · B Apellido · C Apodo

// Pegá aquí la URL de la aplicación web de Apps Script (ver apps-script-confirmaciones.js).
// Mientras esté vacío, el formulario funciona pero no guarda nada en la hoja.
window.RSVP_ENDPOINT = '';

window.INVITADOS_SHEET = 'https://docs.google.com/spreadsheets/d/1tLa82pSr_pufbl-aYJ49UZC1oi0qs6DFPf_1BsCzTdc/gviz/tq?tqx=out:csv&gid=0';

window.INVITADOS = [
  { nombre: "Maria del Mar", apellido: "Nogues", apodo: "Mama" },
  { nombre: "Clara", apellido: "Campanelli", apodo: "Clari" },
  { nombre: "Hugo", apellido: "Campanelli", apodo: "Papi" },
  { nombre: "Marita", apellido: "Galvez", apodo: "Mery" },
  { nombre: "Ignacio", apellido: "Campanelli", apodo: "Hongui" },
  { nombre: "Paula", apellido: "Sainz", apodo: "Paulita" },
  { nombre: "Andres", apellido: "Campanelli", apodo: "Tete" },
  { nombre: "Veronica", apellido: "Fernandez", apodo: "Vero" },
  { nombre: "Elina", apellido: "Degrossi", apodo: "Mami" },
  { nombre: "Walter", apellido: "Di Pietro", apodo: "Walter" },
  { nombre: "Gabriela", apellido: "Campanelli", apodo: "Tía" },
  { nombre: "Cristian", apellido: "Rosso Alba", apodo: "Tío" },
  { nombre: "Lucas", apellido: "Rosso Alba", apodo: "Lucas" },
  { nombre: "Jeremias", apellido: "Rosso Alba", apodo: "Jere" },
  { nombre: "Francisco", apellido: "Rosso Alba", apodo: "Fran" },
  { nombre: "Agustin", apellido: "Rosso Alba", apodo: "Agus" },
  { nombre: "Marian", apellido: "A", apodo: "Marian" },
  { nombre: "Juliana", apellido: "Campanelli", apodo: "Juli" },
  { nombre: "Lorenzo", apellido: "Campanelli", apodo: "Lori" },
  { nombre: "Carola", apellido: "Campanelli", apodo: "Caro" },
  { nombre: "Adrian", apellido: "Campanelli", apodo: "Tío" },
  { nombre: "Patricia", apellido: "Riveros", apodo: "Pachi" },
  { nombre: "Claudia", apellido: "Degrossi", apodo: "Tía" },
  { nombre: "Roque", apellido: "Balbuena", apodo: "Tío" },
  { nombre: "Camila", apellido: "Balbuena", apodo: "Cami" },
  { nombre: "Graciana", apellido: "Balbuena", apodo: "Gra" },
  { nombre: "Maite", apellido: "Balbuena", apodo: "Maitu" },
  { nombre: "Marcos", apellido: "Ciani", apodo: "Marqui" },
  { nombre: "Tomas", apellido: "Stempels", apodo: "Tomi" },
  { nombre: "Patricia", apellido: "Bradley", apodo: "Paty" },
  { nombre: "Cecilia", apellido: "Degrossi", apodo: "Ceci" },
  { nombre: "Tomas", apellido: "Degrossi", apodo: "Tomi" },
  { nombre: "Ines", apellido: "Degrossi", apodo: "Inu" },
  { nombre: "Laura", apellido: "Barberan", apodo: "Lauchi" },
  { nombre: "Martin", apellido: "Barrangou", apodo: "Martín" },
  { nombre: "Milo", apellido: "Bidegain", apodo: "Milo" },
  { nombre: "Julieta", apellido: "Almada", apodo: "Jorchi" },
  { nombre: "Lucia", apellido: "Vitale", apodo: "Luvi" },
  { nombre: "Lucas", apellido: "Palumbo", apodo: "Luqui" },
  { nombre: "Florencia", apellido: "Sanseverino", apodo: "Flopi" },
  { nombre: "Joaquin", apellido: "Zelaya", apodo: "Joaco" },
  { nombre: "Francisca", apellido: "Sztyrle", apodo: "Panki" },
  { nombre: "Tomas", apellido: "Toriacio", apodo: "Tomi" },
  { nombre: "Ignacia", apellido: "Bagnardi", apodo: "Negri" },
  { nombre: "Nicolas", apellido: "Harguinteguy", apodo: "Harga" },
  { nombre: "Mariano", apellido: "Laferriere", apodo: "Marian" },
  { nombre: "Maria Jose", apellido: "Lorenzo", apodo: "Majito" },
  { nombre: "Micaela", apellido: "Dieser", apodo: "Mica" },
  { nombre: "Diego", apellido: "Rodrigue", apodo: "Die" },
  { nombre: "Sabrina", apellido: "Prouvelarie", apodo: "Sis" },
  { nombre: "Sol", apellido: "Santos", apodo: "Sol" },
  { nombre: "Lucia", apellido: "Lorenzo", apodo: "Lucecita" },
  { nombre: "Martina", apellido: "Rosa", apodo: "Martu" },
  { nombre: "Jeronimo", apellido: "Fortte", apodo: "Jero" },
  { nombre: "Pol", apellido: "Bellera", apodo: "Polandro" },
  { nombre: "Irina", apellido: "Muraviev", apodo: "Irina" },
  { nombre: "Nathalia", apellido: "Godoy", apodo: "Nathi" },
  { nombre: "Matias", apellido: "Perazzo", apodo: "Mati" },
  { nombre: "Jessica", apellido: "Breebaart", apodo: "Jess" },
  { nombre: "Maria Elena", apellido: "Maioccha", apodo: "Mari" },
  { nombre: "Juan Ignacio", apellido: "Montenegro", apodo: "Juani" },
  { nombre: "Agustin", apellido: "Pugliese", apodo: "Agus" },
  { nombre: "Tom", apellido: "Ybarguengoitia", apodo: "Tom" },
  { nombre: "Sasha", apellido: "Ybarguengoitia", apodo: "Sasha" },
  { nombre: "Esther", apellido: "Magrinya", apodo: "Esther" },
  { nombre: "Oriol", apellido: "Nogues", apodo: "Avi" },
  { nombre: "Teresa", apellido: "Cuxart", apodo: "Avia" },
  { nombre: "Marc", apellido: "Nogues", apodo: "Marc" },
  { nombre: "Carme", apellido: "Castillo", apodo: "Carme" },
  { nombre: "Clara", apellido: "Nogues", apodo: "Clara" },
  { nombre: "Julio", apellido: "Gallego", apodo: "Julio" },
  { nombre: "Eric", apellido: "Gallego", apodo: "Eric" },
  { nombre: "Jordi", apellido: "Nogues", apodo: "Jordi" },
  { nombre: "Esther Boada", apellido: "Boada", apodo: "Esther" },
  { nombre: "Claudia", apellido: "Nogues", apodo: "Claudia" },
  { nombre: "Andrea", apellido: "Nogues", apodo: "Andrea" },
  { nombre: "Oriol", apellido: "Nogues", apodo: "Oriol" },
  { nombre: "Meli", apellido: "Ybarguengoitia", apodo: "Meli" },
  { nombre: "Arantxa", apellido: "Ybarguengoitia", apodo: "Arantxa" },
  { nombre: "Aina", apellido: "Ybarguengoitia", apodo: "Aina" },
  { nombre: "Juan Pablo", apellido: "Sepulveda", apodo: "Juanpi" },
  { nombre: "Julia", apellido: "Ybarguengoitia", apodo: "Julia" },
  { nombre: "Esther", apellido: "Vilaro", apodo: "Esther" },
  { nombre: "Jordi", apellido: "Ribera", apodo: "Jordi" },
  { nombre: "Tania", apellido: "Ybarguengoitia", apodo: "Tania" },
  { nombre: "Jordi", apellido: "Cano", apodo: "Jordi" },
  { nombre: "Aran", apellido: "Carvajal", apodo: "Aran" },
  { nombre: "Irati", apellido: "Carvajal", apodo: "Irati" },
  { nombre: "Laira", apellido: "Cano", apodo: "Laira" },
  { nombre: "Eva", apellido: "Ybarguengoitia", apodo: "Eva" },
  { nombre: "Martine", apellido: "cawel", apodo: "Martine" },
  { nombre: "Pedro", apellido: "Atserias", apodo: "Buba" },
  { nombre: "Mariela", apellido: "Norambuena", apodo: "Mane" },
  { nombre: "Dagny", apellido: "Atserias", apodo: "Dagny" },
  { nombre: "Marc", apellido: "Palou", apodo: "Oliva" },
  { nombre: "Berta", apellido: "Faig", apodo: "Berta" },
  { nombre: "Laura", apellido: "Quindos", apodo: "Kein" },
  { nombre: "Ahxel", apellido: "Verdugo", apodo: "Ahxel" },
  { nombre: "Thalía", apellido: "Lavall", apodo: "Tha" },
  { nombre: "Felix", apellido: "Roca", apodo: "Felix" },
  { nombre: "Pol", apellido: "Estaller", apodo: "Pol" },
  { nombre: "Berta", apellido: "Portella", apodo: "Berta" },
  { nombre: "Fran", apellido: "Baixas", apodo: "Fran" },
  { nombre: "Gianmarco", apellido: "Greci", apodo: "Gian" },
  { nombre: "Alba", apellido: "Jordan", apodo: "Alba" },
  { nombre: "Dani", apellido: "Moliner", apodo: "Dani" },
  { nombre: "Ignacio", apellido: "Barberan", apodo: "Nacho" },
  { nombre: "Alex", apellido: "Ayres", apodo: "Alex" },
  { nombre: "Maria", apellido: "Ley", apodo: "Maria" },
  { nombre: "Juanjo", apellido: "Chiri", apodo: "Juanjo" },
  { nombre: "Valeria", apellido: "Conde", apodo: "Vale" },
  { nombre: "Albert", apellido: "Torrents", apodo: "Turre" },
  { nombre: "Ines", apellido: "Bellido", apodo: "Ines" },
  { nombre: "Max", apellido: "Viladoms", apodo: "Max" },
  { nombre: "Sara", apellido: "Guix", apodo: "Sara" },
  { nombre: "Lucas", apellido: "Isern", apodo: "Pel" },
  { nombre: "Rosa", apellido: "Villalba", apodo: "Rosa" },
  { nombre: "Albert", apellido: "Segu", apodo: "Albert" },
  { nombre: "Julia", apellido: "Rodriguez", apodo: "Julia" },
  { nombre: "Edgar", apellido: "Regincos", apodo: "Regi" },
  { nombre: "Marta", apellido: "Descamps", apodo: "Marta" },
  { nombre: "Antonio", apellido: "Garcia", apodo: "Antonio" },
  { nombre: "Claudia", apellido: "Rasmussen", apodo: "Claudia" },
  { nombre: "Andrea", apellido: "Moreno", apodo: "Andrea" },
  { nombre: "Marco", apellido: "Gasser", apodo: "Marco" },
  { nombre: "Hector", apellido: "Rueda", apodo: "Hector" }
];

// Refresco en vivo desde la hoja (silencioso: si falla, se usa la copia de arriba)
(function () {
  function parseCSV(text) {
    var rows = [], row = [], val = '', q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { val += '"'; i++; } else q = false; }
        else val += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(val); val = ''; }
      else if (c === '\n') { row.push(val); rows.push(row); row = []; val = ''; }
      else if (c !== '\r') val += c;
    }
    row.push(val); rows.push(row);
    return rows;
  }
  try {
    fetch(window.INVITADOS_SHEET, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.text() : null; })
      .then(function (text) {
        if (!text) return;
        var rows = parseCSV(text).slice(1);
        var list = [];
        for (var i = 0; i < rows.length; i++) {
          var n = (rows[i][0] || '').replace(/^\s*\d+\.\s*/, '').trim();
          var a = (rows[i][1] || '').trim();
          var ap = (rows[i][2] || '').trim();
          if (n && a) list.push({ nombre: n, apellido: a, apodo: ap || n });
        }
        if (list.length) window.INVITADOS = list;
      })
      .catch(function () {});
  } catch (e) {}
})();
