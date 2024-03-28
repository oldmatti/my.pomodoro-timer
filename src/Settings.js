import ReactSlider from "react-slider";
import './Slider.css'
import { useContext } from "react";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

export default function Settings() {

  const settingsInfo = useContext(SettingsContext)

  return (
    <div style={{textAlign: 'left'}}>
    <label>work: {settingsInfo.workMinutes}:00</label>
    <ReactSlider
    className={"slider"}
    thumbActiveClassName={"thumb"}
    trackClassName={"track"}
    value={settingsInfo.workMinutes}
    onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
    min={1}
    max={120}
    />

    <label>break: {settingsInfo.breakMinutes}:00</label>
    <ReactSlider
    className={"slider green"}
    thumbActiveClassName={"green"}
    trackClassName={"track"}
    value={settingsInfo.breakMinutes}
    onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
    min={1}
    max={120}
    />

    <div style={{textAlign:'center', marginTop: '20px'}}>

    <BackButton onClick={() => {settingsInfo.setShowSettings(false)}}/>

    </div>

    
    
    </div>
  )
}