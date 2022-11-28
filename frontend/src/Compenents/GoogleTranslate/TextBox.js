import SelectDropDown from "./SelectDropDown";
import "./Translate.css";

const TextBox = ({style}) => {
    return(
        <div className={style}>
            <SelectDropDown/>
            <input/>
            <textarea
                placeholder={style=='input' ? 'Enter text here' : 'Translation will appear here'}
                disabled={style=='output' }
            />
        </div>
    )
}
export default TextBox;