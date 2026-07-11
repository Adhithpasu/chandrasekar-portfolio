export default function EarlyProject() {
  return (
    <section
      id="early-project"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="mb-12">
        <p className="text-indigo-400 uppercase tracking-widest">
          Middle School Technology Journey
        </p>
        
        <h2 className="text-5xl font-bold mt-3">
          From FLL State-Level Selection to Independent Experimentation
        </h2>
        
        <p className="text-slate-400 mt-5 max-w-3xl leading-8">
          After my FIRST LEGO League team advanced to the state level, I continued
          exploring robotics independently. Using LEGO SPIKE Prime, I designed and
          recorded an experiment examining resistance during arm movement. The project
          strengthened my understanding of sensors, programming, testing, and the
          connection between hardware and scientific inquiry.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800">
          <video
            controls
            className="w-full"
            poster="/journey/spike-thumbnail.jpg"
          >
            <source
              src="/journey/handCastResist_measure.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </div>

        <div>

          <h3 className="text-3xl font-semibold mb-6">
            What I Learned
          </h3>

        <ul className="space-y-4 text-slate-300 leading-7">
          <li>✓ Advanced to the state level in FIRST LEGO League</li>
          <li>✓ Continued robotics exploration beyond the competition</li>
          <li>✓ Designed an independent LEGO SPIKE Prime experiment</li>
          <li>✓ Programmed sensors and examined resistance during arm movement</li>
          <li>✓ Developed skills in testing, troubleshooting, and scientific inquiry</li>
        </ul>

        </div>

      </div>
    </section>
  );
}
