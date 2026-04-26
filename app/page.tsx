export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif' }}>
      
      {/* HERO */}
      <section style={{
        height: '80vh',
        background: '#0B1F3A',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem' }}>
          Southern Delaware Orchestra
        </h1>
        <p style={{ fontSize: '1.5rem', marginTop: 10 }}>
          Neighbors playing for neighbors
        </p>
      </section>

      {/* EVENTS */}
      <section style={{ padding: 40 }}>
        <h2>Upcoming Events</h2>

        <div>
          <h3>Coastal Spirit: Delaware 250</h3>
          <p>July 11 – Milford High School</p>
        </div>

        <div>
          <h3>Coastal Spirit: Delaware 250</h3>
          <p>July 12 – Cape Henlopen High School</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#0B1F3A',
        color: 'white',
        padding: 40,
        textAlign: 'center'
      }}>
        <h2>Support the Music</h2>
        <p>Your donation helps bring music to the community.</p>
      </section>

    </main>
  )
}
