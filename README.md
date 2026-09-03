# 🎬 Adastra Cinema — Front-End

Front-end della web application **Adastra Cinema**, un sito per la gestione dell'interazione utente con una catena di cinema: scelta del cinema, consultazione dei film in programmazione, selezione dei posti in sala e acquisto dei biglietti.

> 🔗 Repository Back-End: [BE-AdAdstra-Capstone-EPICODE](https://github.com/giannibussoletti/BE-AdAdstra-Capstone-EPICODE)

---

## 🛠️ Tech Stack

- **TypeScript**
- **React**
- **Redux Store** (gestione dello stato globale)
- **Vite** (build tool e dev server)
- **React-Bootstrap** (componenti UI)
- **SCSS** (variabili e personalizzazione dello stile)

---

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

| Strumento             | Versione consigliata       | Download                                     |
| --------------------- | -------------------------- | -------------------------------------------- |
| Node.js (include npm) | LTS ≥ 18                   | [nodejs.org](https://nodejs.org/)            |
| Git                   | qualsiasi versione recente | [git-scm.com](https://git-scm.com/downloads) |

> ⚠️ Il front-end comunica con il back-end di Adastra Cinema: per poter usare l'applicazione completa, il [server back-end](https://github.com/giannibussoletti/BE-AdAdstra-Capstone-EPICODE) deve essere avviato e raggiungibile (di default su `http://localhost:5555`).

---

## 🚀 Installazione e avvio

1. **Clona il repository**

   ```bash
   git clone https://github.com/giannibussoletti/FE-AdAdstra-Capstone-EPICODE.git
   cd FE-AdAdstra-Capstone-EPICODE
   ```

2. **Installa le dipendenze**

   ```bash
   npm install
   ```

3. **Avvia il progetto in modalità sviluppo**

   ```bash
   npm run dev
   ```

4. Apri il browser all'indirizzo indicato nel terminale (di default Vite espone il progetto su `http://localhost:5173`).

---

## 🎮 Guida all'uso

Ecco come muoversi all'interno dell'applicazione:

1. **Scegli il cinema** dal menu nella navbar in alto: verranno caricati i film disponibili con i relativi orari.
2. **Seleziona un orario** di uno dei film: verrai portato alla mappa della sala per scegliere i posti.
3. Dopo aver scelto i posti, clicca su **"Verifica e acquista"** per procedere al pagamento.
4. Nella pagina di pagamento:
   - se sei **loggato**, l'email a cui verranno inviati i biglietti viene inserita automaticamente;
   - se **non sei loggato**, l'inserimento dell'email è obbligatorio per ricevere i biglietti.
5. Dal menu utente in alto a destra puoi **registrarti** o **accedere**: in questo modo puoi anche tenere traccia dei film acquistati durante l'anno corrente.
6. Ogni film ha una **pagina dedicata** con trama, regista, attori e data di uscita. Se il film è già uscito, da quella pagina è possibile scegliere direttamente un orario e acquistare il biglietto.

---

## 🗺️ Roadmap del progetto

Alcune funzionalità in programma per le prossime versioni:

- Prevendita per i film di prossima uscita
- Gestione della mappa dei posti riservati alle persone diversamente abili
- Crop della foto profilo per una migliore gestione dell'aspect ratio dell'avatar
- Creazione di una pagina di gestione per la creazione e la manutenzione di film, orari e cinema

---

## 🔗 Link utili

- [Repository Back-End](https://github.com/giannibussoletti/BE-AdAdstra-Capstone-EPICODE)
- [Download Node.js](https://nodejs.org/)
- [Download Git](https://git-scm.com/downloads)
