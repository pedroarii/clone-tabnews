export default function Home() {
  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #4caf50, #2e7d32);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .card {
          background: white;
          width: 700px;
          max-width: 100%;
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }

        h1 {
          color: #2e7d32;
          margin-bottom: 15px;
        }

        p {
          color: #555;
          line-height: 1.6;
        }

        .info {
          background: #f4f4f4;
          border-radius: 12px;
          padding: 20px;
          margin: 25px 0;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          background: #e8f5e9;
          margin: 10px auto;
          padding: 14px;
          border-radius: 10px;
          max-width: 280px;
          font-size: 18px;
        }

        button {
          margin-top: 25px;
          border: none;
          background: #2e7d32;
          color: white;
          padding: 15px 30px;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s;
        }

        button:hover {
          transform: scale(1.05);
          background: #1b5e20;
        }

        footer {
          margin-top: 30px;
          color: gray;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h1>🏕️ Convite para a Chapada 🌄</h1>

          <p>
            Você foi oficialmente convidado para um final de semana cheio de
            cachoeiras, trilhas, churrasco, risadas e muita resenha.
          </p>

          <div className="info">
            <h3>📍 Destino</h3>
            <p>Chapada dos Veadeiros</p>

            <h3>🎒 Não esqueça</h3>
            <p>
              Roupa de banho, chinelo, protetor solar, roupa confortável e
              disposição!
            </p>
          </div>

          <h2>✅ Confirmados</h2>

          <ul>
            <li>👤 Pedro</li>
            <li>❤️ Isadora</li>
          </ul>

          <button
            onClick={() => alert("Partiu Chapada!! 🏕️")}
          >
            Confirmar presença
          </button>

          <footer>Feito com ❤️</footer>
        </div>
      </div>
    </>
  );
}