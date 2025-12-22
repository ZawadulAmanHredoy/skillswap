export default function Footer(){
  return (
    <footer className="bg-base-100">
      <div className="container-page section">
        <div className="surface p-8 sm:p-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <aside>
              <h2 className="text-xl font-extrabold tracking-tight">SkillSwap</h2>
              <p className="mt-2 opacity-70">
                Trade skills, build community. Learn locally with trusted providers.
              </p>
              <p className="mt-4 text-sm opacity-60">
                © {new Date().getFullYear()} SkillSwap. All rights reserved.
              </p>
            </aside>

            <nav>
              <h6 className="font-bold mb-3">Contact</h6>
              <div className="flex flex-col gap-2">
                <a className="link link-hover" href="mailto:support@skillswap.local">
                  support@skillswap.local
                </a>
                <a className="link link-hover" href="#">
                  Privacy Policy
                </a>
              </div>
            </nav>

            <nav>
              <h6 className="font-bold mb-3">Social</h6>
              <div className="flex flex-col gap-2">
                <a className="link link-hover" href="#">
                  Twitter
                </a>
                <a className="link link-hover" href="#">
                  Instagram
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
