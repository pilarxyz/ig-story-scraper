let fetch;

(async () => {
  fetch = (await import("node-fetch")).default;
})();

// create header
const header = {
  headers: {
    cookie: process.env.COOKIE,
    "x-ig-app-id": process.env.IG_APP_ID,
  },
};

function scrapeId(username) {
  const url = process.env.IG_API_USER + username;
// jika status ok, maka ambil data data.user.id lalu return, jika ada kesalahan munculkan log error
    fetch(url, header)
        .then((res) => res.json())
        .then((data) => {
        if (data.status === "ok") {
            const id = data.data.user.id;
            console.log(`ID dari ${username} adalah ${id}`);
            return id;
        } else {
            console.log(`Gagal mengambil ID dari ${username}`);
            return null;
        }
        })
        // catch error and return null
        .catch((err) => {
        console.log(`Terjadi kesalahan: ${err}`);
        return null;
        }
        );
    }

function scrapeStory(id) {
  console.log(`Scraping story dari ${id}`);
}
// Ekspor fungsi untuk digunakan di file lain
module.exports = { scrapeId, scrapeStory };
