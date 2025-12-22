export default function Footer(){
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <h2 className="font-semibold text-lg">SkillSwap</h2>
        <p>Trade skills, build community.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover" href="mailto:support@skillswap.local">support@skillswap.local</a>
        <a className="link link-hover" href="#">Privacy Policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover" href="#">Twitter</a>
        <a className="link link-hover" href="#">Instagram</a>
      </nav>
    </footer>
  );
}
