import gitHubIcon from "./../btnGitHub/githubBlack.svg";
import "./style.css"

const BtnGitHub = () => {
  return (
            <a target="_blank" rel="noreferrer" href="https://github.com/Makssol1208" className="btn-outline">
                <img src={gitHubIcon} alt="GitHub" />
                GitHub repo
            </a>
  );
}
 
export default BtnGitHub;