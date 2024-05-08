
import "./PlatformDropDown.scss"
import {platformSvgLink} from "../../../content.js"

const PlatformDropDown = () => {
  return (
    <div>
      <div className="platform">
        <ul className="platformList">
          {platformSvgLink.map((platform) => (
            <li key={platform.name} className="platformName">
              {platform.platformSvg} <span>{platform.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlatformDropDown