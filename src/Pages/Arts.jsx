// Arts.jsx
import React from "react";
import "./Arts.css";

const artworks = [
  { id: 1, title: "Dragon", src: "https://i.ibb.co/VpCHKzH5/Before.png", desc: "Manipulating images using masking techniques and knowledge of color theory. Tools: Photoshop." },
  { id: 2, title: "Stargazing", src: "https://www.instagram.com/p/C3urmjyPvkN/?img_index=1", desc: "Blending traditional and digital artspace. Tools: Photoshop." },
  { id: 3, title: "Miku 3D", src: "https://www.behance.net/embed/project/201614135?ilo0=1", desc: "Modeling Chibi Hatsune Miku. Tools: Blender." },
];

export default function Arts() {
  return (
    <main className="arts-page">
      <header className="arts-header">
        <h1>Simple gallery. Will decorate later.</h1>
        <p>For digital and hybrid artworks created using tools like Photoshop and Blender.</p>
      </header>

      <section className="art-grid">
        {artworks.map((art) => {
          const isInstagram = art.src.includes("instagram.com");
          const isFacebook = art.src.includes("facebook.com");
          const isBehance = art.src.includes("behance.net");
          const isImageFile = art.src.match(/\.(jpg|jpeg|png|gif|webp|avif)$/i) !== null;

          let embedUrl = null;
          if (isInstagram) {
            embedUrl = art.src.split("?")[0] + "embed";
          } else if (isBehance) {
            const idMatch = art.src.match(/project\/(\d+)/) || art.src.match(/gallery\/(\d+)/);
            const projectId = idMatch ? idMatch[1] : null;
            if (projectId) {
              embedUrl = `https://www.behance.net/embed/project/${projectId}?ilo0=1`;
            }
            else if (isFacebook) {
            embedUrl = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(art.src)}&show_text=true&width=500`;
            }
          }

          return (
            <article key={art.id} className="art-card">
              <div className="art-media">
              
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={art.title}
                    className="art-iframe"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                    allow="clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                ) : (
                  <img src={art.src} alt={art.title} className="art-img" />
                )}
              </div>

              <div className="art-body">
                <h3>{art.title}</h3>
                <p>{art.desc}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}