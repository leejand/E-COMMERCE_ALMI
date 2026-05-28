export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-surface py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-headline-lg text-primary-fixed mb-6">ALMI</h2>
            <p className="max-w-sm font-body-md opacity-60">
              High-fidelity audio for the next generation of creators. Based in Tokyo, shipping globally.
            </p>
          </div>
          <div>
            <h6 className="font-label-bold mb-6 text-primary-fixed">SOCIAL</h6>
            <ul className="space-y-4 opacity-60">
              <li><a className="hover:opacity-100 transition-opacity" href="#">Instagram</a></li>
              <li><a className="hover:opacity-100 transition-opacity" href="#">TikTok</a></li>
              <li><a className="hover:opacity-100 transition-opacity" href="#">X / Twitter</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-label-bold mb-6 text-primary-fixed">LEGAL</h6>
            <ul className="space-y-4 opacity-60">
              <li><a className="hover:opacity-100 transition-opacity" href="#">Privacy</a></li>
              <li><a className="hover:opacity-100 transition-opacity" href="#">Terms</a></li>
              <li><a className="hover:opacity-100 transition-opacity" href="#">Warranty</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between opacity-40 text-xs font-label-sm">
          <p>&copy; 2024 ALMI TECH GMBH.</p>
          <p>DESIGNED FOR THE UNFILTERED.</p>
        </div>
      </div>
    </footer>
  )
}
